import React from 'react';
export type LineT = {
    width: number | string;
    height: number | string;
    color?: string;
    fade?: boolean;
    fadeDir?: string;
    gradient?: {
        to?: string;
        color?: string[];
    };
    radius?: number;
};
export declare const Line: ({ width, height, color, fade, fadeDir, radius, gradient, ...props }: LineT & any) => React.JSX.Element;
