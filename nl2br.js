"use strict";
exports.__esModule = true;
exports.nl2br = function (s) { return s.replace(/\n/g, '<br />'); };
exports.br2nl = function (s) {
    return s.replace(/(<br([ ]*)?>|<br([ ]*)?\/>)/gi, '\n');
};
