import React, {FunctionComponent} from 'react';
import clsx from "clsx";

type SectionColProps = {
    children: React.ReactNode;
};

const SectionCol: FunctionComponent<SectionColProps> = ({children}) => {
    return (
        <div className={clsx("section-col")}>
            {children}
        </div>
    )
};

export default SectionCol;
