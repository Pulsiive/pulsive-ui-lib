import { FunctionComponent } from "react";
import { OptionsOrGroups, Props as ReactSelectProps, GroupBase } from "react-select";
import { SelectOption } from "./commonSelect";
declare type SelectMultipleProps = {
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
declare const SelectMultiple: FunctionComponent<SelectMultipleProps>;
export default SelectMultiple;
