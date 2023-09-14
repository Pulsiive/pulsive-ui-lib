import { ChangeEventHandler, FunctionComponent } from 'react';
declare type InputPasswordProps = {
    name: string;
    placeholder?: string;
    value?: string;
    onChange: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    small?: boolean;
};
declare const InputPassword: FunctionComponent<InputPasswordProps>;
export default InputPassword;
