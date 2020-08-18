"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPropertyOptions = exports.addTicks = exports.removeTicks = exports.TICK_CHAR = void 0;
exports.TICK_CHAR = '`';
function removeTicks(s, tickChar) {
    tickChar = tickChar || exports.TICK_CHAR;
    return s.replace(new RegExp(tickChar, 'g'), '');
}
exports.removeTicks = removeTicks;
function addTicks(s, tickChar) {
    tickChar = tickChar || exports.TICK_CHAR;
    return tickChar + removeTicks(s, tickChar) + tickChar;
}
exports.addTicks = addTicks;
exports.setPropertyOptions = (object, options) => {
    Object.keys(options).map((key) => {
        const prop = object[key];
        const option = options[key];
        if (option != null && prop != null) {
            object[key] = option;
        }
    });
};
