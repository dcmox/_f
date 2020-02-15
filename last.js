"use strict";
exports.__esModule = true;
exports.last = function (a, byRef) {
    if (byRef === void 0) { byRef = false; }
    if (byRef) {
        var temp = a.filter(function (item) { return item !== undefined; });
        return Array.isArray(temp[temp.length - 1])
            ? temp[temp.length - 1].slice()
            : typeof temp[temp.length - 1] === 'object'
                ? Object.assign({}, temp[temp.length - 1])
                : temp[temp.length - 1];
    }
    else {
        return a.slice().pop();
    }
};
