"use strict";
exports.__esModule = true;
exports.partition = function (a, size) {
    return a.reduce(function (acc, item) {
        acc[acc.length - 1]
            ? acc[acc.length - 1].length < size
                ? acc[acc.length - 1].push(item)
                : (acc[acc.length] = [item])
            : (acc[acc.length] = [item]);
        return acc;
    }, []);
};
