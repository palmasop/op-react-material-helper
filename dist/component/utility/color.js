"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDarkerColor = exports.isBrowserDefaultDark = void 0;
var isBrowserDefaultDark = function () {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
};
exports.isBrowserDefaultDark = isBrowserDefaultDark;
var getDarkerColor = function (hexColor, percentage) {
    if (hexColor[0] !== "#")
        return hexColor;
    hexColor = hexColor.replace("#", "");
    if (hexColor.length === 3) {
        hexColor = hexColor
            .split("")
            .map(function (char) { return char + char; })
            .join("");
    }
    var r = parseInt(hexColor.substr(0, 2), 16);
    var g = parseInt(hexColor.substr(2, 2), 16);
    var b = parseInt(hexColor.substr(4, 2), 16);
    var darkR = Math.floor(r * (1 - percentage));
    var darkG = Math.floor(g * (1 - percentage));
    var darkB = Math.floor(b * (1 - percentage));
    return "#" + (darkR * 65536 + darkG * 256 + darkB)
        .toString(16)
        .padStart(6, "0");
};
exports.getDarkerColor = getDarkerColor;
//# sourceMappingURL=color.js.map