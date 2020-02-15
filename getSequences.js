"use strict";
exports.__esModule = true;
exports.getSequences = function (s, ignoreCase) {
    if (ignoreCase === void 0) { ignoreCase = true; }
    var cmp = ignoreCase ? s.toLowerCase() : s;
    var i = 0;
    var sp = -1;
    var ep = -1;
    var dir = -1;
    var sequences = [];
    while (i < s.length) {
        if (sp === -1) {
            if (cmp.charCodeAt(i) === cmp.charCodeAt(i + 1) - 1) {
                sp = i;
                dir = -1;
            }
            else if (cmp.charCodeAt(i) === cmp.charCodeAt(i + 1) + 1) {
                sp = i;
                dir = 1;
            }
        }
        else {
            if ((dir === -1 &&
                cmp.charCodeAt(i) === cmp.charCodeAt(i + 1) - 1) ||
                (dir === 1 && cmp.charCodeAt(i) === cmp.charCodeAt(i + 1) + 1)) {
                ep = i + 2;
            }
            else {
                if (sp !== -1 && ep !== -1) {
                    sequences.push(s.slice(sp, ep));
                }
                sp = ep = -1;
            }
        }
        i++;
    }
    return sequences;
};
