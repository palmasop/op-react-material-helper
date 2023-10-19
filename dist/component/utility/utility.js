"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareValue = exports.sleep = void 0;
var sleep = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
exports.sleep = sleep;
function compareValue(a, b, oper) {
    switch (oper) {
        case "<":
            return a < b;
        case ">":
            return a > b;
        case "<=":
            return a <= b;
        case ">=":
            return a >= b;
        case "===":
            return a === b;
        case "!==":
            return a !== b;
        default:
            throw new Error("Invalid operator: ".concat(oper));
    }
}
exports.compareValue = compareValue;
//# sourceMappingURL=utility.js.map