"use strict";
exports.__esModule = true;
exports.toAlpha = function (s, charSet) {
    return charSet
        ? s.replace(new RegExp("[^a-zA-Z" + charSet
            .split('')
            .map(function (c) { return '\\' + c; })
            .join('') + "]", 'g'), '')
        : s.replace(/[^a-zA-Z]/g, '');
};
