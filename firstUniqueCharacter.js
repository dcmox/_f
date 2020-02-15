"use strict";
exports.__esModule = true;
exports.firstUniqueCharacter = function (s) {
    return s.split('').find(function (c) { return s.indexOf(c) === s.lastIndexOf(c); }) || '';
};
