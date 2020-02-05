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
var rightRotate = function (s, bits) { return s.slice(s.length - bits) + s.slice(0, s.length - bits); };
var rightShift = function (s, bits, char) {
    if (char === void 0) { char = '0'; }
    return s.slice(0, s.length - bits).padStart(s.length, char);
};
var UnderscoreS = /** @class */ (function () {
    function UnderscoreS() {
    }
    UnderscoreS.pascalCase = function (s) { return pascalCase(s); };
    UnderscoreS.camelCase = function (s) { return camelCase(s); };
    UnderscoreS.nl2br = function (s) { return nl2br(s); };
    UnderscoreS.br2nl = function (s) { return br2nl(s); };
    UnderscoreS.splitByLength = function (s, len) { return splitByLength(s, len); };
    UnderscoreS.upperCaseWords = function (s) { return upperCaseWords(s); };
    UnderscoreS.upperCaseFirst = function (s) { return upperCaseFirst(s); };
    UnderscoreS.upperCaseFirstInSentence = function (s) { return upperCaseFirstInSentence(s); };
    UnderscoreS.decodeHTML = function (html) { return decodeHTML(html); };
    UnderscoreS.toAlpha = function (s, charSet) { return toAlpha(s, charSet); };
    UnderscoreS.toNumeric = function (s, charSet) { return toNumeric(s, charSet); };
    UnderscoreS.toBinary = function (s) { return toBinary(s); };
    UnderscoreS.toHex = function (s) { return toHex(s); };
    UnderscoreS.fromHex = function (s) { return fromHex(s); };
    UnderscoreS.fromBinary = function (s) { return fromBinary(s); };
    UnderscoreS.toBase64 = function (s) { return toBase64(s); };
    UnderscoreS.fromBase64 = function (s) { return fromBase64(s); };
    UnderscoreS.rightRotate = function (s, bits) { return rightRotate(s, bits); };
    UnderscoreS.rightShift = function (s, bits, char) {
        if (char === void 0) { char = '0'; }
        return rightShift(s, bits, char);
    };
    return UnderscoreS;
}());
exports.UnderscoreS = UnderscoreS;
exports._s = UnderscoreS;
exports["default"] = exports._s;
