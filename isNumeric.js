"use strict";
exports.__esModule = true;
exports.isNumeric = function (s, ignoreChars) {
    return ignoreChars
        ? !s.toString().match(new RegExp("[^0-9" + ignoreChars
            .split('')
            .map(function (c) { return '\\' + c; })
            .join('|') + "]", 'gi'))
        : !s.toString().match(/[^0-9]/g);
};
