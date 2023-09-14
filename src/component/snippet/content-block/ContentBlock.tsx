import React, {FunctionComponent} from 'react';
import ContentBlockHeader, {ContentBlockHeaderProps} from "./ContentBlockHeader";
import ContentBlockFooter, {ContentBlockFooterProps} from "./ContentBlockFooter";
import clsx from "clsx";

type ContentBlockProps = {
    children: React.ReactNode;
    cssClass?: string;
    header?: ContentBlockHeaderProps;
    footer?: ContentBlockFooterProps;
};

const ContentBlock: FunctionComponent<ContentBlockProps> = ({header, children, cssClass, footer}) => {
    return (
        <div className={clsx("content-block", cssClass)}>
            {header && <ContentBlockHeader {...header}/>}
            {children}
            {footer && <ContentBlockFooter {...footer}/>}
        </div>
    )
};

export default ContentBlock;
