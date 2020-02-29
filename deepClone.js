"use strict";
exports.__esModule = true;
var CONSTRUCTOR_TAGS = [
    '[object ArrayBuffer]',
    '[object Boolean]',
    '[object DataView]',
    '[object Date]',
    '[object Array]',
    '[object Float32Array]',
    '[object Float64Array]',
    '[object Set]',
    '[object Symbol]',
    '[object Map]',
    '[object Number]',
    '[object Int8Array]',
    '[object Int16Array]',
    '[object Int32Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Uint16Array]',
    '[object Uint32Array]',
    '[object WeakMap]',
];
exports.deepClone = function (src) {
    if (Array.isArray(src)) {
        if (src.some(function (e) { return Array.isArray(e); })) {
            return src.map(function (e) { return (Array.isArray(src) ? exports.deepClone(e) : e); });
        }
        else {
            return src.slice(0);
        }
    }
    if (typeof src !== 'object') {
        return src;
    }
    if (typeof src === 'object' &&
        CONSTRUCTOR_TAGS.includes(toString.call(src))) {
        return new src.constructor(src);
    }
    return Object.keys(src).reduce(function (result, key) {
        if (Array.isArray(src[key])) {
            result[key] = exports.deepClone(src[key]);
        }
        else if (typeof src[key] === 'object') {
            if (src === src[key]) {
                result[key] = result; // maintain self references
            }
            else {
                var prototype = Object.getPrototypeOf(src[key]);
                result[key] = exports.deepClone(src[key]);
                Object.setPrototypeOf(result[key], prototype);
                Object.getOwnPropertySymbols(src[key]).forEach(function (symbol) {
                    result[key][symbol] = src[key][symbol];
                });
            }
        }
        else {
            result[key] = src[key];
        }
        return result;
    }, Object.getOwnPropertySymbols(src).reduce(function (result, symbol) {
        result[symbol] = src[symbol];
        return result;
    }, {}));
};
