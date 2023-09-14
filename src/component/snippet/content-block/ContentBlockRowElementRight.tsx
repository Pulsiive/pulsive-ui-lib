import React, {FunctionComponent} from 'react';

type ContentBlockRowElementRightProps = {
    children: React.ReactNode;
};

const ContentBlockRowElementRight: FunctionComponent<ContentBlockRowElementRightProps> = ({children}) => {
    return (
        <div className="content-block__row__element-right">
            {children}
        </div>
    )
};

export default ContentBlockRowElementRight;
