"use strict";
exports.__esModule = true;
exports.leftRotate = function (s, bits) {
    return bits > s.length
        ? s.slice(bits % s.length) + s.slice(0, bits % s.length)
        : s.slice(bits) + s.slice(0, bits);
};
