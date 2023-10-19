"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContrastTextButton = void 0;
var material_1 = require("@mui/material");
var system_1 = require("@mui/system");
exports.ContrastTextButton = (0, system_1.styled)(material_1.Button)(function (_a) {
    var theme = _a.theme, _b = _a.color, color = _b === void 0 ? 'primary' : _b;
    return ({
        backgroundColor: theme.palette[color].main,
        color: theme.palette[color].contrastText,
        '&:hover': {
            backgroundColor: (0, material_1.darken)(theme.palette[color].main, .05),
        }
    });
});
//# sourceMappingURL=ContrastTextButton.js.map