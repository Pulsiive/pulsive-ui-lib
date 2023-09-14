import React, { FunctionComponent } from "react";
import { PaginationProps } from "../Pagination";
import { TableNewHeadColumnProps } from "./TableNewHeadColumn";
export declare type TableNewProps = {
    columns: TableNewHeadColumnProps[];
    children: React.ReactNode;
    pagination?: PaginationProps | number;
    onSort?: (field: string, reverseOrder?: boolean) => void;
    scrollX?: boolean;
    themeWhite?: boolean;
};
declare const TableNew: FunctionComponent<TableNewProps>;
export default TableNew;
