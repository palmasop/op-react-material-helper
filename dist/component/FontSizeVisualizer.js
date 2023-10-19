"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontSizeVisualizer = void 0;
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var FontSizeVisualizer = function () {
    return (react_1.default.createElement(material_1.Stack, { spacing: 2 },
        react_1.default.createElement(material_1.Typography, { variant: "h1" }, "This is H1"),
        react_1.default.createElement(material_1.Stack, { spacing: 1 },
            react_1.default.createElement(material_1.Typography, { variant: "body2" }, "Body text under H1")),
        react_1.default.createElement(material_1.Typography, { variant: "h2" }, "This is H2"),
        react_1.default.createElement(material_1.Stack, { spacing: 1 },
            react_1.default.createElement(material_1.Typography, { variant: "body2" }, "Body text under H2")),
        react_1.default.createElement(material_1.Typography, { variant: "h3" }, "This is H3"),
        react_1.default.createElement(material_1.Stack, { spacing: 1 },
            react_1.default.createElement(material_1.Typography, { variant: "body2" }, "Body text under H3")),
        react_1.default.createElement(material_1.Typography, { variant: "h4" }, "This is H4"),
        react_1.default.createElement(material_1.Stack, { spacing: 1 },
            react_1.default.createElement(material_1.Typography, { variant: "body2" }, "Body text under H4")),
        react_1.default.createElement(material_1.Typography, { variant: "h5" }, "This is H5"),
        react_1.default.createElement(material_1.Stack, { spacing: 1 },
            react_1.default.createElement(material_1.Typography, { variant: "body2" }, "Body text under H5")),
        react_1.default.createElement(material_1.Typography, { variant: "h6" }, "This is H6"),
        react_1.default.createElement(material_1.Stack, { spacing: 1 },
            react_1.default.createElement(material_1.Typography, { variant: "body2" }, "Body text under H6")),
        react_1.default.createElement(material_1.Typography, { variant: "subtitle1" }, "This is Subtitle 1"),
        react_1.default.createElement(material_1.Stack, { spacing: 1 },
            react_1.default.createElement(material_1.Typography, { variant: "body1" }, "Body text under Subtitle 1")),
        react_1.default.createElement(material_1.Typography, { variant: "subtitle2" }, "This is Subtitle 2"),
        react_1.default.createElement(material_1.Stack, { spacing: 1 },
            react_1.default.createElement(material_1.Typography, { variant: "body1" }, "Body text under Subtitle 2"))));
};
exports.FontSizeVisualizer = FontSizeVisualizer;
//# sourceMappingURL=FontSizeVisualizer.js.map