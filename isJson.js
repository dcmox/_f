"use strict";
exports.__esModule = true;
exports.isJson = function (s) {
    if (s.trim().search(/^(\[|\{){1}/) > -1) {
        try {
            var tmp = JSON.parse(s);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    return false;
};
