import React, {FunctionComponent} from "react";
import TableNewColumn, {TableNewColumnProps} from "./TableNewColumn";

export type TableNewActionColumnProps = TableNewColumnProps & {
    children?: React.ReactNode;
}

const TableNewActionColumn: FunctionComponent<TableNewActionColumnProps> = (props) => {
    const {children} = props;
    const actions = Array.isArray(children) ? children : [children];

    return (
        <TableNewColumn {...props} onClick={undefined}>
            {actions.map((action, index) =>
                (action && <span className="table__action-button" key={index}>{action}</span>)
            )}
        </TableNewColumn>
    );
}

export default TableNewActionColumn;
