"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorPaletteVisualizer = void 0;
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var system_1 = require("@mui/system");
var ColorBlock = function (_a) {
    var colorName = _a.colorName, colorData = _a.colorData, width = _a.width, _b = _a.height, height = _b === void 0 ? 1 : _b;
    return (react_1.default.createElement(system_1.Box, { width: width, height: height, bgcolor: colorData.main, p: 1, m: 0.5, display: "flex", flexDirection: "column", justifyContent: "space-between" },
        react_1.default.createElement(material_1.Typography, { variant: "body2", style: { color: colorData.contrastText } }, colorName),
        react_1.default.createElement(material_1.Typography, { variant: "caption", style: { color: colorData.contrastText } }, colorData.main)));
};
var ColorPaletteVisualizer = function () {
    var theme = (0, material_1.useTheme)();
    return (react_1.default.createElement(system_1.Stack, { spacing: 5, flex: 1, m: 4, mt: 8, mb: 8 },
        react_1.default.createElement(system_1.Stack, { direction: "row", flex: 1, spacing: 5 },
            react_1.default.createElement(ColorBlock, { colorName: 'Primary', colorData: theme.palette.primary, width: "50%" }),
            react_1.default.createElement(ColorBlock, { colorName: 'Secondary', colorData: theme.palette.secondary, width: "35%" }),
            react_1.default.createElement(ColorBlock, { colorName: 'Background Paper', colorData: {
                    main: theme.palette.background.paper,
                }, width: "20%" })),
        react_1.default.createElement(system_1.Stack, { direction: "row", flex: 1, spacing: 5 },
            react_1.default.createElement(system_1.Stack, { direction: "row", p: 2, flex: 4, spacing: 4 },
                react_1.default.createElement(system_1.Box, { flex: 1, bgcolor: theme.palette.background.paper },
                    react_1.default.createElement(system_1.Stack, { spacing: 2, p: 2, pr: 0 },
                        react_1.default.createElement(ColorBlock, { colorName: 'Info', colorData: theme.palette.info, width: 1 }),
                        react_1.default.createElement(ColorBlock, { colorName: 'Success', colorData: theme.palette.success, width: 1 }),
                        react_1.default.createElement(ColorBlock, { colorName: 'Warning', colorData: theme.palette.warning, width: 1 }),
                        react_1.default.createElement(ColorBlock, { colorName: 'Error', colorData: theme.palette.error, width: 1 }))),
                react_1.default.createElement(system_1.Box, { flex: 1, p: 2, bgcolor: theme.palette.background.paper },
                    react_1.default.createElement(system_1.Box, { flex: 1, bgcolor: theme.palette.secondary.main },
                        react_1.default.createElement(system_1.Stack, { spacing: 2, p: 2, pr: 0 },
                            react_1.default.createElement(ColorBlock, { colorName: 'Info', colorData: theme.palette.info, width: 1 }),
                            react_1.default.createElement(ColorBlock, { colorName: 'Success', colorData: theme.palette.success, width: 1 }),
                            react_1.default.createElement(ColorBlock, { colorName: 'Warning', colorData: theme.palette.warning, width: 1 }),
                            react_1.default.createElement(ColorBlock, { colorName: 'Error', colorData: theme.palette.error, width: 1 }))))),
            react_1.default.createElement(system_1.Box, { flex: 2, bgcolor: theme.palette.background.paper, p: 2 },
                react_1.default.createElement(ColorBlock, { colorName: 'Secondary', colorData: theme.palette.secondary, width: 1 })),
            react_1.default.createElement(system_1.Box, { flex: 4, bgcolor: theme.palette.background.paper, p: 2 },
                react_1.default.createElement(ColorBlock, { colorName: 'Primary', colorData: theme.palette.primary, width: 1 })))));
};
exports.ColorPaletteVisualizer = ColorPaletteVisualizer;
//# sourceMappingURL=ColorPaletteVisualizer.js.map