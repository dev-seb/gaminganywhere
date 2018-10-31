/**
 * SDL Scan Codes
 */

var SDL_Scancode = {

    SDL_SCANCODE_UNKNOWN: 0,

    SDL_SCANCODE_A: 4,
    SDL_SCANCODE_B: 5,
    SDL_SCANCODE_C: 6,
    SDL_SCANCODE_D: 7,
    SDL_SCANCODE_E: 8,
    SDL_SCANCODE_F: 9,
    SDL_SCANCODE_G: 10,
    SDL_SCANCODE_H: 11,
    SDL_SCANCODE_I: 12,
    SDL_SCANCODE_J: 13,
    SDL_SCANCODE_K: 14,
    SDL_SCANCODE_L: 15,
    SDL_SCANCODE_M: 16,
    SDL_SCANCODE_N: 17,
    SDL_SCANCODE_O: 18,
    SDL_SCANCODE_P: 19,
    SDL_SCANCODE_Q: 20,
    SDL_SCANCODE_R: 21,
    SDL_SCANCODE_S: 22,
    SDL_SCANCODE_T: 23,
    SDL_SCANCODE_U: 24,
    SDL_SCANCODE_V: 25,
    SDL_SCANCODE_W: 26,
    SDL_SCANCODE_X: 27,
    SDL_SCANCODE_Y: 28,
    SDL_SCANCODE_Z: 29,

    SDL_SCANCODE_1: 30,
    SDL_SCANCODE_2: 31,
    SDL_SCANCODE_3: 32,
    SDL_SCANCODE_4: 33,
    SDL_SCANCODE_5: 34,
    SDL_SCANCODE_6: 35,
    SDL_SCANCODE_7: 36,
    SDL_SCANCODE_8: 37,
    SDL_SCANCODE_9: 38,
    SDL_SCANCODE_0: 39,

    SDL_SCANCODE_RETURN: 40,
    SDL_SCANCODE_ESCAPE: 41,
    SDL_SCANCODE_BACKSPACE: 42,
    SDL_SCANCODE_TAB: 43,
    SDL_SCANCODE_SPACE: 44,

    SDL_SCANCODE_MINUS: 45,
    SDL_SCANCODE_EQUALS: 46,
    SDL_SCANCODE_LEFTBRACKET: 47,
    SDL_SCANCODE_RIGHTBRACKET: 48,
    SDL_SCANCODE_BACKSLASH: 49, /**< Located at the lower left of the return
     *   key on ISO keyboards and at the right end
     *   of the QWERTY row on ANSI keyboards.
     *   Produces REVERSE SOLIDUS (backslash) and
     *   VERTICAL LINE in a US layout; REVERSE
     *   SOLIDUS and VERTICAL LINE in a UK Mac
     *   layout; NUMBER SIGN and TILDE in a UK
     *   Windows layout; DOLLAR SIGN and POUND SIGN
     *   in a Swiss German layout; NUMBER SIGN and
     *   APOSTROPHE in a German layout; GRAVE
     *   ACCENT and POUND SIGN in a French Mac
     *   layout; and ASTERISK and MICRO SIGN in a
     *   French Windows layout.
     */
    SDL_SCANCODE_NONUSHASH: 50, /**< ISO USB keyboards actually use this code
     *   instead of 49 for the same key; but all
     *   OSes I've seen treat the two codes
     *   identically. So; as an implementor; unless
     *   your keyboard generates both of those
     *   codes and your OS treats them differently;
     *   you should generate SDL_SCANCODE_BACKSLASH
     *   instead of this code. As a user; you
     *   should not rely on this code because SDL
     *   will never generate it with most (all?)
     *   keyboards.
     */
    SDL_SCANCODE_SEMICOLON: 51,
    SDL_SCANCODE_APOSTROPHE: 52,
    SDL_SCANCODE_GRAVE: 53, /**< Located in the top left corner (on both ANSI
     *   and ISO keyboards). Produces GRAVE ACCENT and
     *   TILDE in a US Windows layout and in US and UK
     *   Mac layouts on ANSI keyboards; GRAVE ACCENT
     *   and NOT SIGN in a UK Windows layout; SECTION
     *   SIGN and PLUS-MINUS SIGN in US and UK Mac
     *   layouts on ISO keyboards; SECTION SIGN and
     *   DEGREE SIGN in a Swiss German layout (Mac:
     *   only on ISO keyboards); CIRCUMFLEX ACCENT and
     *   DEGREE SIGN in a German layout (Mac: only on
     *   ISO keyboards); SUPERSCRIPT TWO and TILDE in a
     *   French Windows layout; COMMERCIAL AT and
     *   NUMBER SIGN in a French Mac layout on ISO
     *   keyboards; and LESS-THAN SIGN and GREATER-THAN
     *   SIGN in a Swiss German; German; or French Mac
     *   layout on ANSI keyboards.
     */
    SDL_SCANCODE_COMMA: 54,
    SDL_SCANCODE_PERIOD: 55,
    SDL_SCANCODE_SLASH: 56,

    SDL_SCANCODE_CAPSLOCK: 57,

    SDL_SCANCODE_F1: 58,
    SDL_SCANCODE_F2: 59,
    SDL_SCANCODE_F3: 60,
    SDL_SCANCODE_F4: 61,
    SDL_SCANCODE_F5: 62,
    SDL_SCANCODE_F6: 63,
    SDL_SCANCODE_F7: 64,
    SDL_SCANCODE_F8: 65,
    SDL_SCANCODE_F9: 66,
    SDL_SCANCODE_F10: 67,
    SDL_SCANCODE_F11: 68,
    SDL_SCANCODE_F12: 69,

    SDL_SCANCODE_PRINTSCREEN: 70,
    SDL_SCANCODE_SCROLLLOCK: 71,
    SDL_SCANCODE_PAUSE: 72,
    SDL_SCANCODE_INSERT: 73, /**< insert on PC; help on some Mac keyboards (but does send code 73, not 117) */
    SDL_SCANCODE_HOME: 74,
    SDL_SCANCODE_PAGEUP: 75,
    SDL_SCANCODE_DELETE: 76,
    SDL_SCANCODE_END: 77,
    SDL_SCANCODE_PAGEDOWN: 78,
    SDL_SCANCODE_RIGHT: 79,
    SDL_SCANCODE_LEFT: 80,
    SDL_SCANCODE_DOWN: 81,
    SDL_SCANCODE_UP: 82,

    SDL_SCANCODE_NUMLOCKCLEAR: 83, /**< num lock on PC, clear on Mac keyboards */
    SDL_SCANCODE_KP_DIVIDE: 84,
    SDL_SCANCODE_KP_MULTIPLY: 85,
    SDL_SCANCODE_KP_MINUS: 86,
    SDL_SCANCODE_KP_PLUS: 87,
    SDL_SCANCODE_KP_ENTER: 88,
    SDL_SCANCODE_KP_1: 89,
    SDL_SCANCODE_KP_2: 90,
    SDL_SCANCODE_KP_3: 91,
    SDL_SCANCODE_KP_4: 92,
    SDL_SCANCODE_KP_5: 93,
    SDL_SCANCODE_KP_6: 94,
    SDL_SCANCODE_KP_7: 95,
    SDL_SCANCODE_KP_8: 96,
    SDL_SCANCODE_KP_9: 97,
    SDL_SCANCODE_KP_0: 98,
    SDL_SCANCODE_KP_PERIOD: 99,

    SDL_SCANCODE_NONUSBACKSLASH: 100, /**< This is the additional key that ISO
     *   keyboards have over ANSI ones;
     *   located between left shift and Y.
     *   Produces GRAVE ACCENT and TILDE in a
     *   US or UK Mac layout; REVERSE SOLIDUS
     *   (backslash) and VERTICAL LINE in a
     *   US or UK Windows layout; and
     *   LESS-THAN SIGN and GREATER-THAN SIGN
     *   in a Swiss German; German; or French
     *   layout. */
    SDL_SCANCODE_APPLICATION: 101, /**< windows contextual menu, compose */
    SDL_SCANCODE_POWER: 102, /**< The USB document says this is a status flag,
     *   not a physical key - but some Mac keyboards
     *   do have a power key. */
    SDL_SCANCODE_KP_EQUALS: 103,
    SDL_SCANCODE_F13: 104,
    SDL_SCANCODE_F14: 105,
    SDL_SCANCODE_F15: 106,
    SDL_SCANCODE_F16: 107,
    SDL_SCANCODE_F17: 108,
    SDL_SCANCODE_F18: 109,
    SDL_SCANCODE_F19: 110,
    SDL_SCANCODE_F20: 111,
    SDL_SCANCODE_F21: 112,
    SDL_SCANCODE_F22: 113,
    SDL_SCANCODE_F23: 114,
    SDL_SCANCODE_F24: 115,
    SDL_SCANCODE_EXECUTE: 116,
    SDL_SCANCODE_HELP: 117,
    SDL_SCANCODE_MENU: 118,
    SDL_SCANCODE_SELECT: 119,
    SDL_SCANCODE_STOP: 120,
    SDL_SCANCODE_AGAIN: 121, /**< redo */
    SDL_SCANCODE_UNDO: 122,
    SDL_SCANCODE_CUT: 123,
    SDL_SCANCODE_COPY: 124,
    SDL_SCANCODE_PASTE: 125,
    SDL_SCANCODE_FIND: 126,
    SDL_SCANCODE_MUTE: 127,
    SDL_SCANCODE_VOLUMEUP: 128,
    SDL_SCANCODE_VOLUMEDOWN: 129,
    /* not sure whether there's a reason to enable these */
    /* SDL_SCANCODE_LOCKINGCAPSLOCK: 130,  */
    /* SDL_SCANCODE_LOCKINGNUMLOCK: 131, */
    /* SDL_SCANCODE_LOCKINGSCROLLLOCK: 132, */
    SDL_SCANCODE_KP_COMMA: 133,
    SDL_SCANCODE_KP_EQUALSAS400: 134,

    SDL_SCANCODE_INTERNATIONAL1: 135,
    SDL_SCANCODE_INTERNATIONAL2: 136,
    SDL_SCANCODE_INTERNATIONAL3: 137, /**< Yen */
    SDL_SCANCODE_INTERNATIONAL4: 138,
    SDL_SCANCODE_INTERNATIONAL5: 139,
    SDL_SCANCODE_INTERNATIONAL6: 140,
    SDL_SCANCODE_INTERNATIONAL7: 141,
    SDL_SCANCODE_INTERNATIONAL8: 142,
    SDL_SCANCODE_INTERNATIONAL9: 143,
    SDL_SCANCODE_LANG1: 144, /**< Hangul/English toggle */
    SDL_SCANCODE_LANG2: 145, /**< Hanja conversion */
    SDL_SCANCODE_LANG3: 146, /**< Katakana */
    SDL_SCANCODE_LANG4: 147, /**< Hiragana */
    SDL_SCANCODE_LANG5: 148, /**< Zenkaku/Hankaku */
    SDL_SCANCODE_LANG6: 149, /**< reserved */
    SDL_SCANCODE_LANG7: 150, /**< reserved */
    SDL_SCANCODE_LANG8: 151, /**< reserved */
    SDL_SCANCODE_LANG9: 152, /**< reserved */

    SDL_SCANCODE_ALTERASE: 153, /**< Erase-Eaze */
    SDL_SCANCODE_SYSREQ: 154,
    SDL_SCANCODE_CANCEL: 155,
    SDL_SCANCODE_CLEAR: 156,
    SDL_SCANCODE_PRIOR: 157,
    SDL_SCANCODE_RETURN2: 158,
    SDL_SCANCODE_SEPARATOR: 159,
    SDL_SCANCODE_OUT: 160,
    SDL_SCANCODE_OPER: 161,
    SDL_SCANCODE_CLEARAGAIN: 162,
    SDL_SCANCODE_CRSEL: 163,
    SDL_SCANCODE_EXSEL: 164,

    SDL_SCANCODE_KP_00: 176,
    SDL_SCANCODE_KP_000: 177,
    SDL_SCANCODE_THOUSANDSSEPARATOR: 178,
    SDL_SCANCODE_DECIMALSEPARATOR: 179,
    SDL_SCANCODE_CURRENCYUNIT: 180,
    SDL_SCANCODE_CURRENCYSUBUNIT: 181,
    SDL_SCANCODE_KP_LEFTPAREN: 182,
    SDL_SCANCODE_KP_RIGHTPAREN: 183,
    SDL_SCANCODE_KP_LEFTBRACE: 184,
    SDL_SCANCODE_KP_RIGHTBRACE: 185,
    SDL_SCANCODE_KP_TAB: 186,
    SDL_SCANCODE_KP_BACKSPACE: 187,
    SDL_SCANCODE_KP_A: 188,
    SDL_SCANCODE_KP_B: 189,
    SDL_SCANCODE_KP_C: 190,
    SDL_SCANCODE_KP_D: 191,
    SDL_SCANCODE_KP_E: 192,
    SDL_SCANCODE_KP_F: 193,
    SDL_SCANCODE_KP_XOR: 194,
    SDL_SCANCODE_KP_POWER: 195,
    SDL_SCANCODE_KP_PERCENT: 196,
    SDL_SCANCODE_KP_LESS: 197,
    SDL_SCANCODE_KP_GREATER: 198,
    SDL_SCANCODE_KP_AMPERSAND: 199,
    SDL_SCANCODE_KP_DBLAMPERSAND: 200,
    SDL_SCANCODE_KP_VERTICALBAR: 201,
    SDL_SCANCODE_KP_DBLVERTICALBAR: 202,
    SDL_SCANCODE_KP_COLON: 203,
    SDL_SCANCODE_KP_HASH: 204,
    SDL_SCANCODE_KP_SPACE: 205,
    SDL_SCANCODE_KP_AT: 206,
    SDL_SCANCODE_KP_EXCLAM: 207,
    SDL_SCANCODE_KP_MEMSTORE: 208,
    SDL_SCANCODE_KP_MEMRECALL: 209,
    SDL_SCANCODE_KP_MEMCLEAR: 210,
    SDL_SCANCODE_KP_MEMADD: 211,
    SDL_SCANCODE_KP_MEMSUBTRACT: 212,
    SDL_SCANCODE_KP_MEMMULTIPLY: 213,
    SDL_SCANCODE_KP_MEMDIVIDE: 214,
    SDL_SCANCODE_KP_PLUSMINUS: 215,
    SDL_SCANCODE_KP_CLEAR: 216,
    SDL_SCANCODE_KP_CLEARENTRY: 217,
    SDL_SCANCODE_KP_BINARY: 218,
    SDL_SCANCODE_KP_OCTAL: 219,
    SDL_SCANCODE_KP_DECIMAL: 220,
    SDL_SCANCODE_KP_HEXADECIMAL: 221,

    SDL_SCANCODE_LCTRL: 224,
    SDL_SCANCODE_LSHIFT: 225,
    SDL_SCANCODE_LALT: 226, /**< alt, option */
    SDL_SCANCODE_LGUI: 227, /**< windows; command (apple), meta */
    SDL_SCANCODE_RCTRL: 228,
    SDL_SCANCODE_RSHIFT: 229,
    SDL_SCANCODE_RALT: 230, /**< alt gr, option */
    SDL_SCANCODE_RGUI: 231, /**< windows; command (apple), meta */

    SDL_SCANCODE_MODE: 257,

    SDL_SCANCODE_AUDIONEXT: 258,
    SDL_SCANCODE_AUDIOPREV: 259,
    SDL_SCANCODE_AUDIOSTOP: 260,
    SDL_SCANCODE_AUDIOPLAY: 261,
    SDL_SCANCODE_AUDIOMUTE: 262,
    SDL_SCANCODE_MEDIASELECT: 263,
    SDL_SCANCODE_WWW: 264,
    SDL_SCANCODE_MAIL: 265,
    SDL_SCANCODE_CALCULATOR: 266,
    SDL_SCANCODE_COMPUTER: 267,
    SDL_SCANCODE_AC_SEARCH: 268,
    SDL_SCANCODE_AC_HOME: 269,
    SDL_SCANCODE_AC_BACK: 270,
    SDL_SCANCODE_AC_FORWARD: 271,
    SDL_SCANCODE_AC_STOP: 272,
    SDL_SCANCODE_AC_REFRESH: 273,
    SDL_SCANCODE_AC_BOOKMARKS: 274,

    SDL_SCANCODE_BRIGHTNESSDOWN: 275,
    SDL_SCANCODE_BRIGHTNESSUP: 276,
    SDL_SCANCODE_DISPLAYSWITCH: 277, /**< display mirroring/dual display switch, video mode switch */
    SDL_SCANCODE_KBDILLUMTOGGLE: 278,
    SDL_SCANCODE_KBDILLUMDOWN: 279,
    SDL_SCANCODE_KBDILLUMUP: 280,
    SDL_SCANCODE_EJECT: 281,
    SDL_SCANCODE_SLEEP: 282,

    SDL_SCANCODE_APP1: 283,
    SDL_SCANCODE_APP2: 284,

    SDL_NUM_SCANCODES: 512, /**< not a key, just marks the number of scancodes for array bounds */

};

