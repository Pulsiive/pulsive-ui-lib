import { FunctionComponent } from "react";
import { OptionsOrGroups, Props as ReactSelectProps, GroupBase } from "react-select";
import { SelectOption } from "./select/commonSelect";
declare type InputAutocompleteProps = {
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
declare const InputAutocomplete: FunctionComponent<InputAutocompleteProps>;
export default InputAutocomplete;
