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
exports.Line = void 0;
var system_1 = require("@mui/system");
var react_1 = __importDefault(require("react"));
var Line = function (_a) {
    var _b, _c;
    var width = _a.width, height = _a.height, color = _a.color, fade = _a.fade, fadeDir = _a.fadeDir, radius = _a.radius, gradient = _a.gradient, props = __rest(_a, ["width", "height", "color", "fade", "fadeDir", "radius", "gradient"]);
    var gradientColor = gradient ? "linear-gradient(".concat((_b = gradient.to) !== null && _b !== void 0 ? _b : "to right", ", ").concat(gradient.color.join(","), ")") :
        fade ? "linear-gradient(".concat(fadeDir !== null && fadeDir !== void 0 ? fadeDir : "to right", ", ").concat(color, ", ").concat((0, system_1.alpha)(color, 0), ")") :
            null;
    return (react_1.default.createElement(system_1.Box, __assign({ width: width, height: height, borderRadius: radius !== null && radius !== void 0 ? radius : 15 }, props, { sx: __assign({ background: (_c = gradientColor !== null && gradientColor !== void 0 ? gradientColor : color) !== null && _c !== void 0 ? _c : "primary.main" }, props === null || props === void 0 ? void 0 : props.sx) })));
};
exports.Line = Line;
//# sourceMappingURL=Line.js.map