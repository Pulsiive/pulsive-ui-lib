import React, {FunctionComponent, useEffect, useState} from "react";
import Select, {OptionsOrGroups, StylesConfig, Props as ReactSelectProps, GroupBase} from "react-select";
import {useTranslation} from "react-i18next";
import {ClearIndicator, customTheme, DropdownIndicator, getSelectedOption, SelectOption, selectStyles} from "./commonSelect";
import {TranslationLibFile, TranslationLibKey} from "../../../../utils/locale";

type SelectMultipleProps = {
    name: string;
    options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;
    onChange: (newValue: SelectOption[]) => void;
    values?: (string | number)[];
    autoFocus?: boolean;
    disabled?: boolean;
    placeholder?: string;
    small?: boolean;
    maxMenuHeight?: number;
    hideSelectedOptions?: boolean;
    isLoading?: boolean;
    isSearchable?: boolean;
    isExpandable?: boolean;
    reactSelectProps?: ReactSelectProps;
};

const customStyles = (small?: boolean, isExpandable?: boolean): StylesConfig => ({...selectStyles(small, isExpandable)});

const SelectMultiple: FunctionComponent<SelectMultipleProps> = (props) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);
    const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>([]);
    const {
        name,
        options,
        values,
        placeholder,
        onChange,
        autoFocus,
        isLoading,
        isSearchable,
        disabled,
        hideSelectedOptions,
        reactSelectProps,
        isExpandable,
        small,
        maxMenuHeight
    } = props;

    useEffect(() => {
        let newSelectedOptions: SelectOption[] = [];
        values?.forEach((value) => {
            const option = getSelectedOption(options, value);
            option && newSelectedOptions.push(option);
        })
        setSelectedOptions(newSelectedOptions);
    }, [values, options]);

    return (
        <Select
            name={name}
            inputId={name}
            isMulti
            isLoading={isLoading}
            isSearchable={isSearchable}
            autoFocus={autoFocus}
            isDisabled={disabled}
            hideSelectedOptions={hideSelectedOptions}
            components={{ClearIndicator, DropdownIndicator}}
            options={options}
            onChange={(value) => {
                onChange(value as SelectOption[]);
            }}
            placeholder={placeholder || t(TranslationLibKey.PLACEHOLDER_SELECT_DEFAULT)}
            value={selectedOptions}
            maxMenuHeight={maxMenuHeight}
            styles={customStyles(small, isExpandable)}
            noOptionsMessage={() => t(TranslationLibKey.MESSAGE_NO_RESULT)}
            theme={customTheme}
            menuPortalTarget={document.querySelector('body')}
            {...reactSelectProps}
        />
    );
};

export default SelectMultiple;
