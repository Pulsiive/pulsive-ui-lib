import React, {FunctionComponent} from 'react';
import clsx from "clsx";

export enum FormFieldMessageType {
    SUCCESS = "form-field-message-success",
    WARNING = "form-field-message-warning",
    ERROR = "form-field-message-error"
}

export type FormFieldMessageProps = {
    message: string;
    active: boolean;
    type?: FormFieldMessageType;
};

const FormFieldMessage: FunctionComponent<FormFieldMessageProps> = ({message, type, active}) => {
    if (!active) return <></>;

    return (
        <div className={clsx("form-field-message", type)}>{message}</div>
    );
};

export default FormFieldMessage;
