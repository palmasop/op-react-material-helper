export const sleep = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

export function compareValue(a: any, b: any, oper: string): boolean {
    switch (oper) {
        case "<":
            return a < b;
        case ">":
            return a > b;
        case "<=":
            return a <= b;
        case ">=":
            return a >= b;
        case "===":
            return a === b;
        case "!==":
            return a !== b;
        default:
            throw new Error(`Invalid operator: ${oper}`);
    }
}
