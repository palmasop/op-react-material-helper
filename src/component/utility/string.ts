export const padNumber = (num: number, len: number = 9): string =>
    num.toString().padStart(len, "0");

export const getSpacedFromCamel = (str: string): string =>
    str.replace(/([A-Z])/g, " $1");

export const getSpacedFromCamel_Cap = (str: string): string =>
    getSpacedFromCamel(str.charAt(0).toUpperCase() + str.slice(1));

export const getCamelFromSpaced = (str: string): string =>
    str.replace(/\s(\w)/g, (_, letter) => letter.toUpperCase());

export const getCamelFromSpaced_Low = (str: string): string =>
    getCamelFromSpaced(str.toLowerCase());

export const replaceBraces = (str: string | undefined, replace: string): string | undefined =>
    str?.replace(/{([^}]+)}/g, (match, key) => replace);

export const replaceBracesByObj = (str: string | undefined, obj: { [key: string]: string }): string | undefined =>
    str?.replace(/{([^}]+)}/g, (match, key) => obj[key]);

export const spaceStrToArray = (str: string): string =>
    str.trim().split(" ").map((a) => `"${a}"`).join(",");

export const isValidEmail = (str: string): RegExpMatchArray | null =>
    str.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
