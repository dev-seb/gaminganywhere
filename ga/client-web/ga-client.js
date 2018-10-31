/*
 * Javascript SDL implementation trough WebSocket
 */

// GA SDL Events

var SDL_EVENT_MSGTYPE_KEYBOARD 			= 1;
var SDL_EVENT_MSGTYPE_MOUSEKEY			= 2;
var SDL_EVENT_MSGTYPE_MOUSEMOTION		= 3;
var SDL_EVENT_MSGTYPE_MOUSEWHEEL		= 4;

var GAClient = {
    websocket: null,
    canvas: null,
    canvasRect: {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    },
    events: [],
    keyDown: 0,
    keyEnabled: true,
    mouseDown: 0,
    mouseEnabled: true,
    touchEnabled: false,
    init: function(websocket, canvas) {
        // Init WebSocket
        GAClient.websocket = websocket;
        // Bind listener
        if(GAClient.keyEnabled) {
            window.addEventListener("keyup", GAClient.handleEvent);
            window.addEventListener("keydown", GAClient.handleEvent);
        }
        if(GAClient.mouseEnabled) {
            canvas.addEventListener("mousemove", GAClient.handleEvent);
            canvas.addEventListener("mouseup", GAClient.handleEvent);
            canvas.addEventListener("mousedown", GAClient.handleEvent);
            canvas.addEventListener("mouseswheel", GAClient.handleEvent);
            canvas.addEventListener("wheel", GAClient.handleEvent);
        } 
        if(GAClient.touchEnabled) {
            canvas.addEventListener("touchmove", GAClient.handleEvent);
            canvas.addEventListener("touchstart", GAClient.handleEvent);
            canvas.addEventListener("touchend", GAClient.handleEvent);
        }

        // TODO: 'joystick_button_up'
        // TODO: 'joystick_button_down'
        // TODO: 'joystick_axis_motion

        GAClient.canvas = canvas;
        GAClient.canvasRect = canvas.getBoundingClientRect();

        // TODO: update canvasRect on resize
    },
    getSDLKeyboardMessage: function() {
        return {
            type: 0,                // SDL Message type
            state: 0,	            // 1 = pressed
            scancode: 0,	        // SDL Scan Code value
            key: 0,			        // SDL Key value
            mod: 0			        // SDL Mod value
        }
    },
    getSDLMouseMessage: function() {
        return {
            type: 0,		        // Message type
            state: 0,	            // 1 = pressed
            mousebutton: 0,	        // SDL Mouse button
            mousestate: 0,		    // SDL Mouse state
            mousex: 0,			    // Mouse X position
            mousey: 0,			    // Mouse Y position
            relativeMouseMode: 0,	// Mouse relative mode
            mouseRelX: 0,		    // Mouse relative X position
            mouseRelY: 0		    // Mouse relative Y position
        }
    },
    getKeyCode: function(event) {
        return DOM_Keycodes[event.keyCode] || SDL_Keycode.SDLK_UNKNOWN;
    },
    getScanCode: function(event) {
        return DOM_Scancodes[event.keyCode] || SDL_Scancode.SDL_SCANCODE_UNKNOWN;
    },
    getButtonCode: function(event) {
        return DOM_Mousecodes[event.button] || 0;
    },
    getMouseCoordinates: function(event) {
        var coordinates = {
            x: 0,
            y: 0
        };
        var eventType = event.type.substr(0, 5);
        // Mouse event
        if(eventType == 'mouse') {
            coordinates.x = event.x - GAClient.canvasRect.left;
            coordinates.y = event.y - GAClient.canvasRect.left;
        }
        // Touch event
        else if(eventType == 'touch') {
            if(event.touches.length > 0) {
                var touch = event.touches[0];
                coordinates.x = touch.clientX - GAClient.canvasRect.left;
                coordinates.y = touch.clientY - GAClient.canvasRect.left;
            }
        }
        // TODO: handle scale ratio (need to know remote resolution)
        return coordinates;
    },
    getMouseState: function() {
        switch(GAClient.mouseDown) {
            case SDL_BUTTON_LEFT:
                return SDL_BUTTON_LMASK;
            case SDL_BUTTON_MIDDLE:
                return SDL_BUTTON_MMASK;
            case SDL_BUTTON_RIGHT:
                return SDL_BUTTON_RMASK;
        }
        return 0;
    },
    getMouseWheelDeltas: function(event) {
        // Get deltas
        var deltas = {
            x: 0,
            y: 0
        };
        if(event.type == 'wheel') {
            if(event.wheelDelta) {
                deltas.y = event.wheelDelta;
            }
            if(event.wheelDeltaX) {
                deltas.x = event.wheelDeltaX;
            }
            if(event.wheelDeltaY) {
                deltas.y = event.wheelDeltaY;
            }
        }
        else {
            if(event.deltaX) {
                deltas.x = event.deltaX;
            }
            if(event.deltaY) {
                deltas.y = event.deltaY
            }
        }
        return deltas;
    },
    handleEvent: function(event) {
        //console.log(event);
        var message = null;
        switch(event.type) {
            case 'keydown':
            case 'keyup': {
                console.log("== " + event.keyCode + " (" + SDL_Keycode.SDLK_RETURN + " / " + (80 | 1<<10) + ")");
                var down = (event.type == 'keydown');
                var code = GAClient.getScanCode(event);
                var key = GAClient.getKeyCode(event);
                var isModKey = (key >= 1248 && key <= 1254);
                if(isModKey) {
                    GAClient.keyDown = down ? key : 0;
                }
                // Create message
                message = GAClient.getSDLKeyboardMessage();
                message.type = SDL_EVENT_MSGTYPE_KEYBOARD;
                message.state = down ? 1 : 0;
                message.scancode = code;
                message.key = key;
                message.mod = 4096;
                if(!isModKey) {
                    message.mod += (
                        (GAClient.keyDown == 1248 ? SDL_Keymod.KMOD_LCTRL : 0) |
                        (GAClient.keyDown == 1249 ? SDL_Keymod.KMOD_LSHIFT : 0) |
                        (GAClient.keyDown == 1250 ? SDL_Keymod.KMOD_LALT : 0) |
                        (GAClient.keyDown == 1252 ? SDL_Keymod.KMOD_RCTRL : 0) |
                        (GAClient.keyDown == 1253 ? SDL_Keymod.KMOD_RSHIFT : 0) |
                        (GAClient.keyDown == 1254 ? SDL_Keymod.KMOD_RALT : 0)
                    );
                }
                break;
            }
            case 'mousedown':
            case 'mouseup':
            case 'touchstart':
            case 'touchend': {
                var down = (event.type == 'mousedown' || event.type == 'touchstart');
                var code = GAClient.getButtonCode(event);
                var coordinates = GAClient.getMouseCoordinates(event);
                // Create message
                message = GAClient.getSDLMouseMessage();
                message.type = SDL_EVENT_MSGTYPE_MOUSEKEY;
                message.state = down ? 1 : 0;
                message.mousebutton = code;
                message.mousestate = 0;
                message.mousex = coordinates.x;
                message.mousey = coordinates.y;
                GAClient.mouseDown = down ? code : 0;
                break;
            }
            case 'mousemove':
            case 'touchmove': {
                var coordinates = GAClient.getMouseCoordinates(event);
                // Create Message
                message = GAClient.getSDLMouseMessage();
                message.type = SDL_EVENT_MSGTYPE_MOUSEMOTION;
                if(GAClient.mouseDown > 0) {
                    message.mousestate = GAClient.getMouseState();
                }
                message.mousex = coordinates.x;
                message.mousey = coordinates.y;
                break;
            }
            case 'mousewheel':
            case 'wheel': {
                var deltas = GAClient.getMouseWheelDeltas(event);
                // Create message
                message = GAClient.getSDLMouseMessage();
                message.type = SDL_EVENT_MSGTYPE_MOUSEWHEEL;
                message.state = 0;
                message.mousex = deltas.x;
                message.mousey = deltas.y;
                break;
            }
        }
        console.log(message);
        if(message) {
            GAClient.sendInput(message);
        }
    },
    sendInput: function(message) {
        if(GAClient.websocket) {
            GAClient.websocket.send(JSON.stringify(message));
        }
    }
};
