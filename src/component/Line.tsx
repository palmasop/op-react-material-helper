import {alpha, Box} from '@mui/system'
import React from 'react'

export type LineT = {
    width: number | string,
    height: number | string,
    color?: string,
    fade?: boolean,
    fadeDir?: string,
    gradient?: {
        to?: string,
        color?: string[],
    },
    radius?: number,
}

export const Line = ({width, height, color, fade, fadeDir, radius, gradient, ...props}: LineT & any) => {
    const gradientColor =
        gradient ? `linear-gradient(${gradient.to ?? "to right"}, ${gradient.color.join(",")})` :
            fade ? `linear-gradient(${fadeDir ?? "to right"}, ${color}, ${alpha(color, 0)})` :
                null;

    return (
        <Box
            width={width}
            height={height}
            borderRadius={radius ?? 15}
            {...props}
            sx={{
                background: gradientColor ?? color ?? "primary.main",
                ...props?.sx,
            }}
        />
    )
}