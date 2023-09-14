import React, {FunctionComponent, useState} from "react";
import clsx from "clsx";
import {TableNewColumnStyle} from "./TableNewColumn";
import IconTooltip from "../IconTooltip";
import {useTranslation} from "react-i18next";
import {TranslationLibFile, TranslationLibKey} from "../../../utils/locale";

export type TableNewHeadColumnProps = {
    label?: string | React.ReactNode;
    width?: number;
    styles?: TableNewColumnStyle | TableNewColumnStyle[];
    sort?: { field: string, reverseOrder?: boolean };
    onSort?: (field: string, reverseOrder?: boolean) => void;
}

const TableNewHeadColumn: FunctionComponent<TableNewHeadColumnProps> = ({label, width, styles, sort, onSort}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);
    const [isReverseSortOrder, setReverseSortOrder] = useState<boolean>(sort?.reverseOrder !== undefined ? sort.reverseOrder : true);

    const handleSort = (isReverse: boolean) => {
        onSort!(sort!.field, isReverse);
        setReverseSortOrder(isReverse);
    };

    return (
        <th className={clsx("table__column", styles)} style={{width: width && `${width}%`}}>
            <div className={"table__column__content"}>
                <span>{label}</span>
                {(sort && onSort) &&
                <IconTooltip icon={{name: "swap_vert"}}
                             text={t(TranslationLibKey.ACTION_SORT_BY, {label: label})}
                             cssClass={clsx("table__sort-button", {"table__sort-button--reverse": !isReverseSortOrder})}
                             onClick={() => handleSort(!isReverseSortOrder)}
                />
                }
            </div>
        </th>
    );
}

export default TableNewHeadColumn;
