import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { MUIIconProps } from './Icon';
export type ListProps = {
    list?: string[];
    spacing?: number;
    iconProps?: MUIIconProps;
    textProps?: React.ComponentProps<typeof Typography>;
    containerProps?: React.ComponentProps<typeof Stack>;
    color?: string;
    dotColor?: string;
    dotSize?: number;
    dot?: React.ReactNode;
    textRender?: (text: string) => React.ReactNode;
};
export declare const List: ({ list, spacing, iconProps, textProps, color, dotColor, dotSize, dot, containerProps, textRender }: ListProps) => React.JSX.Element;
