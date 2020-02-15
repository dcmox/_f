"use strict";
exports.__esModule = true;
exports.isAlphaNumeric = function (s, ignoreChars) {
    return ignoreChars
        ? !s.toString().match(new RegExp("[^A-Z0-9" + ignoreChars
            .split('')
            .map(function (c) { return '\\' + c; })
            .join('|') + "]", 'gi'))
        : !s.toString().match(/[^A-Z0-9]/gi);
};
