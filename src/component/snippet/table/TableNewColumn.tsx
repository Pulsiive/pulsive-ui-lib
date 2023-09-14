import React, {FunctionComponent} from "react";
import clsx from "clsx";
import {useHistory} from "react-router-dom";
import {onClickLink} from "../../../utils/helper";

export enum TableNewColumnStyle {
    ALIGN_CENTER = "table__column--align-center",
    ALIGN_RIGHT = "table__column--align-right",

    CLICKABLE = "table__column--clickable",
    FIXED_WIDTH = "table__column--fixed-width",
    HIGHLIGHTED = "table__column--highlighted",
    NOWRAP = "table__column--nowrap",

    HIDE_SCREEN_LARGE = "table__column--hide-screen-large",
    HIDE_SCREEN_MEDIUM = "table__column--hide-screen-medium",
    HIDE_SCREEN_SMALL = "table__column--hide-screen-small",

    NO_VERTICAL_PADDING = "table__column--no-vertical-padding",
}

export type TableNewColumnProps = {
    children?: React.ReactNode;
    onClick?: ((e: React.MouseEvent) => void) | { link: string };
    styles?: TableNewColumnStyle | TableNewColumnStyle[];
    colSpan?: number;
}

const TableNewColumn: FunctionComponent<TableNewColumnProps> = (props) => {
    const history = useHistory();
    const {
        children,
        onClick,
        styles,
        colSpan,
    } = props;

    return (
        <td className={clsx("table__column", {[TableNewColumnStyle.CLICKABLE]: onClick}, styles)} onClick={typeof onClick === "object" ? (e: any) => onClickLink(e, onClick.link, history) : onClick} colSpan={colSpan}>
            <div className={clsx("table__column__content")}>
                {children}
            </div>
        </td>
    );
}

export default TableNewColumn;
