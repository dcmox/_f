"use strict";
exports.__esModule = true;
exports.pascalCase = function (s) {
    return s
        .replace(/_/g, ' ')
        .split(' ')
        .map(function (s) { return s.charAt(0).toUpperCase() + s.slice(1); })
        .join('');
};
