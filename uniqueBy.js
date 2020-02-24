"use strict";
exports.__esModule = true;
exports.uniqueBy = function (a, prop, byRef) {
    if (byRef === void 0) { byRef = false; }
    return byRef
        ? a.filter(function (item, index) {
            return a.findIndex(function (itm) { return itm[prop] === item[prop]; }) === index;
        })
        : a
            .map(function (item) {
            return Array.isArray(item)
                ? item.slice()
                : item === 'object'
                    ? Object.assign({}, item)
                    : item;
        })
            .filter(function (item, index) {
            return a.findIndex(function (itm) { return itm[prop] === item[prop]; }) ===
                index;
        });
};
