"use strict";
exports.__esModule = true;
exports.map = function (a, fn) {
    return typeof fn === 'string' ? a.map(function (item) { return item[fn]; }) : a.map(fn);
};
