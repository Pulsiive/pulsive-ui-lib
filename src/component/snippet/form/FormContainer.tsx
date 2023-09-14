import React, {FunctionComponent} from 'react';
import clsx from "clsx";

export type FormContainerProps = {
    children: React.ReactNode;
    cssClass?: string;
};

const FormContainer: FunctionComponent<FormContainerProps> = ({children, cssClass}) => {
    return (
        <section className={clsx("form-container", cssClass)}>
            {children}
        </section>
    )
};

export default FormContainer;
