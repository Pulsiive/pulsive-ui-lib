import { ChangeEventHandler, FunctionComponent } from 'react';
export declare type InputNumberProps = {
    name: string;
    placeholder?: string;
    value?: number;
    minValue?: number;
    maxValue?: number;
    step?: number;
    onChange: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    small?: boolean;
};
declare const InputNumber: FunctionComponent<InputNumberProps>;
export default InputNumber;
