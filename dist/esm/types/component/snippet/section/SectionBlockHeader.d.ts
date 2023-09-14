import React, { FunctionComponent } from 'react';
import { IconProps } from "../Icon";
export declare type SectionBlockHeaderProps = {
    title: string;
    icon?: IconProps;
    link?: string;
    action?: React.ReactNode;
};
declare const SectionBlockHeader: FunctionComponent<SectionBlockHeaderProps>;
export default SectionBlockHeader;
