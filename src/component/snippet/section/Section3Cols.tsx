import React, {FunctionComponent} from 'react';

type Section3ColsProps = {
    children: React.ReactNode
};

const Section3Cols: FunctionComponent<Section3ColsProps> = ({children}) => {
    return (
        <div className="section-3cols">
            {children}
        </div>
    )
};

export default Section3Cols;
