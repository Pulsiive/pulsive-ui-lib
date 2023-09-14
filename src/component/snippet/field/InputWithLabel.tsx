import React, {FunctionComponent} from 'react';
import clsx from "clsx";

type InputWithLabelProps = {
    children: React.ReactElement;
    label: string;
    cssClass?: string;
};

const InputWithLabel: FunctionComponent<InputWithLabelProps> = ({children, label, cssClass}) => {
    return (
        <div className={clsx("input-with-label", cssClass)}>
            {children}
            <span>{label}</span>
        </div>
    );
};

export default InputWithLabel;
