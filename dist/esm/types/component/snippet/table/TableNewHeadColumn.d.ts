import React, { FunctionComponent } from "react";
import { TableNewColumnStyle } from "./TableNewColumn";
export declare type TableNewHeadColumnProps = {
    label?: string | React.ReactNode;
    width?: number;
    styles?: TableNewColumnStyle | TableNewColumnStyle[];
    sort?: {
        field: string;
        reverseOrder?: boolean;
    };
    onSort?: (field: string, reverseOrder?: boolean) => void;
};
declare const TableNewHeadColumn: FunctionComponent<TableNewHeadColumnProps>;
export default TableNewHeadColumn;
