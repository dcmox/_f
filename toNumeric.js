"use strict";
exports.__esModule = true;
exports.toNumeric = function (s, charSet) {
    return charSet
        ? s.replace(new RegExp("[^0-9" + charSet
            .split('')
            .map(function (c) { return '\\' + c; })
            .join('') + "]", 'g'), '')
        : s.replace(/[^0-9]/g, '');
};
