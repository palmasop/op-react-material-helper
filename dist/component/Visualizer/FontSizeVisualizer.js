"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontSizeVisualizer = void 0;
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var system_1 = require("@mui/system");
var FontSizeVisualizer = function () {
    return (react_1.default.createElement(material_1.Container, null,
        react_1.default.createElement(material_1.Stack, { direction: "row", mt: 8, mb: 8 },
            react_1.default.createElement(material_1.Stack, { spacing: 6, flex: 2 },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(material_1.Typography, { variant: "h1" }, "This is H1"),
                    react_1.default.createElement(material_1.Typography, { variant: "body1", style: { marginTop: '8px' } }, "Sample text for H1. This is a longer description to provide more context and visualization."),
                    react_1.default.createElement(material_1.Typography, { variant: "body2", style: { marginTop: '6px' } }, "Further details or annotations related to H1.")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(material_1.Typography, { variant: "h2" }, "This is H2"),
                    react_1.default.createElement(material_1.Typography, { variant: "body1", style: { marginTop: '8px' } }, "Sample text for H2. Descriptions help in understanding the font size context."),
                    react_1.default.createElement(material_1.Typography, { variant: "body2", style: { marginTop: '6px' } }, "Annotations for H2.")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(material_1.Typography, { variant: "h3" }, "This is H3"),
                    react_1.default.createElement(material_1.Typography, { variant: "body1", style: { marginTop: '8px' } }, "Sample text for H3. Demonstrating how this header might be used in context."),
                    react_1.default.createElement(material_1.Typography, { variant: "body2", style: { marginTop: '6px' } }, "Further annotations or descriptions for H3.")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(material_1.Typography, { variant: "h4" }, "This is H4"),
                    react_1.default.createElement(material_1.Typography, { variant: "body1", style: { marginTop: '8px' } }, "Sample text for H4. Useful for understanding its potential application."),
                    react_1.default.createElement(material_1.Typography, { variant: "body2", style: { marginTop: '6px' } }, "Annotations pertaining to H4.")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(material_1.Typography, { variant: "h5" }, "This is H5"),
                    react_1.default.createElement(material_1.Typography, { variant: "body1", style: { marginTop: '8px' } }, "Sample text for H5. Displaying it within a realistic content scenario."),
                    react_1.default.createElement(material_1.Typography, { variant: "body2", style: { marginTop: '6px' } }, "Additional notes or context for H5.")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(material_1.Typography, { variant: "h6" }, "This is H6"),
                    react_1.default.createElement(material_1.Typography, { variant: "body1", style: { marginTop: '8px' } }, "Sample text for H6. Showcasing how this might be used in actual content."),
                    react_1.default.createElement(material_1.Typography, { variant: "body2", style: { marginTop: '6px' } }, "Descriptions or details related to H6."))),
            react_1.default.createElement(material_1.Stack, { spacing: 6, flex: 1 },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(material_1.Typography, { variant: "overline" }, "Overline Section"),
                    react_1.default.createElement(material_1.Typography, { variant: "body1", style: { marginTop: '8px' } }, "Highlighting our top stories of the month.")),
                react_1.default.createElement(system_1.Box, { mt: 3 },
                    react_1.default.createElement(material_1.Button, { variant: "contained", color: "primary" },
                        react_1.default.createElement(material_1.Typography, { variant: "button" }, "Button"))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(material_1.Typography, { variant: "caption" }, "Caption Section: October 10, 2023")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(material_1.Typography, { variant: "subtitle1", style: { fontWeight: '500' } }, "This is Subtitle 1"),
                    " ",
                    react_1.default.createElement(material_1.Typography, { variant: "body1", style: { marginTop: '8px' } }, "Sample text for Subtitle 1. A brief description can be valuable."),
                    react_1.default.createElement(material_1.Typography, { variant: "body2", style: { marginTop: '6px' } }, "Further notes on Subtitle 1.")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(material_1.Typography, { variant: "subtitle2" }, "This is Subtitle 2"),
                    react_1.default.createElement(material_1.Typography, { variant: "body1", style: { marginTop: '8px' } }, "Description for Subtitle 2. Contextual information can be beneficial."),
                    react_1.default.createElement(material_1.Typography, { variant: "body2", style: { marginTop: '6px' } }, "Additional notes for Subtitle 2."))))));
};
exports.FontSizeVisualizer = FontSizeVisualizer;
//# sourceMappingURL=FontSizeVisualizer.js.map