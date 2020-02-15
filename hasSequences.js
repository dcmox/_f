"use strict";
exports.__esModule = true;
exports.hasSequences = function (s, ignoreCase) {
    if (ignoreCase === void 0) { ignoreCase = true; }
    return new RegExp("(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz" +
        "|zyx|xyw|xwv|wvu|vut|uts|tsr|srq|rqp|qpo|pon|onm|nml|mlk|lkj|kji|jih|ihg|hgf|gfe|fed|edc|dcb|cba" +
        "|012|123|234|345|456|567|678|789|890|098|987|876|765|654|543|432|321|210)", ignoreCase ? 'gi' : 'g').test(s);
};
