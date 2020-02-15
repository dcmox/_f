"use strict";
exports.__esModule = true;
exports.upperCaseFirstInSentence = function (s) {
    return s.indexOf('.') === -1 && s.indexOf('?') === -1 && s.indexOf('!') === -1
        ? s.charAt(0).toUpperCase() + s.slice(1)
        : s
            .replace(/(\.|\?|\!)  /g, function (str) { return str.trim() + ' '; })
            .split('.')
            .map(function (sentence) {
            return sentence.charAt(0) === ' '
                ? ' ' +
                    sentence.charAt(1).toUpperCase() +
                    sentence.slice(2)
                : sentence.charAt(0).toUpperCase() + sentence.slice(1);
        })
            .join('.')
            .split('?')
            .map(function (sentence) {
            return sentence.charAt(0) === ' '
                ? ' ' +
                    sentence.charAt(1).toUpperCase() +
                    sentence.slice(2)
                : sentence.charAt(0).toUpperCase() + sentence.slice(1);
        })
            .join('?')
            .split('!')
            .map(function (sentence) {
            return sentence.charAt(0) === ' '
                ? ' ' +
                    sentence.charAt(1).toUpperCase() +
                    sentence.slice(2)
                : sentence.charAt(0).toUpperCase() + sentence.slice(1);
        })
            .join('!');
};
