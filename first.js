"use strict";
exports.__esModule = true;
exports.first = function (a, byRef) {
    if (byRef === void 0) { byRef = false; }
    if (byRef) {
        for (var i in a) {
            if (a[i]) {
                return Array.isArray(a[i])
                    ? a[i].slice()
                    : typeof a[i] === 'object'
                        ? Object.assign({}, a[i])
                        : a[i];
            }
        }
    }
    else {
        return a.slice().shift();
    }
};
