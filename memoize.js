"use strict";
exports.__esModule = true;
var lru_1 = require("./lru");
var stringify_1 = require("./stringify");
exports.memoize = function (memoSize) {
    var cache = new lru_1.LRUCache(memoSize);
    var template = null;
    return function (fn) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!template) {
                template = stringify_1.stringifyCache(args);
            }
            var key = template(args);
            if (cache.has(key)) {
                return cache.read(key);
            }
            else {
                return cache.write(key, fn.apply(void 0, args));
            }
        };
    };
};
