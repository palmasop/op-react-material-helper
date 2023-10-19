"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEmail = exports.spaceStrToArray = exports.replaceBracesByObj = exports.replaceBraces = exports.getCamelFromSpaced_Low = exports.getCamelFromSpaced = exports.getSpacedFromCamel_Cap = exports.getSpacedFromCamel = exports.padNumber = void 0;
var padNumber = function (num, len) {
    if (len === void 0) { len = 9; }
    return num.toString().padStart(len, "0");
};
exports.padNumber = padNumber;
var getSpacedFromCamel = function (str) {
    return str.replace(/([A-Z])/g, " $1");
};
exports.getSpacedFromCamel = getSpacedFromCamel;
var getSpacedFromCamel_Cap = function (str) {
    return (0, exports.getSpacedFromCamel)(str.charAt(0).toUpperCase() + str.slice(1));
};
exports.getSpacedFromCamel_Cap = getSpacedFromCamel_Cap;
var getCamelFromSpaced = function (str) {
    return str.replace(/\s(\w)/g, function (_, letter) { return letter.toUpperCase(); });
};
exports.getCamelFromSpaced = getCamelFromSpaced;
var getCamelFromSpaced_Low = function (str) {
    return (0, exports.getCamelFromSpaced)(str.toLowerCase());
};
exports.getCamelFromSpaced_Low = getCamelFromSpaced_Low;
var replaceBraces = function (str, replace) {
    return str === null || str === void 0 ? void 0 : str.replace(/{([^}]+)}/g, function (match, key) { return replace; });
};
exports.replaceBraces = replaceBraces;
var replaceBracesByObj = function (str, obj) {
    return str === null || str === void 0 ? void 0 : str.replace(/{([^}]+)}/g, function (match, key) { return obj[key]; });
};
exports.replaceBracesByObj = replaceBracesByObj;
var spaceStrToArray = function (str) {
    return str.trim().split(" ").map(function (a) { return "\"".concat(a, "\""); }).join(",");
};
exports.spaceStrToArray = spaceStrToArray;
var isValidEmail = function (str) {
    return str.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};
exports.isValidEmail = isValidEmail;
//# sourceMappingURL=string.js.map