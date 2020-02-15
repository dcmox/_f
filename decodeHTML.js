"use strict";
exports.__esModule = true;
// tslint:disable: object-literal-sort-keys
var HTML_CHAR_MAP = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
    '`': '&#x60;'
};
var REGEX_HTML_CHARS = /[&<>"']/g;
exports.decodeHTML = function (html) {
    return html.toString().replace(REGEX_HTML_CHARS, function (m) { return HTML_CHAR_MAP[m]; });
};
