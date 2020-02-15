"use strict";
exports.__esModule = true;
exports.hasRepeatingSets = function (s, ignoreCase, minRepeat) {
    if (ignoreCase === void 0) { ignoreCase = true; }
    if (minRepeat === void 0) { minRepeat = 2; }
    return new RegExp("(.+)\\1{" + minRepeat + ",}", ignoreCase ? 'gi' : 'g').test(s);
};
