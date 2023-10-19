import { Icon, Theme } from "@mui/material";
import React from "react";
export type MUIIconProps = {
    name: string;
    color?: string | ((theme: Theme) => string);
} & Omit<React.ComponentProps<typeof Icon>, "color">;
export declare const MUIIcon: ({ name, color, ...props }: MUIIconProps) => React.JSX.Element;
export type ButtonIconProps = MUIIconProps & {
    onClick?: () => void;
    hoverColor?: string | ((theme: Theme) => string);
};
export declare const ButtonIcon: React.FC<ButtonIconProps>;
