import React, {FunctionComponent} from "react";
import Button, {ButtonSize, ButtonStyle} from "./Button";
import Tooltip from "./Tooltip";
import {useTranslation} from "react-i18next";
import {TranslationLibFile} from "../../utils/locale";

export type PaginationProps = {
    page: number;
    pageCount: number;
    onClick: (page: number) => void;
};

const Pagination: FunctionComponent<PaginationProps> = ({page, pageCount, onClick}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    if (pageCount < 2) return <></>;

    return (
        <div className="pagination">
            <Tooltip text={t("pagination.first")}>
                <Button
                    cssClass="pagination__button"
                    size={ButtonSize.SMALL}
                    style={ButtonStyle.DEFAULT_MIDNIGHT_LIGHT}
                    disabled={page === 1}
                    onClick={() => onClick(1)}
                    icon={{name: "first_page"}}/>
            </Tooltip>
            <Tooltip text={t("pagination.previous")}>
                <Button
                    cssClass="pagination__button"
                    size={ButtonSize.SMALL}
                    style={ButtonStyle.DEFAULT_MIDNIGHT_LIGHT}
                    disabled={page === 1}
                    onClick={() => onClick(page - 1)}
                    icon={{name: "chevron_left"}}/>
            </Tooltip>
            <span className="pagination__label">
                {page}/{pageCount}
            </span>
            <Tooltip text={t("pagination.next")}>
                <Button
                    cssClass="pagination__button"
                    size={ButtonSize.SMALL}
                    style={ButtonStyle.DEFAULT_MIDNIGHT_LIGHT}
                    disabled={page === pageCount}
                    onClick={() => onClick(page + 1)}
                    icon={{name: "chevron_right"}}/>
            </Tooltip>
            <Tooltip text={t("pagination.last")}>
                <Button
                    cssClass="pagination__button"
                    size={ButtonSize.SMALL}
                    style={ButtonStyle.DEFAULT_MIDNIGHT_LIGHT}
                    disabled={page === pageCount}
                    onClick={() => onClick(pageCount)}
                    icon={{name: "last_page"}}/>
            </Tooltip>
        </div>
    );
};

export default Pagination;
