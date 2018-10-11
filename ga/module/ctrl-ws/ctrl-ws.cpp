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

#include <websocketpp/config/asio_no_tls.hpp>
#include <websocketpp/server.hpp>

#include "ga-common.h"
#include "ga-conf.h"
#include "controller.h"
#include "ctrl-ws.h"

#include "rtspconf.h"

typedef websocketpp::server<websocketpp::config::asio> server;
 
using websocketpp::lib::placeholders::_1;
using websocketpp::lib::placeholders::_2;
using websocketpp::lib::bind;

server echo_server;

static int ctrl_ws_initialized = 0;
static int ctrl_ws_started = 0;
static pthread_t ctrl_ws_tid;
 
// pull out the type of messages sent by our config
typedef server::message_ptr message_ptr;
 
// Define a callback to handle incoming messages
void ctrl_ws_on_message(server* s, websocketpp::connection_hdl hdl, message_ptr msg) {
    //ga_error("ctrl-ws: on_message called with hdl: %s and message: %s\n", hdl.lock().get(), msg->get_payload());
 
    // check for a special command to instruct the server to stop listening so
    // it can be cleanly exited.
    if (msg->get_payload() == "stop-listening") {
        s->stop_listening();
        return;
    }
 
    try {
        s->send(hdl, msg->get_payload(), msg->get_opcode());
    } catch (websocketpp::exception const & e) {
        ga_error("ctrl-ws: Echo failed because: (%s)\n", e.what());
    }
}

static void *
ctrl_ws_threadproc(void *rtspconf) {

    //ga_error("ctrl-ws: ctrl_ws_threadproc\n");

    try {

        // Register our message handler
        echo_server.set_message_handler(bind(&ctrl_ws_on_message,&echo_server,::_1,::_2));
 
        // Listen on port 9002
        echo_server.listen(9002);
 
        // Start the server accept loop
        echo_server.start_accept();
 
        // Start the ASIO io_service run loop
        echo_server.run();

 
    } catch (websocketpp::exception const & e) {
        //ga_error("ctrl-ws: error: %s\n", e.what());
    } catch (...) {
        //ga_error("ctrl-ws: error: other exception\n");
    }

    return NULL;

}

int
ctrl_ws_init(void *arg) {

    //ga_error("ctrl-ws: init\n");

    try {

        // Set logging settings
        echo_server.set_access_channels(websocketpp::log::alevel::all);
        echo_server.clear_access_channels(websocketpp::log::alevel::frame_payload);
 
        // Initialize Asio
        echo_server.init_asio();

        ctrl_ws_initialized = 1;
 
    } catch (websocketpp::exception const & e) {
        //ga_error("ctrl-ws: error: %s\n", e.what());
    } catch (...) {
        //ga_error("ctrl-ws: error: other exception\n");
    }

	return 0;
}

int
ctrl_ws_deinit(void *arg) {

    //ga_error("ctrl-ws: deinit\n");

	// TODO;

	return 0;
}

int
ctrl_ws_start(void *arg) {

    //ga_error("ctrl-ws: start\n");

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

    //ga_error("ctrl-ws: stop\n");

    if(ctrl_ws_started == 0)
        return 0;
    ctrl_ws_started = 0;
    pthread_cancel(ctrl_ws_tid);

    return 0;
}

#ifdef GA_MODULE
ga_module_t *
module_load() {
    //ga_error("ctrl-ws: load\n");
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

