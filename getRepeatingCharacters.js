"use strict";
exports.__esModule = true;
exports.getRepeatingCharacters = function (s, ignoreCase, minRepeat) {
    if (ignoreCase === void 0) { ignoreCase = true; }
    if (minRepeat === void 0) { minRepeat = 2; }
    return s.match(new RegExp("(.)\\1{" + minRepeat + ",}", ignoreCase ? 'gi' : 'g'));
};
