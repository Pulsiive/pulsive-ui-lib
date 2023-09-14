import React, { FunctionComponent } from 'react';
declare type FormFieldTitleProps = {
    label?: string;
    name?: string;
    required?: boolean;
    tooltip?: string;
    actions?: React.ReactNode | React.ReactNode[];
};
declare const FormFieldTitle: FunctionComponent<FormFieldTitleProps>;
export default FormFieldTitle;
