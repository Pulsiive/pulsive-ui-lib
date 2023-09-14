import React, {ChangeEvent, FunctionComponent, useEffect, useState} from "react";
import clsx from "clsx";
import {onKeyEnter} from "../../../utils/helper";
import IconTooltip from "../IconTooltip";
import {TranslationLibFile, TranslationLibKey} from "../../../utils/locale";
import {useTranslation} from "react-i18next";
import InputText from "../input/InputText";

export type SearchBarClearableProps = {
    value?: string;
    onSubmit: (query: string) => void;
    placeholder?: string;
    cssClass?: string;
    small?: boolean;
};

const SearchBarClearable: FunctionComponent<SearchBarClearableProps> = ({value, onSubmit, placeholder, cssClass, small}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);
    const [query, setQuery] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let {value} = e.currentTarget;
        setQuery(value);
    };

    const handleClear = () => {
        setQuery("");
        onSubmit("");
    };

    useEffect(() => {
        setQuery(value || "");
    }, [value]);

    return (
        <div className={clsx("search-bar-clearable", cssClass)}>
            <InputText
                name={"query"}
                value={query}
                placeholder={placeholder}
                onChange={handleChange}
                onKeyDown={(e) => onKeyEnter(e, () => onSubmit(query))}
                small={small}/>
            <div className="search-bar-clearable__actions">
                {query &&
                <IconTooltip icon={{name: "close", outlined: true, onClick: handleClear, cssClass: "search-bar-clearable__actions__action__icon"}}
                             text={t(TranslationLibKey.ACTION_CLEAR_SEARCH)}
                             cssClass={"search-bar-clearable__actions__action"}
                />
                }
                <span className="search-bar-clearable__actions__separator"/>
                <IconTooltip icon={{name: "search", onClick: () => onSubmit(query), cssClass: "search-bar-clearable__actions__action__icon"}}
                             text={t(TranslationLibKey.ACTION_SEARCH)}
                             cssClass={"search-bar-clearable__actions__action"}
                />
            </div>
        </div>
    );
};

export default SearchBarClearable;
