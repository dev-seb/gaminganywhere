/*
 * This file is part of GamingAnywhere (GA).
 *
 * GA is free software; you can redistribute it and/or modify it
 * under the terms of the 3-clause BSD License as published by the
 * Free Software Foundation: http://directory.fsf.org/wiki/License:BSD_3Clause
 *
 * GA is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * You should have received a copy of the 3-clause BSD License along with GA;
 * if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

#include <stdio.h>

// WebSocket
#include <websocketpp/config/asio_no_tls.hpp>
#include <websocketpp/server.hpp>

// JSON Parser
#include <boost/iostreams/device/array.hpp>
#include <boost/iostreams/stream.hpp>
#include <boost/property_tree/ptree.hpp>
#include <boost/property_tree/json_parser.hpp>

#include "ga-common.h"
#include "ga-conf.h"
#include "controller.h"
#include "ctrl-sdl.h"
#include "ctrl-ws.h"

#include "rtspconf.h"

typedef websocketpp::server<websocketpp::config::asio> server;
 
using websocketpp::lib::placeholders::_1;
using websocketpp::lib::placeholders::_2;
using websocketpp::lib::bind;

server ws_server;

static int ctrl_ws_initialized = 0;
static int ctrl_ws_started = 0;
static pthread_t ctrl_ws_tid;

static msgfunc replay = NULL;

// pull out the type of messages sent by our config
typedef server::message_ptr message_ptr;

// Define a callback to handle incoming messages
void ctrl_ws_on_message(server* s, websocketpp::connection_hdl hdl, message_ptr msg) {
    ga_error("ctrl-ws: on_message\n");

    // Get message from payload
    char const * payload = static_cast<char const *>(msg->get_payload().data());
    std::string message(payload);
    ga_error("message: %s\n", message.c_str());

    // Get message as stream
    boost::iostreams::array_source as(&message[0], message.size());
    boost::iostreams::stream<boost::iostreams::array_source> is(as);

    // Parse JSON
    boost::property_tree::ptree root;
    boost::property_tree::read_json(is, root);

    // Create message according to type
    int type = root.get<int>("type", 0);

	sdlmsg_t m;

    switch(type) {
        // Keyboard
	    case SDL_EVENT_MSGTYPE_KEYBOARD: {
	        //ga_error("== event keyboard\n");
            int state = root.get<int>("state", 0); // 1 = pressed
            int scancode = root.get<int>("scancode", 0); // SDL Scan Code value
            int key = root.get<int>("key", 0); // SDL Key value
            int mod = root.get<int>("mod", 0); // SDL Mod value
            int unicode = 0;
            sdlmsg_keyboard_t *msgk = (sdlmsg_keyboard_t*) &m;
            bzero(&m, sizeof(sdlmsg_keyboard_t));
            msgk->msgsize = htons(sizeof(sdlmsg_keyboard_t));
            msgk->msgtype = SDL_EVENT_MSGTYPE_KEYBOARD;
            msgk->is_pressed = state;
#if 1	// only support SDL2
            msgk->scancode = htons(scancode);
            msgk->sdlkey = htonl(key);
            msgk->unicode = htonl(unicode);
#endif
            msgk->sdlmod = htons(mod);
            break;
        }
        // Mouse
        case SDL_EVENT_MSGTYPE_MOUSEKEY:
        case SDL_EVENT_MSGTYPE_MOUSEMOTION:
        case SDL_EVENT_MSGTYPE_MOUSEWHEEL: {
            //ga_error("== event mouse\n");
            int state = root.get<int>("state", 0); // 1 = pressed
            int mousebutton = root.get<int>("mousebutton", 0); // SDL Mouse button
            //int mousestate = root.get<int>("mousestate", 0); // SDL Mouse state
            int mousex = root.get<int>("mousex", 0); // Mouse X position
            int mousey = root.get<int>("mousey", 0); // Mouse Y position
            int relativeMouseMode = root.get<int>("relativeMouseMode", 0); // Mouse relative mode
            int mouseRelX = root.get<int>("mouseRelX", 0); // Mouse relative X position
            int mouseRelY = root.get<int>("mouseRelY", 0); // Mouse relative T position
            if(type == SDL_EVENT_MSGTYPE_MOUSEKEY) {
                //ga_error("== event mouse key\n");
                sdlmsg_mouse_t *msgm = (sdlmsg_mouse_t*) &m;
                bzero(&m, sizeof(sdlmsg_mouse_t));
                msgm->msgsize = htons(sizeof(sdlmsg_mouse_t));
                msgm->msgtype = SDL_EVENT_MSGTYPE_MOUSEKEY;
                msgm->is_pressed = state;
                msgm->mousex = htons(mousex);
                msgm->mousey = htons(mousey);
                msgm->mousebutton = mousebutton;
            }
            else if(type == SDL_EVENT_MSGTYPE_MOUSEMOTION) {
                //ga_error("== event mouse motion\n");
                sdlmsg_mouse_t *msgm = (sdlmsg_mouse_t*) &m;
                bzero(&m, sizeof(sdlmsg_mouse_t));
                msgm->msgsize = htons(sizeof(sdlmsg_mouse_t));
                msgm->msgtype = SDL_EVENT_MSGTYPE_MOUSEWHEEL;
                msgm->mousex = htons(mousex);
                msgm->mousey = htons(mousey);
            }
            else if(type == SDL_EVENT_MSGTYPE_MOUSEWHEEL) {
                //ga_error("== event mouse wheel\n");
                sdlmsg_mouse_t *msgm = (sdlmsg_mouse_t*) &m;
                bzero(&m, sizeof(sdlmsg_mouse_t));
                msgm->msgsize = htons(sizeof(sdlmsg_mouse_t));
                msgm->msgtype = SDL_EVENT_MSGTYPE_MOUSEMOTION;
                msgm->mousestate = state;
                msgm->relativeMouseMode = (relativeMouseMode != 0) ? 1 : 0;
                msgm->mousex = htons(mousex);
                msgm->mousey = htons(mousey);
                msgm->mouseRelX = htons(mouseRelX);
                msgm->mouseRelY = htons(mouseRelY);
            }
            break;
	    }
	    default:
	        return;
	}

    // Replay message
    ga_error("send: msgtype: %d\n", m.msgtype);
    if(replay != NULL) {
        replay(&m, ntohs(m.msgsize));
    }

}

static void *
ctrl_ws_threadproc(void *rtspconf) {
    ga_error("ctrl-ws: ctrl_ws_threadproc\n");

    try {

        // Register our message handler
        ws_server.set_message_handler(bind(&ctrl_ws_on_message,&ws_server,::_1,::_2));
 
        // Listen on port 9002
        ws_server.listen(websocketpp::lib::asio::ip::tcp::v4(), 9002);
 
        // Start the server accept loop
        ws_server.start_accept();
 
        // Start the ASIO io_service run loop
        ws_server.run();

 
    } catch (websocketpp::exception const & e) {
        //ga_error("ctrl-ws: error: %s\n", e.what());
    } catch (...) {
        //ga_error("ctrl-ws: error: other exception\n");
    }

    return NULL;

}

int
ctrl_ws_init(void *arg) {
    ga_error("ctrl-ws: init\n");

    try {

        // Set logging settings
        ws_server.set_access_channels(websocketpp::log::alevel::all);
        ws_server.clear_access_channels(websocketpp::log::alevel::frame_payload);
 
        // Initialize Asio
        ws_server.init_asio();

        ctrl_ws_initialized = 1;
 
    } catch (websocketpp::exception const & e) {
        //ga_error("ctrl-ws: error: %s\n", e.what());
    } catch (...) {
        //ga_error("ctrl-ws: error: other exception\n");
    }

    // Get ctrl-sdl replay function from controller
    replay = ctrl_server_getreplay();

	return 0;
}

int
ctrl_ws_deinit(void *arg) {
    ga_error("ctrl-ws: deinit\n");

	// Stop server
	ws_server.stop();

	return 0;
}

int
ctrl_ws_start(void *arg) {
    ga_error("ctrl-ws: start\n");

    if(ctrl_ws_started != 0)
        return 0;
    ctrl_ws_started = 1;

    if(pthread_create(&ctrl_ws_tid, NULL, ctrl_ws_threadproc, arg) != 0) {
        ctrl_ws_started = 0;
        ga_error("ctrl-ws: create thread failed.\n");
        return -1;
    }
    pthread_detach(ctrl_ws_tid);    

    return 0;        
}

int
ctrl_ws_stop(void *arg) {
    ga_error("ctrl-ws: stop\n");

    if(ctrl_ws_started == 0)
        return 0;
    ctrl_ws_started = 0;
    pthread_cancel(ctrl_ws_tid);

    return 0;
}

#ifdef GA_MODULE
ga_module_t *
module_load() {
    ga_error("ctrl-ws: load\n");
	static ga_module_t m;
	bzero(&m, sizeof(m));
	m.type = GA_MODULE_TYPE_CONTROL;
	m.name = strdup("ctrl-ws");
	m.init = ctrl_ws_init;
	m.deinit = ctrl_ws_deinit;
    m.start = ctrl_ws_start;
    m.stop = ctrl_ws_stop;
	return &m;
}
#endif

