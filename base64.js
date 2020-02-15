"use strict";
exports.__esModule = true;
exports.toBase64 = function (s) {
    return window ? btoa(s) : new Buffer(s).toString('base64');
};
exports.fromBase64 = function (s) {
    return window ? atob(s) : new Buffer(s).toString('ascii');
};
