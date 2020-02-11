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
var pascalCase = function (s) {
    return s
        .replace(/_/g, ' ')
        .split(' ')
        .map(function (s) { return s.charAt(0).toUpperCase() + s.slice(1); })
        .join('');
};
var camelCase = function (s) {
    return s
        .replace(/_/g, ' ')
        .split(' ')
        .map(function (s, i) {
        return i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1);
    })
        .join('');
};
var nl2br = function (s) { return s.replace(/\n/g, '<br />'); };
var br2nl = function (s) { return s.replace(/(<br([ ]*)?>|<br([ ]*)?\/>)/gi, '\n'); };
var splitByLength = function (s, len) {
    return s.match(new RegExp(".{" + len + "}", 'g')) || [s];
};
var upperCaseWords = function (s) {
    return s
        .split(' ')
        .map(function (w) { return w.charAt(0).toUpperCase() + w.slice(1); })
        .join(' ');
};
var upperCaseFirst = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };
var upperCaseFirstInSentence = function (s) {
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
var decodeHTML = function (html) {
    return html.toString().replace(REGEX_HTML_CHARS, function (m) { return HTML_CHAR_MAP[m]; });
};
var toAlpha = function (s, charSet) {
    return charSet
        ? s.replace(new RegExp("[^a-zA-Z" + charSet
            .split('')
            .map(function (c) { return '\\' + c; })
            .join('') + "]", 'g'), '')
        : s.replace(/[^a-zA-Z]/g, '');
};
var toNumeric = function (s, charSet) {
    return charSet
        ? s.replace(new RegExp("[^0-9" + charSet
            .split('')
            .map(function (c) { return '\\' + c; })
            .join('') + "]", 'g'), '')
        : s.replace(/[^0-9]/g, '');
};
var toBinary = function (s) {
    return s
        .split('')
        .map(function (c) {
        return c
            .charCodeAt(0)
            .toString(2)
            .padStart(8, '0');
    })
        .join('');
};
var toHex = function (s) {
    return s
        .split('')
        .map(function (c) { return c.charCodeAt(0).toString(16); })
        .join('');
};
var fromHex = function (s) {
    return splitByLength(s, 2)
        .map(function (c) { return String.fromCharCode(parseInt(c, 16)); })
        .join('');
};
var fromBinary = function (s) {
    return splitByLength(s, 8)
        .map(function (c) { return String.fromCharCode(parseInt(c, 2)); })
        .join('');
};
var toBase64 = function (s) {
    return window ? btoa(s) : new Buffer(s).toString('base64');
};
var fromBase64 = function (s) {
    return window ? atob(s) : new Buffer(s).toString('ascii');
};
var rightRotate = function (s, bits) {
    return bits > s.length
        ? s.slice(s.length - (bits % s.length)) +
            s.slice(0, s.length - (bits % s.length))
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
    return s.length <= len
        ? s
        : s.slice(0, s.substring(0, len).lastIndexOf(' ')) + '...';
};
var reverse = function (s) {
    return s
        .split('')
        .reverse()
        .join('');
};
var reverseWords = function (s) {
    return s
        .split(' ')
        .reverse()
        .join(' ');
};
var toPath = function (s) {
    return s
        .replace(/\[|\]/g, '.')
        .split('.')
        .filter(function (n) { return n; });
};
var firstUniqueCharacter = function (s) {
    return s.split('').find(function (c) { return s.indexOf(c) === s.lastIndexOf(c); }) || '';
};
var randomString = function (len, charset) {
    if (len === void 0) { len = 10; }
    if (charset === void 0) { charset = '!@#%=*_-~23456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ'; }
    return Array.from({ length: len }, function (c) {
        return charset.charAt(Math.floor(Math.random() * charset.length));
    }).join('');
};
var isShouting = function (s, threshold) {
    if (threshold === void 0) { threshold = 0.51; }
    var _a;
    return (((_a = s.match(/[A-Z]/g)) === null || _a === void 0 ? void 0 : _a.length) || 0) / s.length >= threshold && s.length > 5;
};
var getSequences = function (s, ignoreCase) {
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
var hasSequences = function (s, ignoreCase) {
    if (ignoreCase === void 0) { ignoreCase = true; }
    return new RegExp("(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz" +
        "|zyx|xyw|xwv|wvu|vut|uts|tsr|srq|rqp|qpo|pon|onm|nml|mlk|lkj|kji|jih|ihg|hgf|gfe|fed|edc|dcb|cba" +
        "|012|123|234|345|456|567|678|789|890|098|987|876|765|654|543|432|321|210)", ignoreCase ? 'gi' : 'g').test(s);
};
var getRepeatingSets = function (s, ignoreCase, minRepeat) {
    if (ignoreCase === void 0) { ignoreCase = true; }
    if (minRepeat === void 0) { minRepeat = 2; }
    return s.match(new RegExp("(.+)\\1{" + minRepeat + ",}", ignoreCase ? 'gi' : 'g'));
};
var hasRepeatingSets = function (s, ignoreCase, minRepeat) {
    if (ignoreCase === void 0) { ignoreCase = true; }
    if (minRepeat === void 0) { minRepeat = 2; }
    return new RegExp("(.+)\\1{" + minRepeat + ",}", ignoreCase ? 'gi' : 'g').test(s);
};
var getRepeatingCharacters = function (s, ignoreCase, minRepeat) {
    if (ignoreCase === void 0) { ignoreCase = true; }
    if (minRepeat === void 0) { minRepeat = 2; }
    return s.match(new RegExp("(.)\\1{" + minRepeat + ",}", ignoreCase ? 'gi' : 'g'));
};
var hasRepeatingCharacters = function (s, ignoreCase, minRepeat) {
    if (ignoreCase === void 0) { ignoreCase = true; }
    if (minRepeat === void 0) { minRepeat = 2; }
    return new RegExp("(.)\\1{" + minRepeat + ",}", ignoreCase ? 'gi' : 'g').test(s);
};
var secureRandomNumber = function (min, max) {
    var distance = max - min;
    var level = Math.ceil(Math.log(distance) / Math.log(256));
    var num = parseInt(require('crypto')
        .randomBytes(level)
        .toString('hex'), 16);
    var result = Math.floor((num / Math.pow(256, level)) * (max - min + 1) + min);
    return result;
};
var keyToField = function (s, strip) {
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
        return a
            .slice()
            .reverse()
            .find(function (item) { return cond(item); });
    }
};
var unique = function (a, byRef) {
    if (byRef === void 0) { byRef = false; }
    return byRef
        ? a.filter(function (item, index) { return a.indexOf(item) === index; })
        : a
            .slice()
            .filter(function (item, index) { return a.indexOf(item) === index; });
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
            return src.map(function (e) { return (Array.isArray(src) ? deepClone(e) : e); });
        }
        else {
            return src.slice(0);
        }
    }
    if (typeof src !== 'object') {
        return src;
    }
    if (typeof src === 'object' &&
        CONSTRUCTOR_TAGS.includes(toString.call(src))) {
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
var flat = function (a) {
    return a.reduce(function (ret, v) { return ret.concat(Array.isArray(v) ? flat(v) : v); }, []);
};
var shuffle = function (a, byRef) {
    if (byRef === void 0) { byRef = false; }
    return typeof a === 'string'
        ? a
            .split('')
            .sort(function (a, b) {
            return Math.random() > Math.random() ? 1 : -1;
        })
            .join('')
        : byRef
            ? a.sort(function (a, b) { return (Math.random() > Math.random() ? 1 : -1); })
            : a
                .slice()
                .sort(function (a, b) {
                return Math.random() > Math.random() ? 1 : -1;
            });
};
var isNumeric = function (s, ignoreChars) {
    return ignoreChars
        ? !s.toString().match(new RegExp("[^0-9" + ignoreChars
            .split('')
            .map(function (c) { return '\\' + c; })
            .join('|') + "]", 'gi'))
        : !s.toString().match(/[^0-9]/g);
};
var isAlpha = function (s, ignoreChars) {
    return ignoreChars
        ? !s.toString().match(new RegExp("[^A-Z" + ignoreChars
            .split('')
            .map(function (c) { return '\\' + c; })
            .join('|') + "]", 'gi'))
        : !s.toString().match(/[^A-Z]/gi);
};
var isAlphaNumeric = function (s, ignoreChars) {
    return ignoreChars
        ? !s.toString().match(new RegExp("[^A-Z0-9" + ignoreChars
            .split('')
            .map(function (c) { return '\\' + c; })
            .join('|') + "]", 'gi'))
        : !s.toString().match(/[^A-Z0-9]/gi);
};
var range = function (s, e, m) {
    return e && m
        ? Array.from({ length: Math.ceil((e - s) / m) }, function (x, i) { return i * m + s; })
        : e
            ? Array.from({ length: e - s }, function (x, i) { return i + s; })
            : Array.from({ length: s }, function (x, i) { return i; });
};
var partition = function (a, size) {
    return a.reduce(function (acc, item) {
        acc[acc.length - 1]
            ? acc[acc.length - 1].length < size
                ? acc[acc.length - 1].push(item)
                : (acc[acc.length] = [item])
            : (acc[acc.length] = [item]);
        return acc;
    }, []);
};
var unixTimestamp = function () { return new Date().valueOf(); };
var uniqueId = function (prefix, postfix) {
    return ((prefix || '') +
        (process && process.pid ? process.pid.toString(36) : '') +
        Timestamp.get().toString(36) +
        (postfix || ''));
};
var Timestamp = /** @class */ (function () {
    function Timestamp() {
    }
    Timestamp.get = function () {
        this.time = new Date().valueOf();
        this.last = this.last || this.time;
        return (this.last = this.time > this.last ? this.time : this.last + 1);
    };
    return Timestamp;
}());
module.exports = {
    pascalCase: pascalCase,
    camelCase: camelCase,
    nl2br: nl2br,
    br2nl: br2nl,
    splitByLength: splitByLength,
    upperCaseWords: upperCaseWords,
    upperCaseFirst: upperCaseFirst,
    upperCaseFirstInSentence: upperCaseFirstInSentence,
    decodeHTML: decodeHTML,
    toAlpha: toAlpha,
    toNumeric: toNumeric,
    toBinary: toBinary,
    toHex: toHex,
    fromHex: fromHex,
    fromBinary: fromBinary,
    toBase64: toBase64,
    fromBase64: fromBase64,
    rightRotate: rightRotate,
    leftRotate: leftRotate,
    rightShift: rightShift,
    excerpt: excerpt,
    reverse: reverse,
    reverseWords: reverseWords,
    toPath: toPath,
    keyToField: keyToField,
    compact: compact,
    first: first,
    last: last,
    findFirst: findFirst,
    findLast: findLast,
    unique: unique,
    deepClone: deepClone,
    flat: flat,
    shuffle: shuffle,
    isAlpha: isAlpha,
    isNumeric: isNumeric,
    isAlphaNumeric: isAlphaNumeric,
    range: range,
    unixTimestamp: unixTimestamp,
    uniqueId: uniqueId,
    partition: partition,
    randomString: randomString,
    isShouting: isShouting,
    firstUniqueCharacter: firstUniqueCharacter,
    getRepeatingCharacters: getRepeatingCharacters,
    hasRepeatingCharacters: hasRepeatingCharacters,
    getRepeatingSets: getRepeatingSets,
    hasRepeatingSets: hasRepeatingSets,
    getSequences: getSequences,
    hasSequences: hasSequences,
    secureRandomNumber: secureRandomNumber
};
