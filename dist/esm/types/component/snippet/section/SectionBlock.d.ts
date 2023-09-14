import React, { FunctionComponent } from 'react';
import { SectionBlockHeaderProps } from "./SectionBlockHeader";
import { SectionBlockFooterProps } from "./SectionBlockFooter";
import { BoxProps } from "../Box";
declare type SectionBlockProps = {
    children: React.ReactNode;
    cssClass?: string;
    box?: BoxProps;
    header?: SectionBlockHeaderProps;
    footer?: SectionBlockFooterProps;
};
declare const SectionBlock: FunctionComponent<SectionBlockProps>;
export default SectionBlock;
