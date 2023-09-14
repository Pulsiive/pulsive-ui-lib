import React, {FunctionComponent} from "react";
import clsx from "clsx";

type WrapperProps = {
    children: React.ReactNode;
    cssClass?: string;
};

const Wrapper: FunctionComponent<WrapperProps> = ({children, cssClass}) => {
    return (
        <div className={clsx("wrapper", cssClass)}>
            {children}
        </div>
    );
};

export default Wrapper;
