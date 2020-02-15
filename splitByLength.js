"use strict";
exports.__esModule = true;
exports.splitByLength = function (s, len) {
    return s.match(new RegExp(".{" + len + "}", 'g')) || [s];
};
