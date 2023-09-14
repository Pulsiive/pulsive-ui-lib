import React, { FunctionComponent } from 'react';
import { ContentBlockHeaderProps } from "./ContentBlockHeader";
import { ContentBlockFooterProps } from "./ContentBlockFooter";
declare type ContentBlockProps = {
    children: React.ReactNode;
    cssClass?: string;
    header?: ContentBlockHeaderProps;
    footer?: ContentBlockFooterProps;
};
declare const ContentBlock: FunctionComponent<ContentBlockProps>;
export default ContentBlock;
