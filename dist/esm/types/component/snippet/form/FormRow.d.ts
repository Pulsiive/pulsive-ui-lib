import React, { FunctionComponent } from 'react';
export declare enum FormRowAlignment {
    CENTER = "form-row-center",
    LEFT = "form-row-left",
    RIGHT = "form-row-right"
}
export declare type FormRowProps = {
    children: React.ReactNode;
    alignment?: FormRowAlignment;
};
declare const FormRow: FunctionComponent<FormRowProps>;
export default FormRow;
