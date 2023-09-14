import { FunctionComponent } from 'react';
export declare enum FormFieldMessageType {
    SUCCESS = "form-field-message-success",
    WARNING = "form-field-message-warning",
    ERROR = "form-field-message-error"
}
export declare type FormFieldMessageProps = {
    message: string;
    active: boolean;
    type?: FormFieldMessageType;
};
declare const FormFieldMessage: FunctionComponent<FormFieldMessageProps>;
export default FormFieldMessage;
