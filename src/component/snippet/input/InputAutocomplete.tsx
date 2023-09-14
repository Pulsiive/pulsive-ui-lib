import React, {FunctionComponent, useState} from "react";
import CreatableSelect from 'react-select/creatable';
import Select, {OptionsOrGroups, StylesConfig, Props as ReactSelectProps, GroupBase} from "react-select";
import {useTranslation} from "react-i18next";
import {ClearIndicator, customTheme, SelectOption, selectStyles} from "./select/commonSelect";
import {TranslationLibFile, TranslationLibKey} from "../../../utils/locale";

type InputAutocompleteProps = {
    name: string;
    options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;
    onChange: (newValue?: SelectOption) => void;
    selected?: SelectOption;
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

const customStyles = (small?: boolean): StylesConfig => ({
    ...selectStyles(small)
});

const InputAutocomplete: FunctionComponent<InputAutocompleteProps> = (props) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);
    const {
        name,
        options,
        selected,
        placeholder,
        onChange,
        autoFocus,
        isLoading,
        disabled,
        reactSelectProps,
        small,
        maxMenuHeight,
        creatable = false,
        onCreate,
        clearable = false
    } = props;

    const [menuOpen, setMenuOpen] = useState(false);

    return React.createElement(creatable ? CreatableSelect : Select, {
        name,
        inputId: name,
        isLoading,
        onInputChange: (newValue) => setMenuOpen(!!newValue),
        menuIsOpen: menuOpen,
        autoFocus,
        isDisabled: disabled,
        isClearable: clearable,
        components: {ClearIndicator, DropdownIndicator: null},
        options,
        onChange: (value: unknown | null) => onChange(value ? (value as SelectOption) : undefined),
        placeholder: placeholder || t(TranslationLibKey.PLACEHOLDER_SELECT_DEFAULT),
        value: selected,
        maxMenuHeight,
        styles: customStyles(small),
        noOptionsMessage: () => t(TranslationLibKey.MESSAGE_NO_RESULT),
        theme: customTheme,
        onCreateOption: onCreate,
        formatCreateLabel: (value) => t(TranslationLibKey.SELECT_OPTION_CREATE, { value }),
        menuPortalTarget: document.querySelector('body'),
        ...reactSelectProps
    });
};

export default InputAutocomplete;
