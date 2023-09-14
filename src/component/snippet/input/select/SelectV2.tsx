import React, {FunctionComponent, useEffect, useState} from "react";
import Select, {StylesConfig, Props as ReactSelectProps} from "react-select";
import {useTranslation} from "react-i18next";
import {Color} from "../../../../utils/color";
import {ClearIndicator, customTheme, DropdownIndicator, SelectOption, selectStyles} from "./commonSelect";
import {TranslationLibFile, TranslationLibKey} from "../../../../utils/locale";

type SelectV2Props = {
    name: string;
    options: SelectOption[];
    onChange: (newValue?: SelectOption) => void;
    value?: string | number;
    autoFocus?: boolean;
    disabled?: boolean;
    placeholder?: string;
    small?: boolean;
    maxMenuHeight?: number;
    isLoading?: boolean;
    reactSelectProps?: ReactSelectProps;
    clearable?: boolean;
};

const customStyles = (small?: boolean, clearable?: boolean): StylesConfig => ({
    ...selectStyles(small),
    indicatorSeparator: (base) => ({
        ...base,
        backgroundColor: Color.GREY,
        display: clearable ? 'block' : 'none'
    }),
});

const SelectV2: FunctionComponent<SelectV2Props> = (props) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);
    const [selectedOption, setSelectedOption] = useState<SelectOption>();
    const {
        name,
        options,
        value,
        placeholder,
        onChange,
        autoFocus,
        isLoading,
        disabled,
        reactSelectProps,
        small,
        maxMenuHeight,
        clearable = false,
    } = props;

    useEffect(() => {
        setSelectedOption(options.find(it => it.value === value));
    }, [value, options]);

    return (
        <Select
            name={name}
            inputId={name}
            isLoading={isLoading}
            autoFocus={autoFocus}
            isSearchable={false}
            isDisabled={disabled}
            isClearable={clearable}
            components={{ClearIndicator, DropdownIndicator}}
            options={options}
            onChange={(value: unknown | null) => onChange(value ? (value as SelectOption) : undefined)}
            placeholder={placeholder || t(TranslationLibKey.PLACEHOLDER_SELECT_DEFAULT)}
            value={selectedOption || null}
            maxMenuHeight={maxMenuHeight}
            styles={customStyles(small, clearable)}
            theme={customTheme}
            menuPortalTarget={document.querySelector('body')}
            {...reactSelectProps}
        />
    );
};

export default SelectV2;
