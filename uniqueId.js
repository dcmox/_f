"use strict";
exports.__esModule = true;
exports.uniqueId = function (prefix, postfix) {
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
