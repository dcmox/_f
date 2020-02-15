"use strict";
exports.__esModule = true;
exports.excerpt = function (s, len) {
    if (len === void 0) { len = 255; }
    return s.length <= len
        ? s
        : s.slice(0, s.substring(0, len).lastIndexOf(' ')) + '...';
};
