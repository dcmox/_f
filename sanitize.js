"use strict";
exports.__esModule = true;
var ESanitize;
(function (ESanitize) {
    ESanitize[ESanitize["MONGO"] = 1] = "MONGO";
    ESanitize[ESanitize["SQL"] = 2] = "SQL";
    ESanitize[ESanitize["HTML"] = 3] = "HTML";
})(ESanitize = exports.ESanitize || (exports.ESanitize = {}));
// tslint:disable: object-literal-sort-keys
// tslint:disable: quotemark
var HTML_CHAR_MAP = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
    '`': '&#x60;'
};
var SQL_CHAR_MAP = {
    '\0': '\\0',
    '\x08': '\\b',
    '\x09': '\\t',
    '\x1a': '\\z',
    '\n': '\\n',
    '\r': '\\r',
    '"': '\\"',
    "'": "\\'",
    '%': '\\%',
    '\\': '\\\\'
};
exports.sanitize = function (v, mode) {
    if (mode === void 0) { mode = ESanitize.MONGO; }
    switch (mode) {
        case ESanitize.MONGO:
            if (toString.call(v) === '[object Object]') {
                for (var k in v) {
                    if (k.startsWith('$')) {
                        delete v[k];
                    }
                    else if (toString.call(v[k]) === '[object Object]') {
                        exports.sanitize(v[k], mode);
                    }
                }
            }
            break;
        case ESanitize.SQL:
            if (typeof v === 'string') {
                return v.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) { return SQL_CHAR_MAP[char] || char; });
            }
            else if (toString.call(v) === '[object Object]') {
                for (var k in v) {
                    if (typeof v[k] === 'string' ||
                        toString.call(v[k]) === '[object Object]') {
                        v[k] = exports.sanitize(v[k], mode);
                    }
                }
            }
            break;
        case ESanitize.HTML:
            if (typeof v === 'string') {
                return v.replace(/[&<>"']/g, function (char) { return HTML_CHAR_MAP[char]; });
            }
            else if (toString.call(v) === '[object Object]') {
                for (var k in v) {
                    if (typeof v[k] === 'string') {
                        v[k] = v[k].replace(/[&<>"']/g, function (char) { return HTML_CHAR_MAP[char]; });
                    }
                    else if (toString.call(v[k]) === '[object Object]') {
                        v[k] = exports.sanitize(v[k], mode);
                    }
                }
            }
            break;
    }
    return v;
};
