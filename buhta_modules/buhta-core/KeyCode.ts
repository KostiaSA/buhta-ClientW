export var Keycode = {
    Esc: "Escape",
    Space: " ",

    Left: "ArrowLeft",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Right: "ArrowRight",

    Del: "Delete",
    Ins: "Insert",

    Win: "Meta",
    Menu: "ContextMenu",

    Scroll: "ScrollLock",
    Num: "NumLock",

    Backspace: "Backspace",
    Tab: "Tab",
    Enter: "Enter",
    Shift: "Shift",
    Control: "Control",
    Alt: "Alt",
    Break: "Pause",
    CapsLock: "CapsLock",

    PageUp: "PageUp",
    PageDown: "PageDown",
    End: "End",
    Home: "Home",

    F1: "F1",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    F10: "F10",
    F11: "F11",
    F12: "F12"

};

export let JQueryKeyCodeToReact: {[index:string]:string}= {
    "27": Keycode.Esc,
    "32": Keycode.Space,

    "37": Keycode.Left,
    "38": Keycode.Up,
    "40": Keycode.Down,
    "39": Keycode.Right,

    "46": Keycode.Del,
    "45": Keycode.Ins,

    "91": Keycode.Win,
    "93": Keycode.Menu,

    "145": Keycode.Scroll,
    "144": Keycode.Num,

    "8": Keycode.Backspace,
    "9": Keycode.Tab,
    "13": Keycode.Enter,
    "16": Keycode.Shift,
    "17": Keycode.Control,
    "18": Keycode.Alt,
    //"": Keycode.Break,
    "20": Keycode.CapsLock,

    "33": Keycode.PageUp,
    "34": Keycode.PageDown,
    "35": Keycode.End,
    "36": Keycode.Home,

    //"": Keycode.F1,
    "113": Keycode.F2,
    "114": Keycode.F3,
    "115": Keycode.F4,
    "116": Keycode.F5,
    "117": Keycode.F6,
    "118": Keycode.F7,
    "119": Keycode.F8,
    "120": Keycode.F9,
    "121": Keycode.F10,
    "122": Keycode.F11,
    "123": Keycode.F12
}







