import { MomentInput } from "moment";
export declare enum FormatterFormat {
    DATE = "DD/MM/YYYY",
    DATE_INPUT = "YYYY-MM-DD",
    DATE_TIME = "DD/MM/YYYY HH:mm",
    DATE_TIME_INPUT = "YYYY-MM-DDTHH:mm"
}
export declare class Formatter {
    static formatNumber(value: number | undefined, format?: string): string;
    static formatDate(value?: MomentInput, format?: string): string;
    static formatUTCDate(value?: MomentInput, format?: string): string;
}
