"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var material_1 = require("@mui/material");
var system_1 = require("@mui/system");
var react_1 = __importDefault(require("react"));
var Icon_1 = require("./Icon");
var List = function (_a) {
    var list = _a.list, spacing = _a.spacing, iconProps = _a.iconProps, textProps = _a.textProps, _b = _a.color, color = _b === void 0 ? "text.primary" : _b, _c = _a.dotColor, dotColor = _c === void 0 ? "text.primary" : _c, _d = _a.dotSize, dotSize = _d === void 0 ? 8 : _d, dot = _a.dot, containerProps = _a.containerProps, textRender = _a.textRender;
    var defaultIconStyles = __assign({ fontSize: dotSize, color: dotColor !== null && dotColor !== void 0 ? dotColor : color }, iconProps === null || iconProps === void 0 ? void 0 : iconProps.sx);
    return (react_1.default.createElement(system_1.Stack, __assign({ spacing: spacing !== null && spacing !== void 0 ? spacing : 1.5 }, containerProps), list === null || list === void 0 ? void 0 : list.map(function (item, i) {
        return react_1.default.createElement(system_1.Stack, { key: i, direction: "row", alignItems: "center", spacing: 1 }, dot !== null && dot !== void 0 ? dot : react_1.default.createElement(Icon_1.MUIIcon, __assign({ name: "FiberManualRecord" }, iconProps, { sx: defaultIconStyles })),
            textRender ? textRender(item) :
                react_1.default.createElement(material_1.Typography, __assign({ color: color, variant: "inherit" }, textProps), item));
    })));
};
exports.List = List;
//# sourceMappingURL=List.js.map