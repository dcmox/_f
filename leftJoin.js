"use strict";
exports.__esModule = true;
exports.leftJoin = function (a, b, criteria) {
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
        return Object.assign(c
            .filter(criteria)
            .reduce(function (acc, cur) { return Object.assign(acc, cur); }, {}), a);
    }
    else {
        return Object.assign(c.reduce(function (acc, cur) { return Object.assign(acc, cur); }, {}), a);
    }
};
