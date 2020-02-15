"use strict";
exports.__esModule = true;
exports.rightShift = function (s, bits, char) {
    if (char === void 0) { char = '0'; }
    return bits > s.length
        ? ''.padStart(s.length, char)
        : s.slice(0, s.length - bits).padStart(s.length, char);
};
