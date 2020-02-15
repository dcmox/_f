"use strict";
exports.__esModule = true;
exports.range = function (s, e, m) {
    return e && m
        ? Array.from({ length: Math.ceil((e - s) / m) }, function (x, i) { return i * m + s; })
        : e
            ? Array.from({ length: e - s }, function (x, i) { return i + s; })
            : Array.from({ length: s }, function (x, i) { return i; });
};
