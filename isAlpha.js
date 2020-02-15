"use strict";
exports.__esModule = true;
exports.isAlpha = function (s, ignoreChars) {
    return ignoreChars
        ? !s.toString().match(new RegExp("[^A-Z" + ignoreChars
            .split('')
            .map(function (c) { return '\\' + c; })
            .join('|') + "]", 'gi'))
        : !s.toString().match(/[^A-Z]/gi);
};
