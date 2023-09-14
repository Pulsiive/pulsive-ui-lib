import React, {FunctionComponent} from 'react';
import clsx from 'clsx';

type Section1ColProps = {
    children: React.ReactNode;
    justifyContent?: Section1ColJustify;
};

export enum Section1ColJustify {
    CENTER = "section-col1-justify-center"
}

const Section1Col: FunctionComponent<Section1ColProps> = ({children, justifyContent}) => {
    return (
        <div className={clsx("section-1col", justifyContent)}>
            {children}
        </div>
    )
};

export default Section1Col;
