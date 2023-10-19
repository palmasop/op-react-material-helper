import { Typography } from "@mui/material";
import React from "react";
import { AnyDimArr } from "../utility";
export type LineBreakTextProps = {
    text: AnyDimArr<string>;
} & React.ComponentProps<typeof Typography>;
export declare const LineBreakText: React.FC<LineBreakTextProps>;
