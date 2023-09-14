import { ChangeEventHandler, FunctionComponent, KeyboardEventHandler } from 'react';
export declare type InputTextProps = {
    name: string;
    placeholder?: string;
    value?: string;
    onKeyDown?: KeyboardEventHandler;
    onChange: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    datalistOptions?: string[];
    small?: boolean;
    autoComplete?: string;
    cssClass?: string;
};
declare const InputText: FunctionComponent<InputTextProps>;
export default InputText;
