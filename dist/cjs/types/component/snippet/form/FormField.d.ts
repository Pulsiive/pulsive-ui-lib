import React, { FunctionComponent } from 'react';
import { FormFieldMessageProps } from "./FormFieldMessage";
export declare enum FormFieldSize {
    FLEX = "form-field--flex"
}
export declare type FormFieldTitleFields = {
    label?: string;
    tooltip?: string;
    actions?: React.ReactNode | React.ReactNode[];
};
export declare type FormFieldProps = {
    children: React.ReactElement;
    name?: string;
    required?: boolean;
    title?: FormFieldTitleFields;
    size?: FormFieldSize;
    messages?: FormFieldMessageProps[] | FormFieldMessageProps;
    inline?: boolean;
};
declare const FormField: FunctionComponent<FormFieldProps>;
export default FormField;
