"use strict";
exports.__esModule = true;
exports.toPath = function (s) {
    return s
        .replace(/\[|\]/g, '.')
        .split('.')
        .filter(function (n) { return n; });
};
