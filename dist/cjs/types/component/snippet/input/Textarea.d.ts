import { ChangeEventHandler, FunctionComponent } from 'react';
declare type TextareaProps = {
    name: string;
    placeholder?: string;
    value?: string;
    onChange: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    rows?: number;
    maxLength?: number;
    small?: boolean;
};
declare const Textarea: FunctionComponent<TextareaProps>;
export default Textarea;
