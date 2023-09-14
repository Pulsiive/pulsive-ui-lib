import React, {FunctionComponent} from 'react';
import clsx from "clsx";

export type FormGroupProps = {
    children: React.ReactNode;
};


const FormGroup: FunctionComponent<FormGroupProps> = ({children}) => {
    return (
        <div className={clsx("form-group")}>
            {children}
        </div>
    )
};

export default FormGroup;
