"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDarken = void 0;
var material_1 = require("@mui/material");
var useDarken = function () {
    var palette = (0, material_1.useTheme)().palette;
    var getDarken = function (color, amount) {
        var resolvedColor = color;
        if (color.includes(".")) {
            var arr = color.split(".");
            var a = arr[0];
            var b = arr[1];
            if (!!palette[a] && typeof palette[a][b] === "string") {
                resolvedColor = palette[a][b];
            }
        }
        return (0, material_1.darken)(resolvedColor, amount);
    };
    return getDarken;
};
exports.useDarken = useDarken;
//# sourceMappingURL=useDarken.js.map