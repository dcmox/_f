"use strict";
exports.__esModule = true;
exports.levenshtein = function (src, target) {
    if (src === target) {
        return 0;
    }
    if (src.length === 0) {
        return target.length;
    }
    if (target.length === 0) {
        return src.length;
    }
    var m = src.length + 1;
    var n = target.length + 1;
    var dMatrix = new Array(m);
    for (var i = 0; i < m; i++) {
        dMatrix[i] = new Array(n).fill(0);
    }
    for (var i = 1; i < m; i++) {
        dMatrix[i][0] = i;
    }
    for (var j = 1; j < n; j++) {
        dMatrix[0][j] = j;
    }
    for (var j = 1; j < n; j++) {
        for (var i = 1; i < m; i++) {
            var cost = src[i - 1] === target[j - 1] ? 0 : 1;
            /* delete, insert, and swap */
            dMatrix[i][j] = [
                dMatrix[i - 1][j] + 1,
                dMatrix[i][j - 1] + 1,
                dMatrix[i - 1][j - 1] + cost,
            ].reduce(function (prev, current) {
                return prev < current ? prev : current;
            });
        }
    }
    return dMatrix[m - 1][n - 1];
};
