export const isBrowserDefaultDark = (): boolean =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

export const getDarkerColor = (hexColor: string, percentage: number): string => {
    if (hexColor[0] !== "#") return hexColor;

    hexColor = hexColor.replace("#", "");

    if (hexColor.length === 3) {
        hexColor = hexColor
            .split("")
            .map((char) => char + char)
            .join("");
    }

    const r = parseInt(hexColor.substr(0, 2), 16);
    const g = parseInt(hexColor.substr(2, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);
    const darkR = Math.floor(r * (1 - percentage));
    const darkG = Math.floor(g * (1 - percentage));
    const darkB = Math.floor(b * (1 - percentage));

    return "#" + (darkR * 65536 + darkG * 256 + darkB)
        .toString(16)
        .padStart(6, "0");
};
