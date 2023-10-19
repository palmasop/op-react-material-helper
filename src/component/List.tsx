import {Typography} from '@mui/material'
import {Stack} from '@mui/system'
import React from 'react'
import {MUIIcon, MUIIconProps} from './Icon'

export type ListProps = {
    list?: string[],
    spacing?: number
    iconProps?: MUIIconProps,
    textProps?: React.ComponentProps<typeof Typography>,
    containerProps?: React.ComponentProps<typeof Stack>,
    color?: string,
    dotColor?: string,
    dotSize?: number,
    dot?: React.ReactNode,
    textRender?: (text: string) => React.ReactNode,
}

export const List = ({
                         list,
                         spacing,
                         iconProps,
                         textProps,
                         color = "text.primary",
                         dotColor = "text.primary",
                         dotSize = 8,
                         dot,
                         containerProps,
                         textRender
                     }: ListProps) => {

    const defaultIconStyles = {
        fontSize: dotSize,
        color: dotColor ?? color,
        ...iconProps?.sx
    };

    return (
        <Stack spacing={spacing ?? 1.5} {...containerProps}>
            {list?.map((item, i) =>
                <Stack key={i} direction="row" alignItems="center" spacing={1}>
                    {dot ?? <MUIIcon name="FiberManualRecord" {...iconProps} sx={defaultIconStyles}/>}
                    {textRender ? textRender(item) :
                        <Typography color={color} variant="inherit" {...textProps}>{item}</Typography>
                    }
                </Stack>
            )}
        </Stack>
    )
}
