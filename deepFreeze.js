"use strict";
exports.__esModule = true;
exports.deepFreeze = function (o) {
    var props = Object.getOwnPropertyNames(o);
    for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
        var prop = props_1[_i];
        if (o[prop] && typeof o[prop] === 'object') {
            exports.deepFreeze(o[prop]);
        }
    }
    return Object.freeze(o);
};
