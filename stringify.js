"use strict";
exports.__esModule = true;
var delimiter = String.fromCharCode(0);
exports.stringifyCache = function (o, _returnTemplate) {
    if (_returnTemplate === void 0) { _returnTemplate = false; }
    var tpl = '{';
    var keys = Object.keys(o);
    if (keys.length === 0 && _returnTemplate && o.constructor === Object) {
        return '{}';
    }
    keys.forEach(function (k) {
        switch (o[k].constructor) {
            case String:
            case Date:
                tpl += '"' + k + '":' + '"' + delimiter + '",';
                break;
            case Number:
            case Boolean:
                tpl += '"' + k + '":' + delimiter + ',';
                break;
            case Object:
                tpl += '"' + k + '":' + exports.stringifyCache(o[k], true) + ',';
                break;
            case Array:
            case Int8Array:
            case Int16Array:
            case Int32Array:
            case Uint8ClampedArray:
            case Uint8Array:
            case Uint16Array:
            case Uint32Array:
                tpl += '"' + k + '":' + '[' + delimiter + ']' + ',';
                break;
            case BigInt64Array: // Special support for these
            case BigUint64Array:
                tpl += '"' + k + '":' + delimiter + ',';
                break;
            default:
                tpl += '"' + k + '":' + delimiter + ',';
        }
    });
    tpl = tpl.slice(0, tpl.length - 1) + '}';
    if (_returnTemplate) {
        return tpl;
    }
    return function (o) {
        switch (o.constructor) {
            case String:
                return '"' + o.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
            case Date:
                return '"' + o.toISOString() + '"';
            case Boolean:
            case Number:
                return o.toString();
            case Array:
                return '[' + o.toString() + ']';
        }
        var values = Object.values(o).reduce(function (dest, obj) {
            if (obj.constructor === Object) {
                dest.push.apply(dest, Object.values(obj));
                return dest;
            }
            else {
                dest.push(obj);
                return dest;
            }
        }, []);
        var i = 0;
        tpl = tpl.replace(new RegExp(delimiter, 'g'), function () {
            i++;
            if (values[i - 1].constructor === Function ||
                typeof values[i - 1] === 'object') {
                if (values[i - 1].constructor === Date) {
                    return values[i - 1].toISOString();
                }
                switch (values[i - 1].constructor) {
                    case BigInt64Array:
                        return '{}'; // 'BigInt64Array [' + values[i - 1] + ']'
                    case BigUint64Array:
                        return '{}'; // 'BigUint64Array [' + values[i - 1] + ']'
                    case Array:
                    case Int8Array:
                    case Int16Array:
                    case Int32Array:
                    case Uint8ClampedArray:
                    case Uint8Array:
                    case Uint16Array:
                    case Uint32Array:
                        return values[i - 1];
                }
                return '{}';
            }
            else {
                if (values[i - 1].constructor === String) {
                    return values[i - 1]
                        .replace(/\\/g, '\\\\')
                        .replace(/"/g, '\\"');
                }
                else {
                    return values[i - 1];
                }
            }
        });
        return tpl;
    };
};
// Declared twice for speed optimizations and individual use
exports.stringifyT = function (o, tpl) {
    if (tpl === void 0) { tpl = ''; }
    switch (o.constructor) {
        case String:
            return '"' + o.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
        case Date:
            return '"' + o.toISOString() + '"';
        case Boolean:
        case Number:
            return o.toString();
        case Array:
            return '[' + o.toString() + ']';
    }
    var values = Object.values(o).reduce(function (dest, obj) {
        if (obj.constructor === Object) {
            dest.push.apply(dest, Object.values(obj));
            return dest;
        }
        else {
            dest.push(obj);
            return dest;
        }
    }, []);
    var i = 0;
    tpl = tpl.replace(new RegExp(delimiter, 'g'), function () {
        i++;
        if (values[i - 1].constructor === Function ||
            typeof values[i - 1] === 'object') {
            if (values[i - 1].constructor === Date) {
                return values[i - 1].toISOString();
            }
            switch (values[i - 1].constructor) {
                case BigInt64Array:
                    return '{}'; // 'BigInt64Array [' + values[i - 1] + ']'
                case BigUint64Array:
                    return '{}'; // 'BigUint64Array [' + values[i - 1] + ']'
                case Array:
                case Int8Array:
                case Int16Array:
                case Int32Array:
                case Uint8ClampedArray:
                case Uint8Array:
                case Uint16Array:
                case Uint32Array:
                    return values[i - 1];
            }
            return '{}';
        }
        else {
            if (values[i - 1].constructor === String) {
                return values[i - 1].replace(/\\/g, '\\\\').replace(/"/g, '\\"');
            }
            else {
                return values[i - 1];
            }
        }
    });
    return tpl;
};
