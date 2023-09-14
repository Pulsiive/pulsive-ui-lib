import { FunctionComponent, KeyboardEventHandler } from "react";
export declare type InputNumberNewProps = {
    name: string;
    placeholder?: string;
    value?: number;
    minValue?: number;
    maxValue?: number;
    onKeyDown?: KeyboardEventHandler;
    onChange: (value: number) => void;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    small?: boolean;
};
declare const InputNumberNew: FunctionComponent<InputNumberNewProps>;
export default InputNumberNew;
