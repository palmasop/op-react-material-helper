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
exports.LineBreakText = void 0;
var material_1 = require("@mui/material");
var system_1 = require("@mui/system");
var react_1 = __importDefault(require("react"));
var LineBreakText = function (_a) {
    var text = _a.text, props = __rest(_a, ["text"]);
    return (react_1.default.createElement(system_1.Stack, { spacing: 3 },
        react_1.default.createElement(Text, __assign({ text: text }, props))));
};
exports.LineBreakText = LineBreakText;
var Text = function (_a) {
    var text = _a.text, props = __rest(_a, ["text"]);
    if (!text)
        return react_1.default.createElement(react_1.default.Fragment, null);
    if (typeof text === "string")
        return (react_1.default.createElement(material_1.Typography, __assign({}, props), text));
    return (react_1.default.createElement(system_1.Stack, null, text.map(function (str, i) {
        return react_1.default.createElement(Text, __assign({ key: i, text: str }, props));
    })));
};
//# sourceMappingURL=LineBreakText.js.map