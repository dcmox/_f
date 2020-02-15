"use strict";
exports.__esModule = true;
var splitByLength_1 = require("./splitByLength");
exports.toHex = function (s) {
    return s
        .split('')
        .map(function (c) { return c.charCodeAt(0).toString(16); })
        .join('');
};
exports.fromHex = function (s) {
    return splitByLength_1.splitByLength(s, 2)
        .map(function (c) { return String.fromCharCode(parseInt(c, 16)); })
        .join('');
};
