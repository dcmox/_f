"use strict";
exports.__esModule = true;
exports.keyToField = function (s, strip) {
    return strip
        ? s
            .replace(new RegExp("" + strip, 'g'), '')
            .replace(/\-|\_/g, ' ')
            .split(' ')
            .map(function (w) { return w.charAt(0).toUpperCase() + w.slice(1); })
            .join(' ')
            .trim()
        : s
            .replace(/\-|\_/g, ' ')
            .split(' ')
            .map(function (w) { return w.charAt(0).toUpperCase() + w.slice(1); })
            .join(' ')
            .trim();
};
