"use strict";
exports.__esModule = true;
var LRUCache = /** @class */ (function () {
    function LRUCache(limit) {
        this.limit = limit;
        this.head = null;
        this.tail = null;
        this.cache = new Map();
    }
    LRUCache.prototype.write = function (key, value) {
        this.prune();
        if (!this.head) {
            this.head = this.tail = {
                key: key,
                next: null,
                prev: null,
                value: value
            };
        }
        else {
            var node = {
                key: key,
                next: null,
                prev: null,
                value: value
            };
            this.head.prev = node;
            this.head = node;
        }
        this.cache.set(key, this.head);
        return value;
    };
    LRUCache.prototype.has = function (key) {
        return this.cache.has(key);
    };
    LRUCache.prototype.read = function (key) {
        if (this.cache.get(key)) {
            var value = this.cache.get(key).value;
            this.remove(key);
            this.write(key, value);
            return value;
        }
        return undefined;
    };
    LRUCache.prototype.clear = function () {
        this.head = null;
        this.tail = null;
        this.cache.clear();
    };
    LRUCache.prototype.prune = function () {
        if (this.cache.size === this.limit && this.tail && this.tail.key) {
            this.remove(this.tail.key);
        }
    };
    LRUCache.prototype.remove = function (key) {
        var node = this.cache.get(key);
        if (node) {
            if (node.prev !== null) {
                node.prev.next = node.next;
            }
            else {
                this.head = node.next;
            }
            if (node.next !== null) {
                node.next.prev = node.prev;
            }
            else {
                this.tail = node.prev;
            }
        }
        this.cache["delete"](key);
    };
    return LRUCache;
}());
exports.LRUCache = LRUCache;
