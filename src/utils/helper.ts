import {History} from "history";
import React from "react";

export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isValidUrl(url: string): boolean {
    const URL_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/g;
    return new RegExp(URL_REGEX).test(url);
}

export const onClickLink = (e: React.MouseEvent, path: string, history?: History) => {
    if (e.ctrlKey || e.metaKey) {
        window.open(path, "_blank");
    } else if (history) {
        history.push(path);
    } else {
        window.open(path, "_top");
    }
};

export function onKeyEnter(e: any, cb: () => void): void {
    const isKeyEnter = e.key === 'Enter';
    if (isKeyEnter) cb();
}

function sortString(a: string, b: string, reverseOrder: boolean): number {
    return (reverseOrder ? a > b : b > a) ? 1 : -1;
}

function sortNumber(a: number, b: number, reverseOrder: boolean): number {
    return reverseOrder ? a - b : b - a;
}

export function sortItems(items: any[], field: string, reverseOrder: boolean = false): any[] {
    return [...items].sort((a, b) => {
        const isTypeNumber =
            typeof a[field] === "number" && typeof b[field] === "number";

        return isTypeNumber
            ? sortNumber(a[field], b[field], reverseOrder)
            : sortString(a[field].toLowerCase(), b[field].toLowerCase(), reverseOrder);
    });
}
