"use strict";
exports.__esModule = true;
exports.findLast = function (a, cond, byRef) {
    if (byRef === void 0) { byRef = false; }
    if (byRef) {
        var temp = a.filter(function (item) { return cond(item); });
        return temp[temp.length - 1];
    }
    else {
        var temp = a
            .slice()
            .reverse()
            .find(function (item) { return cond(item); });
        return Array.isArray(temp)
            ? temp.slice()
            : typeof temp === 'object'
                ? Object.assign({}, temp)
                : temp;
    }
};
