import { ChangeEventHandler, FunctionComponent } from 'react';
export declare type InputCheckboxProps = {
    name: string;
    checked: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement> | VoidFunction;
    disabled?: boolean;
    readOnly?: boolean;
};
declare const InputCheckbox: FunctionComponent<InputCheckboxProps>;
export default InputCheckbox;
