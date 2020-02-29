"use strict";
exports.__esModule = true;
exports.justifyText = function (text, mlen) {
    if (mlen === void 0) { mlen = 20; }
    return text
        .split(' ')
        .reduce(function (txt, w) {
        var idx = txt.length - 1;
        var len = txt && txt.length ? txt[idx].length : 0;
        if (len) {
            // Add word
            if (len + w.length + 1 < mlen) {
                txt[idx] += w + ' ';
            }
            else {
                // Justify line
                txt[idx] = txt[idx].trim();
                var llen = txt[idx].length;
                if (llen < mlen) {
                    var remaining_1 = mlen - llen;
                    var words = txt[idx].split(' ');
                    var wlen_1 = words.length - 1;
                    var spacesPerWord_1 = Math.ceil(remaining_1 / wlen_1);
                    txt[idx] = txt[idx]
                        .split(' ')
                        .map(function (tw, i) {
                        if (i !== wlen_1) {
                            if (remaining_1 >= spacesPerWord_1) {
                                tw = tw.padEnd(spacesPerWord_1 + tw.length + 1, ' ');
                                remaining_1 -= spacesPerWord_1;
                            }
                            else {
                                tw = tw.padEnd(remaining_1 + tw.length + 1, ' ');
                                remaining_1 = 0;
                            }
                        }
                        return tw;
                    })
                        .join('');
                }
                txt.push(w + ' ');
            }
        }
        else {
            // Next line
            txt.push(w + ' ');
        }
        return txt;
    }, [])
        .join('\n')
        .trim();
};
