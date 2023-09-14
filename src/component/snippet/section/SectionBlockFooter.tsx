import React, {FunctionComponent} from 'react';

export type SectionBlockFooterProps = {
    link: string;
    label: string,
    target?: string;
};

const SectionBlockFooter: FunctionComponent<SectionBlockFooterProps> = ({link, label, target}) => {
    return (
        <div className="section-block__footer">
            <a href={link} target={target} rel="noopener noreferrer">{label}</a>
        </div>
    )
};

export default SectionBlockFooter;
