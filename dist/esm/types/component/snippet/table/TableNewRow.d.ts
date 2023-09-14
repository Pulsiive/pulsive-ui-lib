import React, { FunctionComponent } from "react";
declare type TableNewRowProps = {
    children: React.ReactNode;
    onClick?: ((e: React.MouseEvent) => void) | {
        link: string;
    };
};
declare const TableNewRow: FunctionComponent<TableNewRowProps>;
export default TableNewRow;
