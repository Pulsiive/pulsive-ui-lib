import { History } from "history";
import React from "react";
export declare function capitalize(str: string): string;
export declare function isValidUrl(url: string): boolean;
export declare const onClickLink: (e: React.MouseEvent, path: string, history?: History<unknown> | undefined) => void;
export declare function onKeyEnter(e: any, cb: () => void): void;
export declare function sortItems(items: any[], field: string, reverseOrder?: boolean): any[];
