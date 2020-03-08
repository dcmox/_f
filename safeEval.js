"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.safeEval = function (s, context, timeout) {
    if (context === void 0) { context = {}; }
    if (timeout === void 0) { timeout = 5000; }
    return __awaiter(void 0, void 0, void 0, function () {
        var fork, tmp, fs, container, script, sandbox_1, result, container, containerId, script, _i, _a, key, type, time_1, result, obj, _b, _c, key;
        var _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    if (!(typeof process !== 'undefined' &&
                        process.release.name === 'node' &&
                        context.useNode !== false) // Special parameter for testing
                    ) return [3 /*break*/, 2]; // Special parameter for testing
                    fork = require('child_process').fork;
                    tmp = require('os').tmpdir();
                    fs = require('fs');
                    container = tmp +
                        'tmpFile-' +
                        +new Date() +
                        '-' +
                        (Math.random() * 10000 + 1000);
                    script = "\n            var s = `" + s + "`\n            var context = " + JSON.stringify(context) + "\n            const sandbox = require('vm')\n            sandbox.createContext(context)\n            sandbox.runInContext(s, context)\n            if (process.send) {\n                process.send(context)\n            }\n        ";
                    // Write our script to the container
                    fs.writeFileSync(container, script);
                    sandbox_1 = fork(container);
                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                            // Set a timeout
                            var handle = setTimeout(function () {
                                sandbox_1.kill();
                                reject('safeEval timed out before resolving.');
                            }, timeout);
                            // Resolve eval output
                            sandbox_1.on('message', function (result) {
                                clearTimeout(handle);
                                resolve(result);
                            });
                        })
                        // Delete our container
                    ];
                case 1:
                    result = _g.sent();
                    // Delete our container
                    fs.unlinkSync(container);
                    return [2 /*return*/, result];
                case 2:
                    if (!(typeof window !== 'undefined')) return [3 /*break*/, 6];
                    container = document.createElement('iframe');
                    containerId = 'evalContainer-' + +new Date();
                    container.id = containerId;
                    script = 'parent = null;';
                    // Only give references to context values, basic support
                    for (_i = 0, _a = Object.keys(context); _i < _a.length; _i++) {
                        key = _a[_i];
                        if (key === 'useNode') {
                            continue;
                        }
                        type = typeof context[key];
                        switch (type) {
                            case 'string':
                                script += "window[\"" + key + "\"] = \"" + context[key] + "\";";
                                break;
                            case 'number':
                            case 'boolean':
                                script += "window[\"" + key + "\"] = " + context[key] + ";";
                                break;
                            default:
                                script += "window[\"" + key + "\"] = " + JSON.stringify(context[key]) + ";";
                                break;
                        }
                    }
                    // Finally, store our result into container window
                    script += 'window["evalResult"] = eval(`' + s + '`) || null';
                    container.src = 'javascript:' + script;
                    container.setAttribute('sandbox', 'allow-scripts');
                    document.body.append(container);
                    time_1 = 0;
                    _g.label = 3;
                case 3:
                    if (!(((_d = document.getElementById(containerId)) === null || _d === void 0 ? void 0 : _d.contentWindow.window.evalResult) === undefined)) return [3 /*break*/, 5];
                    time_1 += 10;
                    if (time_1 >= timeout) {
                        return [3 /*break*/, 5];
                    }
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, time_1); })];
                case 4:
                    _g.sent();
                    return [3 /*break*/, 3];
                case 5:
                    result = (_e = document.getElementById(containerId)) === null || _e === void 0 ? void 0 : _e.contentWindow.window.evalResult;
                    if (result !== undefined) {
                        obj = {};
                        for (_b = 0, _c = Object.keys(context); _b < _c.length; _b++) {
                            key = _c[_b];
                            if (key === 'useNode') {
                                continue;
                            }
                            obj[key] = (_f = document.getElementById(containerId)) === null || _f === void 0 ? void 0 : _f.contentWindow.window[key];
                        }
                        return [2 /*return*/, obj];
                    }
                    return [2 /*return*/, undefined];
                case 6: return [2 /*return*/];
            }
        });
    });
};
// Simple eval
exports.simpleEval = function (s) {
    return Function('"use strict";return (' + s + ')')();
};
