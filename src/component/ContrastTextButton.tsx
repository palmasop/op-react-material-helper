import {Button, ButtonProps, darken} from '@mui/material';
import {styled} from '@mui/system';
import React from "react";

type BaseProps = {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success';
};

export type ContrastTextButtonProps<T extends React.ElementType = React.ElementType> =
    BaseProps & ButtonProps<T> & React.ComponentProps<T>;

export const ContrastTextButton =
    styled(Button)<ContrastTextButtonProps>(({theme, color = 'primary'}) =>
        ({
            backgroundColor: theme.palette[color].main,
            color: theme.palette[color].contrastText,
            '&:hover': {
                backgroundColor: darken(theme.palette[color].main, .05),
            }
        }));