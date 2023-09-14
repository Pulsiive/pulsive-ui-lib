import React, { FunctionComponent } from 'react';
import { FlexContentMobileDirection } from "./FlexContent";
export declare type LayoutColumnsProps = {
    children: React.ReactNode;
    mobileDirection?: FlexContentMobileDirection;
    cssClass?: string;
};
declare const LayoutColumns: FunctionComponent<LayoutColumnsProps>;
export default LayoutColumns;
