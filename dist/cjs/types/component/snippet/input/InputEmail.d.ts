import { ChangeEventHandler, FunctionComponent } from 'react';
declare type InputEmailProps = {
    name: string;
    value?: string;
    placeholder?: string;
    onChange?: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    small?: boolean;
};
declare const InputEmail: FunctionComponent<InputEmailProps>;
export default InputEmail;
