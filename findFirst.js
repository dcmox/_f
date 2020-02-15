"use strict";
exports.__esModule = true;
exports.findFirst = function (a, cond, byRef) {
    if (byRef === void 0) { byRef = false; }
    if (byRef) {
        return a.find(function (item) { return cond(item); });
    }
    else {
        var temp = a.slice().find(function (item) { return cond(item); });
        return Array.isArray(temp)
            ? temp.slice()
            : typeof temp === 'object'
                ? Object.assign({}, temp)
                : temp;
    }
};
