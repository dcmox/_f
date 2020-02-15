"use strict";
exports.__esModule = true;
exports.rightRotate = function (s, bits) {
    return bits > s.length
        ? s.slice(s.length - (bits % s.length)) +
            s.slice(0, s.length - (bits % s.length))
        : s.slice(s.length - bits) + s.slice(0, s.length - bits);
};
