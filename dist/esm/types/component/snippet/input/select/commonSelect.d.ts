/// <reference types="react" />
import { ClearIndicatorProps, DropdownIndicatorProps, GroupBase, OptionsOrGroups, StylesConfig, Theme } from "react-select";
import { Color } from "../../../../utils/color";
export declare type SelectOption = {
    label: string;
    value: string | number;
    isDisabled?: boolean;
    [key: string]: any;
};
export declare const getSelectedOption: (options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>, value?: string | number | undefined) => SelectOption | undefined;
export declare const customTheme: (theme: Theme) => {
    colors: {
        primary25: Color;
        primary50: Color;
        primary: Color;
        primary75: string;
        danger: string;
        dangerLight: string;
        neutral0: string;
        neutral5: string;
        neutral10: string;
        neutral20: string;
        neutral30: string;
        neutral40: string;
        neutral50: string;
        neutral60: string;
        neutral70: string;
        neutral80: string;
        neutral90: string;
    };
    borderRadius: number;
    spacing: import("react-select").ThemeSpacing;
};
export declare class SelectSize {
    static MEDIUM: SelectSize;
    static SMALL: SelectSize;
    name: string;
    height: string;
    mobileHeight: string;
    fontSize: string;
    valueLabelPadding: string;
    constructor(name: string, height: string, mobileHeight: string, fontSize: string, valueLabelPadding: string);
    static values(): SelectSize[];
    static getSelectSize(small?: boolean): SelectSize;
}
export declare const selectStyles: (small?: boolean | undefined, isExpandable?: boolean | undefined) => StylesConfig;
export declare const DropdownIndicator: (props: DropdownIndicatorProps) => JSX.Element;
export declare const ClearIndicator: (props: ClearIndicatorProps) => JSX.Element;
