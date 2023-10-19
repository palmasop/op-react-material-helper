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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonIcon = exports.MUIIcon = void 0;
var icons = __importStar(require("@mui/icons-material"));
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var MUIIcon = function (_a) {
    var _b;
    var name = _a.name, color = _a.color, props = __rest(_a, ["name", "color"]);
    var theme = (0, material_1.useTheme)();
    var iconComponent = (_b = icons[name]) !== null && _b !== void 0 ? _b : icons['Error'];
    var resolvedColor = typeof color === 'function' ? color(theme) : color;
    var iconProps = __assign(__assign({}, props), { sx: __assign({ color: resolvedColor !== null && resolvedColor !== void 0 ? resolvedColor : theme.palette.text.primary }, props.sx) });
    return react_1.default.createElement(material_1.Icon, __assign({ component: iconComponent }, iconProps));
};
exports.MUIIcon = MUIIcon;
var ButtonIcon = function (_a) {
    var onClick = _a.onClick, color = _a.color, hoverColor = _a.hoverColor, props = __rest(_a, ["onClick", "color", "hoverColor"]);
    var theme = (0, material_1.useTheme)();
    var resolvedColor = typeof color === 'function' ? color(theme) : color;
    var resolvedHoverColor = typeof hoverColor === 'function' ? hoverColor(theme) : hoverColor;
    return (react_1.default.createElement(exports.MUIIcon, __assign({ onClick: onClick, tabIndex: 0, color: resolvedColor !== null && resolvedColor !== void 0 ? resolvedColor : theme.palette.text.primary }, props, { sx: __assign({ "&:hover": {
                color: resolvedHoverColor,
                cursor: "pointer",
            } }, props.sx) })));
};
exports.ButtonIcon = ButtonIcon;
//# sourceMappingURL=Icon.js.map