"use strict";
exports.__esModule = true;
exports.camelCase = function (s) {
    return s
        .replace(/_/g, ' ')
        .split(' ')
        .map(function (s, i) {
        return i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1);
    })
        .join('');
};
