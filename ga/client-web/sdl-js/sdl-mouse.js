/**
 * SDL Mouse
 */

function SDL_BUTTON(X) {
    return (1 << ((X)-1));
}

var SDL_BUTTON_LEFT         = 1;
var SDL_BUTTON_MIDDLE       = 2;
var SDL_BUTTON_RIGHT        = 3;
var SDL_BUTTON_X1           = 4;
var SDL_BUTTON_X2           = 5;

var SDL_BUTTON_LMASK        = SDL_BUTTON(SDL_BUTTON_LEFT);
var SDL_BUTTON_MMASK        = SDL_BUTTON(SDL_BUTTON_MIDDLE);
var SDL_BUTTON_RMASK        = SDL_BUTTON(SDL_BUTTON_RIGHT);
var SDL_BUTTON_X1MASK       = SDL_BUTTON(SDL_BUTTON_X1);
var SDL_BUTTON_X2MASK       = SDL_BUTTON(SDL_BUTTON_X2);

var DOM_Mousecodes = {
    0: SDL_BUTTON_LEFT,     // left button
    1: SDL_BUTTON_MIDDLE,	// middle button
    2: SDL_BUTTON_RIGHT	    // right button
};