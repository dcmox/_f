/* Copyright 2020 Daniel Moxon @ https://github.com/dcmox/_s */
"use strict";
exports.__esModule = true;
// tslint:disable: object-literal-sort-keys
var HTML_CHAR_MAP = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#039;',
    '`': '&#x60;'
};
var REGEX_HTML_CHARS = /[&<>"']/g;
var pascalCase = function (s) { return s.replace(/_/g, ' ').split(' ').map(function (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}).join(''); };
var camelCase = function (s) { return s.replace(/_/g, ' ').split(' ').map(function (s, i) {
    return i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1);
}).join(''); };
var nl2br = function (s) { return s.replace(/\n/g, '<br />'); };
var br2nl = function (s) { return s.replace(/(<br([ ]*)?>|<br([ ]*)?\/>)/gi, '\n'); };
var splitByLength = function (s, len) { return s.match(new RegExp(".{" + len + "}", 'g')) || [s]; };
var upperCaseWords = function (s) { return s.split(' ').map(function (w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
}).join(' '); };
var upperCaseFirst = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };
var upperCaseFirstInSentence = function (s) {
    return s.indexOf('.') === -1 && s.indexOf('?') === -1 && s.indexOf('!') === -1
        ? s.charAt(0).toUpperCase() + s.slice(1)
        : s.replace(/(\.|\?|\!)  /g, function (str) { return str.trim() + ' '; })
            .split('.').map(function (sentence) { return sentence.charAt(0) === ' '
            ? ' ' + sentence.charAt(1).toUpperCase() + sentence.slice(2)
            : sentence.charAt(0).toUpperCase() + sentence.slice(1); }).join('.')
            .split('?').map(function (sentence) { return sentence.charAt(0) === ' '
            ? ' ' + sentence.charAt(1).toUpperCase() + sentence.slice(2)
            : sentence.charAt(0).toUpperCase() + sentence.slice(1); }).join('?')
            .split('!').map(function (sentence) { return sentence.charAt(0) === ' '
            ? ' ' + sentence.charAt(1).toUpperCase() + sentence.slice(2)
            : sentence.charAt(0).toUpperCase() + sentence.slice(1); }).join('!');
};
var decodeHTML = function (html) {
    return html.toString().replace(REGEX_HTML_CHARS, function (m) { return HTML_CHAR_MAP[m]; });
};
var toAlpha = function (s, charSet) {
    return charSet
        ? s.replace(new RegExp("[^a-zA-Z" + charSet.split('').map(function (c) { return '\\' + c; }).join('') + "]", 'g'), '')
        : s.replace(/[^a-zA-Z]/g, '');
};
var toNumeric = function (s, charSet) {
    return charSet
        ? s.replace(new RegExp("[^0-9" + charSet.split('').map(function (c) { return '\\' + c; }).join('') + "]", 'g'), '')
        : s.replace(/[^0-9]/g, '');
};
var toBinary = function (s) { return s.split('').map(function (c) { return c.charCodeAt(0).toString(2).padStart(8, '0'); }).join(''); };
var toHex = function (s) { return s.split('').map(function (c) { return c.charCodeAt(0).toString(16); }).join(''); };
var fromHex = function (s) {
    return splitByLength(s, 2).map(function (c) { return String.fromCharCode(parseInt(c, 16)); }).join('');
};
var fromBinary = function (s) {
    return splitByLength(s, 8).map(function (c) { return String.fromCharCode(parseInt(c, 2)); }).join('');
};
var toBase64 = function (s) { return window ? btoa(s) : new Buffer(s).toString('base64'); };
var fromBase64 = function (s) { return window ? atob(s) : new Buffer(s).toString('ascii'); };
var rightRotate = function (s, bits) {
    return bits > s.length
        ? s.slice(s.length - (bits % s.length)) + s.slice(0, s.length - (bits % s.length))
        : s.slice(s.length - bits) + s.slice(0, s.length - bits);
};
var leftRotate = function (s, bits) {
    return bits > s.length
        ? s.slice(bits % s.length) + s.slice(0, bits % s.length)
        : s.slice(bits) + s.slice(0, bits);
};
var rightShift = function (s, bits, char) {
    if (char === void 0) { char = '0'; }
    return bits > s.length
        ? ''.padStart(s.length, char)
        : s.slice(0, s.length - bits).padStart(s.length, char);
};
var excerpt = function (s, len) {
    if (len === void 0) { len = 255; }
    return (s.length <= len ? s : s.slice(0, s.substring(0, len).lastIndexOf(' ')) + '...');
};
var reverse = function (s) { return s.split('').reverse().join(''); };
var reverseWords = function (s) { return s.split(' ').reverse().join(' '); };
var toPath = function (s) { return s.replace(/\[|\]/g, '.').split('.').filter(function (n) { return n; }); };
var compact = function (a) { return a.filter(function (itm) { return itm; }); };
var first = function (a, byRef) {
    if (byRef === void 0) { byRef = false; }
    if (byRef) {
        for (var i in a) {
            if (a[i]) {
                return a[i];
            }
        }
    }
    else {
        return a.slice().shift();
    }
};
var last = function (a, byRef) {
    if (byRef === void 0) { byRef = false; }
    if (byRef) {
        var temp = a.filter(function (item) { return item !== undefined; });
        return temp[temp.length - 1];
    }
    else {
        return a.slice().pop();
    }
};
var findFirst = function (a, cond, byRef) {
    if (byRef === void 0) { byRef = false; }
    return byRef
        ? a.find(function (item) { return cond(item); })
        : a.slice().find(function (item) { return cond(item); });
};
var findLast = function (a, cond, byRef) {
    if (byRef === void 0) { byRef = false; }
    if (byRef) {
        var temp = a.filter(function (item) { return cond(item); });
        return temp[temp.length - 1];
    }
    else {
        return a.slice().reverse().find(function (item) { return cond(item); });
    }
};
var unique = function (a, byRef) {
    if (byRef === void 0) { byRef = false; }
    return byRef
        ? a.filter(function (item, index) { return a.indexOf(item) === index; })
        : a.slice().filter(function (item, index) { return a.indexOf(item) === index; });
};
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
var deepClone = function (src) {
    if (Array.isArray(src)) {
        if (src.some(function (e) { return Array.isArray(e); })) {
            return src.map(function (e) { return Array.isArray(src) ? deepClone(e) : e; });
        }
        else {
            return src.slice(0);
        }
    }
    if (typeof src !== 'object') {
        return src;
    }
    if (typeof src === 'object' && CONSTRUCTOR_TAGS.includes(toString.call(src))) {
        return new src.constructor(src);
    }
    return Object.keys(src).reduce(function (result, key) {
        if (Array.isArray(src[key])) {
            result[key] = deepClone(src[key]);
        }
        else if (typeof src[key] === 'object') {
            var prototype = Object.getPrototypeOf(src[key]);
            result[key] = deepClone(src[key]);
            Object.setPrototypeOf(result[key], prototype);
            Object.getOwnPropertySymbols(src[key]).forEach(function (symbol) {
                result[key][symbol] = src[key][symbol];
            });
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
var flat = function (a) { return a.reduce(function (ret, v) { return ret.concat(Array.isArray(v) ? flat(v) : v); }, []); };
var shuffle = function (a, byRef) {
    if (byRef === void 0) { byRef = false; }
    return typeof a === 'string'
        ? a.split('').sort(function (a, b) { return Math.random() > Math.random() ? 1 : -1; }).join('')
        : byRef
            ? a.sort(function (a, b) { return Math.random() > Math.random() ? 1 : -1; })
            : a.slice().sort(function (a, b) { return Math.random() > Math.random() ? 1 : -1; });
};
var UnderscoreF = /** @class */ (function () {
    function UnderscoreF() {
    }
    UnderscoreF.pascalCase = function (s) { return pascalCase(s); };
    UnderscoreF.camelCase = function (s) { return camelCase(s); };
    UnderscoreF.nl2br = function (s) { return nl2br(s); };
    UnderscoreF.br2nl = function (s) { return br2nl(s); };
    UnderscoreF.splitByLength = function (s, len) { return splitByLength(s, len); };
    UnderscoreF.upperCaseWords = function (s) { return upperCaseWords(s); };
    UnderscoreF.upperCaseFirst = function (s) { return upperCaseFirst(s); };
    UnderscoreF.upperCaseFirstInSentence = function (s) { return upperCaseFirstInSentence(s); };
    UnderscoreF.decodeHTML = function (html) { return decodeHTML(html); };
    UnderscoreF.toAlpha = function (s, charSet) { return toAlpha(s, charSet); };
    UnderscoreF.toNumeric = function (s, charSet) { return toNumeric(s, charSet); };
    UnderscoreF.toBinary = function (s) { return toBinary(s); };
    UnderscoreF.toHex = function (s) { return toHex(s); };
    UnderscoreF.fromHex = function (s) { return fromHex(s); };
    UnderscoreF.fromBinary = function (s) { return fromBinary(s); };
    UnderscoreF.toBase64 = function (s) { return toBase64(s); };
    UnderscoreF.fromBase64 = function (s) { return fromBase64(s); };
    UnderscoreF.rightRotate = function (s, bits) { return rightRotate(s, bits); };
    UnderscoreF.leftRotate = function (s, bits) { return leftRotate(s, bits); };
    UnderscoreF.rightShift = function (s, bits, char) {
        if (char === void 0) { char = '0'; }
        return rightShift(s, bits, char);
    };
    UnderscoreF.excerpt = function (s, len) { return excerpt(s, len); };
    UnderscoreF.reverse = function (s) { return reverse(s); };
    UnderscoreF.reverseWords = function (s) { return reverseWords(s); };
    UnderscoreF.toPath = function (s) { return toPath(s); };
    UnderscoreF.compact = function (a) { return compact(a); };
    UnderscoreF.first = function (a, byRef) {
        if (byRef === void 0) { byRef = false; }
        return first(a, byRef);
    };
    UnderscoreF.last = function (a, byRef) {
        if (byRef === void 0) { byRef = false; }
        return last(a, byRef);
    };
    UnderscoreF.findFirst = function (a, cond, byRef) {
        if (byRef === void 0) { byRef = false; }
        return findFirst(a, cond, byRef);
    };
    UnderscoreF.findLast = function (a, cond, byRef) {
        if (byRef === void 0) { byRef = false; }
        return findLast(a, cond, byRef);
    };
    UnderscoreF.unique = function (a) { return unique(a); };
    UnderscoreF.deepClone = function (a) { return deepClone(a); };
    UnderscoreF.flat = function (a) { return flat(a); };
    UnderscoreF.shuffle = function (a) { return shuffle(a); };
    return UnderscoreF;
}());
exports.UnderscoreF = UnderscoreF;
exports._f = UnderscoreF;
exports["default"] = exports._f;
