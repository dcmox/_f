"use strict";
exports.__esModule = true;
var splitByLength_1 = require("./splitByLength");
exports.fromBinary = function (s) {
    return splitByLength_1.splitByLength(s, 8)
        .map(function (c) { return String.fromCharCode(parseInt(c, 2)); })
        .join('');
};
exports.toBinary = function (s) {
    return s
        .split('')
        .map(function (c) {
        return c
            .charCodeAt(0)
            .toString(2)
            .padStart(8, '0');
    })
        .join('');
};
