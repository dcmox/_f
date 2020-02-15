"use strict";
exports.__esModule = true;
exports.flat = function (a) {
    return a.reduce(function (ret, v) { return ret.concat(Array.isArray(v) ? exports.flat(v) : v); }, []);
};
