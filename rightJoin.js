"use strict";
exports.__esModule = true;
exports.rightJoin = function (a, b, criteria) {
    if (typeof a !== 'object') {
        throw new Error('First parameter must be an object!');
    }
    var c;
    if (!Array.isArray(b)) {
        if (typeof b !== 'object') {
            throw new Error('Second parameter must be an object or an array of objects!');
        }
        c = [Object.assign({}, b)];
    }
    else {
        c = b.slice();
    }
    if (criteria) {
        return c
            .filter(criteria)
            .reduce(function (acc, cur) { return Object.assign(acc, cur); }, Object.assign({}, a));
    }
    else {
        return c.reduce(function (acc, cur) { return Object.assign(acc, cur); }, Object.assign({}, a));
    }
};
