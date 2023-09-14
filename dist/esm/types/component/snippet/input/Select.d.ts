import { ChangeEventHandler, FunctionComponent } from 'react';
declare type SelectProps = {
    name: string;
    value: string | number;
    options: {
        value: string | number;
        label: string;
    }[];
    onChange: ChangeEventHandler;
    withEmptyOption?: boolean;
    disabled?: boolean;
    small?: boolean;
};
declare const Select: FunctionComponent<SelectProps>;
export default Select;
