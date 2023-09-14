import numeral from "numeral";
import moment, {MomentInput} from "moment";

export enum FormatterFormat {
    DATE = "DD/MM/YYYY",
    DATE_INPUT = "YYYY-MM-DD",
    DATE_TIME = "DD/MM/YYYY HH:mm",
    DATE_TIME_INPUT = "YYYY-MM-DDTHH:mm",
}

export class Formatter {
    static formatNumber(value: number | undefined, format?: string): string {
        if (value === undefined) return "";
        return numeral(value).format(format || `0,0.[00]a`).toUpperCase();
    }

    static formatDate(value?: MomentInput, format?: string): string {
        format = format || FormatterFormat.DATE;
        return moment(value).format(format);
    }

    static formatUTCDate(value?: MomentInput, format?: string): string {
        format = format || FormatterFormat.DATE;
        return moment.utc(value).local().format(format);
    }
}
