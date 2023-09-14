import React, {FunctionComponent} from 'react';
import clsx from "clsx";

export enum FormRowAlignment {
    CENTER = "form-row-center",
    LEFT = "form-row-left",
    RIGHT = "form-row-right"
}

export type FormRowProps = {
    children: React.ReactNode;
    alignment?: FormRowAlignment;
};

const FormRow: FunctionComponent<FormRowProps> = ({children, alignment}) => {
    return (
        <div className={clsx("form-row", alignment)}>
            {children}
        </div>
    )
};

export default FormRow;
