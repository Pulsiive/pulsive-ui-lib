import React, {FunctionComponent} from 'react';
import ContentBlockRow from "./ContentBlockRow";
import ContentBlockRowElementRight from './ContentBlockRowElementRight';

export type ContentBlockFooterProps = {
    link: string;
    label: string;
    target?: string;
};

const ContentBlockFooter: FunctionComponent<ContentBlockFooterProps> = ({link, label, target}) => {
    if (!link || !label) return <></>;

    return (
        <ContentBlockRow>
            <ContentBlockRowElementRight>
                <a className="content-block__link" href={link} target={target} rel="noopener noreferrer">{label}</a>
            </ContentBlockRowElementRight>
        </ContentBlockRow>
    )
};

export default ContentBlockFooter;
