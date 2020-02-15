"use strict";
exports.__esModule = true;
exports.isShouting = function (s, threshold) {
    if (threshold === void 0) { threshold = 0.51; }
    var _a;
    return (((_a = s.match(/[A-Z]/g)) === null || _a === void 0 ? void 0 : _a.length) || 0) / s.length >= threshold && s.length > 5;
};
