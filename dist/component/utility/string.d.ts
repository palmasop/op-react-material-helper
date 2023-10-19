export declare const padNumber: (num: number, len?: number) => string;
export declare const getSpacedFromCamel: (str: string) => string;
export declare const getSpacedFromCamel_Cap: (str: string) => string;
export declare const getCamelFromSpaced: (str: string) => string;
export declare const getCamelFromSpaced_Low: (str: string) => string;
export declare const replaceBraces: (str: string | undefined, replace: string) => string | undefined;
export declare const replaceBracesByObj: (str: string | undefined, obj: {
    [key: string]: string;
}) => string | undefined;
export declare const spaceStrToArray: (str: string) => string;
export declare const isValidEmail: (str: string) => RegExpMatchArray | null;
