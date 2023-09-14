import React, {FunctionComponent} from "react";
import clsx from "clsx";

type TableNewRowProps = {
    children: React.ReactNode;
    onClick?: ((e: React.MouseEvent) => void) | { link: string };
}

const TableNewRow: FunctionComponent<TableNewRowProps> = ({children, onClick}) => {
    const columns = Array.isArray(children) ? children : [children];

    return (
        <tr className={clsx("table__row", {"table__row--clickable": !!onClick})}>
            {columns.map((column, index) =>
                onClick ? React.cloneElement(column, {key: index, onClick: onClick}) : column
            )}
        </tr>
    );
}

export default TableNewRow;
