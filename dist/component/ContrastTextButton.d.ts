import { ButtonProps } from '@mui/material';
import React from "react";
type BaseProps = {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success';
};
export type ContrastTextButtonProps<T extends React.ElementType = React.ElementType> = BaseProps & ButtonProps<T> & React.ComponentProps<T>;
export declare const ContrastTextButton: import("@emotion/styled").StyledComponent<any, {}, {}>;
export {};
