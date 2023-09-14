import React, {ChangeEvent, FunctionComponent, useEffect, useState} from "react";
import clsx from "clsx";
import Icon from "../Icon";
import InputText from "../input/InputText";

export type SearchBarProps = {
    value?: string;
    onChange: (query: string) => void;
    placeholder?: string;
    cssClass?: string;
    small?: boolean;
};

const SearchBar: FunctionComponent<SearchBarProps> = ({
    value,
    onChange,
    placeholder,
    cssClass,
    small
}) => {
    const [query, setQuery] = useState<string>("");

    const onChangeValue = ({target}: ChangeEvent<HTMLInputElement>) => {
        const value = target.value;
        setQuery(value);
        onChange(value);
    };

    useEffect(() => {
        setQuery(value || "");
    }, [value]);

    return (
        <div className={clsx("search-bar", cssClass)}>
            <InputText
                name={"query"}
                value={query}
                placeholder={placeholder}
                onChange={onChangeValue}
                small={small}
                autoComplete={"off"}/>
            <Icon name="search" />
        </div>
    );
};

export default SearchBar;
