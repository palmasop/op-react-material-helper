import { darken, useTheme } from "@mui/material";

type Palette = {
    [key: string]: {
        [key: string]: string;
    };
}

export const useDarken = () => {
    const palette = (useTheme().palette as unknown) as Palette;

    const getDarken = (color: string, amount: number) => {
        let resolvedColor = color;

        if (color.includes(".")) {
            const arr = color.split(".");
            const a = arr[0];
            const b = arr[1];

            if (!!palette[a] && typeof palette[a][b] === "string") {
                resolvedColor = palette[a][b];
            }
        }

        return darken(resolvedColor, amount);
    };

    return getDarken;
};
