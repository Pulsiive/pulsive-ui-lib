import { FunctionComponent } from "react";
import { Props as ReactSelectProps } from "react-select";
import { SelectOption } from "./commonSelect";
declare type SelectV2Props = {
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
declare const SelectV2: FunctionComponent<SelectV2Props>;
export default SelectV2;
