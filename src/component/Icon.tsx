import * as icons from "@mui/icons-material";
import {alpha, Icon, SvgIconOwnProps, Theme, useTheme} from "@mui/material";
import React from "react";

export type MUIIconProps = {
    name: string; // Name of the icon to be displayed.
    color?: string | ((theme: Theme) => string),
} & Omit<React.ComponentProps<typeof Icon>, "color">;

export const MUIIcon = ({name, color, ...props}: MUIIconProps) => {
    const theme = useTheme();
    const iconComponent = icons[name as keyof typeof icons] ?? icons['Error'];
    const resolvedColor = typeof color === 'function' ? color(theme) : color;
    const iconProps: SvgIconOwnProps = {...props, sx: {color: resolvedColor ?? theme.palette.text.primary, ...props.sx}};
    return <Icon
        component={iconComponent}
        {...iconProps}
    />
};

export type ButtonIconProps = MUIIconProps & {
    onClick?: () => void,
    hoverColor?: string | ((theme: Theme) => string),
}

export const ButtonIcon: React.FC<ButtonIconProps> =
    ({
         onClick,
         color,
         hoverColor,
         ...props
     }) => {
        const theme = useTheme();
        const resolvedColor = typeof color === 'function' ? color(theme) : color;
        const resolvedHoverColor = typeof hoverColor === 'function' ? hoverColor(theme) : hoverColor;

        return (
            <MUIIcon
                onClick={onClick}
                tabIndex={0}
                color={resolvedColor ?? theme.palette.text.primary}
                {...props}
                sx={{
                    "&:hover": {
                        color: resolvedHoverColor,
                        cursor: "pointer",
                    },
                    ...props.sx
                }}
            />
        );
    }
