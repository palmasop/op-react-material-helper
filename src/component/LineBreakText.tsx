import {Typography} from "@mui/material"
import {Stack} from "@mui/system"
import React from "react";
import {AnyDimArr} from "../utility";

export type LineBreakTextProps = {
    text: AnyDimArr<string>;
} & React.ComponentProps<typeof Typography>;

export const LineBreakText: React.FC<LineBreakTextProps> = ({text, ...props}) => {
    return (
        <Stack spacing={3}>
            <Text text={text} {...props} />
        </Stack>
    )
}

const Text = ({text, ...props}: LineBreakTextProps) => {
    if (!text)
        return <></>;

    if (typeof text === "string")
        return (
            <Typography {...props} >
                {text}
            </Typography>
        )

    return (
        <Stack>
            {text.map((str, i) =>
                <Text key={i} text={str} {...props} />
            )}
        </Stack>
    )
}
