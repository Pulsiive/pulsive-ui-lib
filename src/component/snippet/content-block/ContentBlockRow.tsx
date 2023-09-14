import React, {FunctionComponent} from 'react';

type ContentBlockRowProps = {
    children: React.ReactNode;
};

const ContentBlockRow: FunctionComponent<ContentBlockRowProps> = ({children}) => {
    return (
        <div className="content-block__row">
            {children}
        </div>
    )
};

export default ContentBlockRow;
