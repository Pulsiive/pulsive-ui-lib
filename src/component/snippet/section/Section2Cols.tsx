import React, {FunctionComponent} from 'react';
import clsx from "clsx";

type Section2ColsProps = {
    layout?: Section2ColsLayout,
    alignment?: Section2ColsAlignment,
    mobileReverse?: boolean
    children: React.ReactNode,
};

export enum Section2ColsLayout {
    WIDE_LEFT = "section-2cols-wide-left",
    NARROW = "section-2cols-narrow"
}

export enum Section2ColsAlignment {
    TOP = "section-2cols-align-top"
}

const Section2Cols: FunctionComponent<Section2ColsProps> = ({layout, alignment, mobileReverse, children}) => {
    return (
        <div className={clsx("section-2cols", layout, alignment, {"section-2cols-reverse": mobileReverse})}>
            {children}
        </div>
    )
};

export default Section2Cols;
