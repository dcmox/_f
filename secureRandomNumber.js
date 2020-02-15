"use strict";
exports.__esModule = true;
exports.secureRandomNumber = function (min, max) {
    var distance = max - min;
    var level = Math.ceil(Math.log(distance) / Math.log(256));
    var num = parseInt(require('crypto')
        .randomBytes(level)
        .toString('hex'), 16);
    var result = Math.floor((num / Math.pow(256, level)) * (max - min + 1) + min);
    return result;
};
