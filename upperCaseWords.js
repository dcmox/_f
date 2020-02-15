"use strict";
exports.__esModule = true;
exports.upperCaseWords = function (s) {
    return s
        .split(' ')
        .map(function (w) { return w.charAt(0).toUpperCase() + w.slice(1); })
        .join(' ');
};
