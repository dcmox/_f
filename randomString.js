"use strict";
exports.__esModule = true;
exports.randomString = function (len, charset) {
    if (len === void 0) { len = 10; }
    if (charset === void 0) { charset = '!@#%=*_-~23456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ'; }
    return Array.from({ length: len }, function (c) {
        return charset.charAt(Math.floor(Math.random() * charset.length));
    }).join('');
};