var DOM_Scancodes = {
    8: SDL_Scancode.SDL_SCANCODE_BACKSPACE, //  backspace
    9: SDL_Scancode.SDL_SCANCODE_TAB, //  tab
    13: SDL_Scancode.SDL_SCANCODE_RETURN, //  enter
    16: SDL_Scancode.SDL_SCANCODE_LSHIFT, //  shift
    17: SDL_Scancode.SDL_SCANCODE_LCTRL, //  ctrl
    18: SDL_Scancode.SDL_SCANCODE_LALT, //  alt
    19: SDL_Scancode.SDL_SCANCODE_PAUSE, //  pause/break
    20: SDL_Scancode.SDL_SCANCODE_CAPSLOCK, //  caps lock
    27: SDL_Scancode.SDL_SCANCODE_ESCAPE, //  escape
    33: SDL_Scancode.SDL_SCANCODE_PAGEUP, // page up
    34: SDL_Scancode.SDL_SCANCODE_PAGEDOWN, // page down
    35: SDL_Scancode.SDL_SCANCODE_END, // end
    36: SDL_Scancode.SDL_SCANCODE_HOME, // home
    37: SDL_Scancode.SDL_SCANCODE_LEFT, // left arrow
    38: SDL_Scancode.SDL_SCANCODE_UP, // up arrow
    39: SDL_Scancode.SDL_SCANCODE_RIGHT, // right arrow
    40: SDL_Scancode.SDL_SCANCODE_DOWN, // down arrow
    45: SDL_Scancode.SDL_SCANCODE_INSERT, // insert
    46: SDL_Scancode.SDL_SCANCODE_DELETE, // delete
    48: SDL_Scancode.SDL_SCANCODE_0,
    49: SDL_Scancode.SDL_SCANCODE_1,
    50: SDL_Scancode.SDL_SCANCODE_2,
    51: SDL_Scancode.SDL_SCANCODE_3,
    52: SDL_Scancode.SDL_SCANCODE_4,
    53: SDL_Scancode.SDL_SCANCODE_5,
    54: SDL_Scancode.SDL_SCANCODE_6,
    55: SDL_Scancode.SDL_SCANCODE_7,
    56: SDL_Scancode.SDL_SCANCODE_8,
    57: SDL_Scancode.SDL_SCANCODE_9,
    65: SDL_Scancode.SDL_SCANCODE_A,
    66: SDL_Scancode.SDL_SCANCODE_B,
    67: SDL_Scancode.SDL_SCANCODE_C,
    68: SDL_Scancode.SDL_SCANCODE_D,
    69: SDL_Scancode.SDL_SCANCODE_E,
    70: SDL_Scancode.SDL_SCANCODE_F,
    71: SDL_Scancode.SDL_SCANCODE_G,
    72: SDL_Scancode.SDL_SCANCODE_H,
    73: SDL_Scancode.SDL_SCANCODE_I,
    74: SDL_Scancode.SDL_SCANCODE_J,
    75: SDL_Scancode.SDL_SCANCODE_K,
    76: SDL_Scancode.SDL_SCANCODE_L,
    77: SDL_Scancode.SDL_SCANCODE_M,
    78: SDL_Scancode.SDL_SCANCODE_N,
    79: SDL_Scancode.SDL_SCANCODE_O,
    80: SDL_Scancode.SDL_SCANCODE_P,
    81: SDL_Scancode.SDL_SCANCODE_Q,
    82: SDL_Scancode.SDL_SCANCODE_R,
    83: SDL_Scancode.SDL_SCANCODE_S,
    84: SDL_Scancode.SDL_SCANCODE_T,
    85: SDL_Scancode.SDL_SCANCODE_U,
    86: SDL_Scancode.SDL_SCANCODE_V,
    87: SDL_Scancode.SDL_SCANCODE_W,
    88: SDL_Scancode.SDL_SCANCODE_X,
    89: SDL_Scancode.SDL_SCANCODE_Y,
    90: SDL_Scancode.SDL_SCANCODE_Z,
    //91: ?, // left window,
    //92: ?, // right window
    93: SDL_Scancode.SDL_SCANCODE_SELECT, // select key
    96: SDL_Scancode.SDL_SCANCODE_KP_0, // numpad 0
    97: SDL_Scancode.SDL_SCANCODE_KP_1, // numpad 1
    98: SDL_Scancode.SDL_SCANCODE_KP_2, // numpad 2
    99: SDL_Scancode.SDL_SCANCODE_KP_3, // numpad 3
    100: SDL_Scancode.SDL_SCANCODE_KP_4, // numpad 4
    101: SDL_Scancode.SDL_SCANCODE_KP_5, // numpad 5
    102: SDL_Scancode.SDL_SCANCODE_KP_6, // numpad 6
    103: SDL_Scancode.SDL_SCANCODE_KP_7, // numpad 7
    104: SDL_Scancode.SDL_SCANCODE_KP_8, // numpad 8
    105: SDL_Scancode.SDL_SCANCODE_KP_9, // numpad 9
    106: SDL_Scancode.SDL_SCANCODE_KP_MULTIPLY, // multiply
    107: SDL_Scancode.SDL_SCANCODE_KP_DIVIDE, // add
    109: SDL_Scancode.SDL_SCANCODE_KP_MINUS, // subtract
    110: SDL_Scancode.SDL_SCANCODE_KP_PERIOD, // decimal point
    111: SDL_Scancode.SDL_SCANCODE_KP_DIVIDE, // divide
    112: SDL_Scancode.SDL_SCANCODE_F1, // F1
    113: SDL_Scancode.SDL_SCANCODE_F2, // F2
    114: SDL_Scancode.SDL_SCANCODE_F3, // F3
    115: SDL_Scancode.SDL_SCANCODE_F4, // F4
    116: SDL_Scancode.SDL_SCANCODE_F5, // F5
    117: SDL_Scancode.SDL_SCANCODE_F6, // F6
    118: SDL_Scancode.SDL_SCANCODE_F7, // F7
    119: SDL_Scancode.SDL_SCANCODE_F8, // F8
    120: SDL_Scancode.SDL_SCANCODE_F9, // F9
    121: SDL_Scancode.SDL_SCANCODE_F10, // F10
    122: SDL_Scancode.SDL_SCANCODE_F11, // F11
    123: SDL_Scancode.SDL_SCANCODE_F12, // F12
    124: SDL_Scancode.SDL_SCANCODE_F13, // F13
    125: SDL_Scancode.SDL_SCANCODE_F14, // F14
    126: SDL_Scancode.SDL_SCANCODE_F15, // F15
    127: SDL_Scancode.SDL_SCANCODE_F16, // F16
    128: SDL_Scancode.SDL_SCANCODE_F17, // F17
    129: SDL_Scancode.SDL_SCANCODE_F18, // F18
    130: SDL_Scancode.SDL_SCANCODE_F19, // F19
    131: SDL_Scancode.SDL_SCANCODE_F20, // F20
    132: SDL_Scancode.SDL_SCANCODE_F21, // F21
    133: SDL_Scancode.SDL_SCANCODE_F22, // F22
    134: SDL_Scancode.SDL_SCANCODE_F23, // F23
    135: SDL_Scancode.SDL_SCANCODE_F24, // F24
    144: SDL_Scancode.SDL_SCANCODE_NUMLOCKCLEAR, // num lock
    145: SDL_Scancode.SDL_SCANCODE_SCROLLLOCK, // scroll lock
    //160: SDL_Scancode.SDL_SCANCODE_CARET, // caret
    //161: SDL_Scancode.SDL_SCANCODE_EXCLAIM, // exclaim
    //162: SDL_Scancode.SDL_SCANCODE_QUOTEDBL, // double quote
    //163: SDL_Scancode.SDL_SCANCODE_HASH, // hash
    //164: SDL_Scancode.SDL_SCANCODE_DOLLAR, // dollar
    //165: SDL_Scancode.SDL_SCANCODE_PERCENT, // percent
    //166: SDL_Scancode.SDL_SCANCODE_AMPERSAND, // ampersand
    //167: SDL_Scancode.SDL_SCANCODE_UNDERSCORE, // underscore
    //168: SDL_Scancode.SDL_SCANCODE_LEFTPAREN, // open parenthesis
    //169: SDL_Scancode.SDL_SCANCODE_RIGHTPAREN, // close parenthesis
    //170: SDL_Scancode.SDL_SCANCODE_ASTERISK, // asterix
    //171: SDL_Scancode.SDL_SCANCODE_PLUS, // plus
    172: SDL_Scancode.SDL_SCANCODE_COPY, // pipe
    173: SDL_Scancode.SDL_SCANCODE_MINUS, // minus
    174: SDL_Scancode.SDL_SCANCODE_LEFTBRACKET, // open curly bracket
    175: SDL_Scancode.SDL_SCANCODE_RIGHTBRACKET, // close curly bracket
    176: SDL_Scancode.SDL_SCANCODE_FIND, // tilde
    181: SDL_Scancode.SDL_SCANCODE_MUTE, // audio mute
    182: SDL_Scancode.SDL_SCANCODE_VOLUMEDOWN, // audio volume down
    183: SDL_Scancode.SDL_SCANCODE_VOLUMEUP, // audio volume up
    186: SDL_Scancode.SDL_SCANCODE_SEMICOLON, // semi-colon
    187: SDL_Scancode.SDL_SCANCODE_EQUALS, // equal-sign
    188: SDL_Scancode.SDL_SCANCODE_COMMA, // comma
    //189: SDL_Scancode.SDL_SCANCODE_HASH, // dash
    190: SDL_Scancode.SDL_SCANCODE_PERIOD, // period
    191: SDL_Scancode.SDL_SCANCODE_SLASH, // forward slash
    //192: SDL_Scancode.SDL_SCANCODE_BACKQUOTE, // grave accent
    219: SDL_Scancode.SDL_SCANCODE_LEFTBRACKET, // open bracket
    220: SDL_Scancode.SDL_SCANCODE_BACKSLASH, // back slash
    221: SDL_Scancode.SDL_SCANCODE_RIGHTBRACKET, // close bracket
    //222: SDL_Scancode.SDL_SCANCODE_QUOTE, // single quote
    224: SDL_Scancode.SDL_SCANCODE_LGUI // meta (command/windows)
};