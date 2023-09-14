import React, { CSSProperties } from "react";
import { ClearIndicatorProps, components, DropdownIndicatorProps, GroupBase, OptionsOrGroups, StylesConfig, Theme } from "react-select";
import { useTranslation } from "react-i18next";
import Icon from "../../Icon";
import IconTooltip from "../../IconTooltip";
import {Color} from "../../../../utils/color";
import {TranslationLibFile, TranslationLibKey} from "../../../../utils/locale";

export type SelectOption = {
    label: string;
    value: string | number;
    isDisabled?: boolean;
    [key: string]: any;
};

export const getSelectedOption = (options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>, value?: string | number) => {
    if (value === undefined) return undefined;
    for (const option of options) {
        if ('options' in option) {
            const foundOption = (option.options as SelectOption[]).find(it => it.value === value);
            if (foundOption) return foundOption;
        } else {
            if (option.value === value) return option;
        }
    }
    return undefined;
};

export const customTheme = (theme: Theme) => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary25: Color.GREY_LIGHT,
        primary50: Color.GREY,
        primary: Color.GREEN,
    },
});

export class SelectSize {
    static MEDIUM: SelectSize = new SelectSize("MEDIUM", "37.8px","32.4px","1rem", "0.2rem var(--spacing-xs)");
    static SMALL: SelectSize = new SelectSize("SMALL", "32px","28px",".857rem", "0.1rem var(--spacing-xs)");

    name: string;
    height: string = "";
    mobileHeight: string = "";
    fontSize: string = "";
    valueLabelPadding: string = "";

    constructor(name: string, height: string, mobileHeight: string, fontSize: string, valueLabelPadding: string) {
        this.name = name;
        this.height = height;
        this.mobileHeight = mobileHeight;
        this.fontSize = fontSize;
        this.valueLabelPadding = valueLabelPadding;
    }

    static values(): SelectSize[] {
        return [
            SelectSize.MEDIUM,
            SelectSize.SMALL
        ];
    }

    static getSelectSize(small?: boolean): SelectSize {
        return small ? SelectSize.SMALL : SelectSize.MEDIUM;
    }
}

export const selectStyles = (small?: boolean, isExpandable?: boolean): StylesConfig => {
    const selectedSize = SelectSize.getSelectSize(small);
    return {
        menuPortal: (base) => ({ ...base, zIndex: 150}),
        container: (base) => ({...base, color: Color.MIDNIGHT_LIGHT}),
        valueContainer: (base) => {
            let custom = {
                ...base,
                padding: '0rem 1rem'
            };
            if (!isExpandable) {
                return {
                    ...custom,
                    maxHeight: selectedSize.height,
                    overflowY: 'auto',
                    '::-webkit-scrollbar': {
                        display: 'none'
                    },
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                    "@media screen and (max-width: calc(479px))": {
                        maxHeight: selectedSize.mobileHeight,
                    },
                };
            }
            return custom;
        },
        control: (base, state) => ({
            ...base,
            minHeight: selectedSize.height,
            borderRadius: "var(--border-radius-md)",
            backgroundColor: state.isDisabled ? Color.GREY_LIGHT : Color.WHITE,
            borderColor: state.isFocused ? Color.GREEN : Color.GREY,
            boxShadow: state.isFocused ? `${Color.GREEN} 0 0 0 1px` : "none",
            ":hover": {
                borderColor: state.isFocused ? Color.GREEN : Color.GREY,
            },
            "@media screen and (max-width: calc(479px))": {
                minHeight: selectedSize.mobileHeight,
            },
        }),
        input: (base) => ({
            ...base,
            margin: 0,
            padding: 0,
            "> input": {
                borderRadius: 0,
                boxShadow: "none !important",
                color: `${Color.MIDNIGHT_LIGHT} !important`
            },
        }),
        menu: (base) => ({
            ...base,
            color: Color.MIDNIGHT_LIGHT,
            borderRadius: "var(--border-radius-md)",
            backgroundColor: Color.WHITE,
            boxShadow: "0 0 16px #00000020",
            minWidth: "100%",
            width: "auto",
            whiteSpace: "nowrap"
        }),
        menuList: (base) => ({...base, padding: 0}),
        dropdownIndicator: (base) => ({
            ...base,
            padding: "0 var(--spacing-xs)",
            color: Color.MIDNIGHT_LIGHT,
            "i": {
                fontSize: '1.5rem',
            },
            ":hover": {
                color: Color.GREEN,
                cursor: "pointer",
            },
        }),
        indicatorsContainer: (base) => ({...base, 'i': {fontSize: '1.286rem'}}),
        indicatorSeparator: (base) => ({...base, backgroundColor: Color.GREY}),
        clearIndicator: (base) => ({...base, color: Color.MIDNIGHT_LIGHT, padding: "0 var(--spacing-xs)"}),
        placeholder: (base) => ({
            ...base,
            color: Color.GREY_DARK,
            fontSize: selectedSize.fontSize,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        }),
        multiValue: (base) => ({
            ...base,
            backgroundColor: Color.GREY,
            borderRadius: "var(--border-radius-sm)",
            overflow: "hidden",
        }),
        multiValueLabel: (base) => ({
            ...base,
            color: Color.MIDNIGHT_LIGHT,
            fontSize: selectedSize.fontSize,
            padding: selectedSize.valueLabelPadding
        }),
        multiValueRemove: (base, state) => ({
            ...base,
            display: state.isDisabled ? "none" : "inherit",
            maxWidth: '2rem',
            cursor: "pointer",
            color: Color.MIDNIGHT_LIGHT,
            backgroundColor: Color.GREY,
            borderLeft: `1px solid ${Color.GREY_LIGHT}`,
            ":hover": {
                color: Color.CORAL,
                backgroundColor: Color.CORAL_LIGHT,
            },
        }),
        singleValue: (base) => ({...base, color: Color.MIDNIGHT_LIGHT, fontSize: selectedSize.fontSize}),
        option: (base, state) => ({
            ...base,
            padding: "var(--spacing-sm) var(--spacing-md)",
            color: state.isDisabled
                ? Color.GREY
                : state.isSelected
                    ? Color.GREEN
                    : undefined,
            backgroundColor: state.isDisabled
                ? undefined
                : state.isSelected
                    ? Color.GREY_LIGHT
                    : state.isFocused
                        ? Color.GREY_LIGHT
                        : undefined,
            cursor: state.isDisabled ? "not-allowed" : "pointer",
            ":active": {
                ...base[":active"],
                backgroundColor: !state.isDisabled ? Color.GREY : undefined,
            },
        }),
        noOptionsMessage: (base) => ({...base, padding: "var(--spacing-sm) var(--spacing-md)",}),
        loadingMessage: (base) => ({...base, padding: "var(--spacing-sm) var(--spacing-md)",})
    };
};

export const DropdownIndicator = (props: DropdownIndicatorProps) => {
    return (
        <components.DropdownIndicator {...props}>
            <Icon name="expand_more" />
        </components.DropdownIndicator>
    );
};

export const ClearIndicator = (props: ClearIndicatorProps) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);
    const {
        children = <IconTooltip icon={{name: "close"}} text={t(TranslationLibKey.ACTION_CLEAR)} onClick={() => {}} />,
        getStyles,
        innerProps: {ref, ...restInnerProps},
    } = props;

    return (
        <div {...restInnerProps} ref={ref} style={getStyles("clearIndicator", props) as CSSProperties}>
            {children}
        </div>
    );
};
