import React, {FunctionComponent} from 'react';
import clsx from "clsx";

export type FormRowTitleProps = {
    children: React.ReactNode;
    uppercase?: boolean;
};

const FormRowTitle: FunctionComponent<FormRowTitleProps> = ({children, uppercase}) => {
    return (
        <div className={clsx("form-row-title", {'form-row-title--uppercase': uppercase})}>
            {children}
        </div>
    )
};

export default FormRowTitle;
