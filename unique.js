"use strict";
exports.__esModule = true;
exports.unique = function (a, byRef) {
    if (byRef === void 0) { byRef = false; }
    return byRef
        ? a.filter(function (item, index) { return a.indexOf(item) === index; })
        : a
            .slice()
            .filter(function (item, index) { return a.indexOf(item) === index; });
};
