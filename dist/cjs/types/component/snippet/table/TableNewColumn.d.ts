import React, { FunctionComponent } from "react";
export declare enum TableNewColumnStyle {
    ALIGN_CENTER = "table__column--align-center",
    ALIGN_RIGHT = "table__column--align-right",
    CLICKABLE = "table__column--clickable",
    FIXED_WIDTH = "table__column--fixed-width",
    HIGHLIGHTED = "table__column--highlighted",
    NOWRAP = "table__column--nowrap",
    HIDE_SCREEN_LARGE = "table__column--hide-screen-large",
    HIDE_SCREEN_MEDIUM = "table__column--hide-screen-medium",
    HIDE_SCREEN_SMALL = "table__column--hide-screen-small",
    NO_VERTICAL_PADDING = "table__column--no-vertical-padding"
}
export declare type TableNewColumnProps = {
    children?: React.ReactNode;
    onClick?: ((e: React.MouseEvent) => void) | {
        link: string;
    };
    styles?: TableNewColumnStyle | TableNewColumnStyle[];
    colSpan?: number;
};
declare const TableNewColumn: FunctionComponent<TableNewColumnProps>;
export default TableNewColumn;
