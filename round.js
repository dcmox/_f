"use strict";
exports.__esModule = true;
var ERoundOption;
(function (ERoundOption) {
    ERoundOption[ERoundOption["ROUND"] = 0] = "ROUND";
    ERoundOption[ERoundOption["ROUND_UP"] = 1] = "ROUND_UP";
    ERoundOption[ERoundOption["ROUND_DOWN"] = 2] = "ROUND_DOWN";
})(ERoundOption = exports.ERoundOption || (exports.ERoundOption = {}));
exports.round = function (n, precision, r) {
    if (precision === void 0) { precision = 0.5; }
    if (r === void 0) { r = ERoundOption.ROUND; }
    var number = typeof n === 'string' ? parseFloat(n) : n;
    if (!precision) {
        return number.toLocaleString();
    }
    return r === 0
        ? (Math.round(number / precision) * precision).toLocaleString()
        : r === 1
            ? (Math.ceil(number / precision) * precision).toLocaleString()
            : (Math.floor(number / precision) * precision).toLocaleString();
};
