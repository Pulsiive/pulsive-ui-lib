import React, {FunctionComponent} from 'react';
import ContentBlockRow from "./ContentBlockRow";
import ContentBlockRowElementRight from './ContentBlockRowElementRight';
import ContentBlockRowTitle, {ContentBlockRowTitleProps} from './ContentBlockRowTitle';

export type ContentBlockHeaderProps = {
    title?: ContentBlockRowTitleProps;
    actions?: React.ReactNode;
};

const ContentBlockHeader: FunctionComponent<ContentBlockHeaderProps> = ({title, actions}) => {
    if (!title && !actions) return <></>;

    return (
        <ContentBlockRow>
            {title && <ContentBlockRowTitle {...title} />}
            {actions &&
            <ContentBlockRowElementRight>
                <div className="content-block__actions">
                    {actions}
                </div>
            </ContentBlockRowElementRight>
            }
        </ContentBlockRow>
    )
};

export default ContentBlockHeader;
