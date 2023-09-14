import React, {FunctionComponent, useEffect, useState} from "react";
import CreatableSelect from 'react-select/creatable';
import Select, {OptionsOrGroups, StylesConfig, Props as ReactSelectProps, GroupBase} from "react-select";
import {useTranslation} from "react-i18next";
import {Color} from "../../../../utils/color";
import {ClearIndicator, customTheme, DropdownIndicator, getSelectedOption, SelectOption, selectStyles} from "./commonSelect";
import {TranslationLibFile, TranslationLibKey} from "../../../../utils/locale";

type SelectAutocompleteProps = {
    name: string;
    options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;
    onChange: (newValue?: SelectOption) => void;
    value?: string | number;
    autoFocus?: boolean;
    disabled?: boolean;
    placeholder?: string;
    small?: boolean;
    maxMenuHeight?: number;
    isLoading?: boolean;
    reactSelectProps?: ReactSelectProps;
    creatable?: boolean;
    onCreate?: (inputValue: string) => void;
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

const SelectAutocomplete: FunctionComponent<SelectAutocompleteProps> = (props) => {
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
        small,
        maxMenuHeight,
        creatable = false,
        clearable = false,
        onCreate,
        reactSelectProps,
    } = props;

    useEffect(() => {
        setSelectedOption(getSelectedOption(options, value));
    }, [value, options]);

    return React.createElement(creatable ? CreatableSelect : Select, {
        name,
        inputId: name,
        isLoading,
        autoFocus,
        isDisabled: disabled,
        isClearable: clearable,
        components: {ClearIndicator, DropdownIndicator},
        options: options,
        onChange: (value: unknown | null) => onChange(value ? (value as SelectOption) : undefined),
        placeholder: placeholder || t(TranslationLibKey.PLACEHOLDER_SELECT_DEFAULT),
        value: selectedOption || null,
        maxMenuHeight,
        styles: customStyles(small, clearable),
        noOptionsMessage: () => t(TranslationLibKey.MESSAGE_NO_RESULT),
        theme: customTheme,
        onCreateOption: onCreate,
        formatCreateLabel: (value) => t(TranslationLibKey.SELECT_OPTION_CREATE, {value}),
        menuPortalTarget: document.querySelector('body'),
        ...reactSelectProps
    });
};

export default SelectAutocomplete;
