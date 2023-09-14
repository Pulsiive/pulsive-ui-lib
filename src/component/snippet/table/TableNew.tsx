import React, {FunctionComponent, ReactNode, useEffect, useState} from "react";
import Pagination, {PaginationProps} from "../Pagination";
import TableNewRow from "./TableNewRow";
import TableNewHeadColumn, {TableNewHeadColumnProps} from "./TableNewHeadColumn";
import clsx from "clsx";
import TableNewColumn from "./TableNewColumn";

export type TableNewProps = {
    columns: TableNewHeadColumnProps[];
    children: React.ReactNode;
    pagination?: PaginationProps | number;
    onSort?: (field: string, reverseOrder?: boolean) => void;
    scrollX?: boolean;
    themeWhite?: boolean;
}

const TableNew: FunctionComponent<TableNewProps> = (props) => {
    const {columns, children, pagination, onSort, scrollX, themeWhite} = props;
    const [page, setPage] = useState(1);
    const [currentRows, setCurrentRows] = useState<React.ReactNode[]>([]);
    const [paginationProps, setPaginationProps] = useState<PaginationProps>();

    const rows = Array.isArray(children) ? children : [children];

    useEffect(() => {
        if (typeof pagination === "number") {
            setCurrentRows(rows.slice((page - 1) * pagination, page * pagination));
            setPaginationProps({page: page, pageCount: Math.ceil(rows.length / pagination), onClick: setPage});
        } else {
            setCurrentRows(rows);
            setPaginationProps(pagination);
        }
    }, [rows, pagination, page]);

    useEffect(() => {
        setPage(1);
    }, [rows.length]);

    return (
        <div className="table__wrapper">
            {(paginationProps && paginationProps.pageCount > 1) &&
            <Pagination {...paginationProps}/>
            }
            <div className={clsx("table__content", {"table__content--scroll-x": scrollX}, {"table__content--white": themeWhite})}>
                <table cellPadding="0" cellSpacing="0">
                    <thead>
                    <TableNewRow>
                        {columns.map((props, index) =>
                            <TableNewHeadColumn key={index} {...props} onSort={onSort}/>
                        )}
                    </TableNewRow>
                    </thead>
                    <tbody>
                    {currentRows.length > 0 ?
                        currentRows :
                        <TableNewRow>
                            {columns.map((props, index) =>
                                <TableNewColumn key={index} {...props}/>
                            )}
                        </TableNewRow>
                    }
                    </tbody>
                </table>
            </div>
            {(paginationProps && paginationProps.pageCount > 1) &&
            <Pagination {...paginationProps}/>
            }
        </div>
    );
}

export default TableNew;
