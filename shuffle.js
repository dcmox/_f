"use strict";
exports.__esModule = true;
exports.shuffle = function (a, byRef) {
    if (byRef === void 0) { byRef = false; }
    return typeof a === 'string'
        ? a
            .split('')
            .sort(function (a, b) {
            return Math.random() > Math.random() ? 1 : -1;
        })
            .join('')
        : byRef
            ? a.sort(function (a, b) { return (Math.random() > Math.random() ? 1 : -1); })
            : a
                .slice()
                .sort(function (a, b) {
                return Math.random() > Math.random() ? 1 : -1;
            });
};
