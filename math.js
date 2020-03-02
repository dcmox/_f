"use strict";
exports.__esModule = true;
// Prevents oddities like 0.2 * 0.1 = 0.020000000000000004 and 0.2 + 0.1 = 0.30000000000000004
exports.multiply = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return Number(n.reduce(function (t, c) { return t * c; }).toFixed(15));
};
exports.add = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return Number((n.map(function (v) { return v * 100; }).reduce(function (t, c) { return t + c; }) / 100).toFixed(15));
};
exports.subtract = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return Number((n.map(function (v) { return v * 100; }).reduce(function (t, c) { return t - c; }) / 100).toFixed(15));
};
exports.divide = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return Number(n.reduce(function (t, c) { return t / c; }).toFixed(15));
};
