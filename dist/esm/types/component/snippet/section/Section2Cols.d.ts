import React, { FunctionComponent } from 'react';
declare type Section2ColsProps = {
    layout?: Section2ColsLayout;
    alignment?: Section2ColsAlignment;
    mobileReverse?: boolean;
    children: React.ReactNode;
};
export declare enum Section2ColsLayout {
    WIDE_LEFT = "section-2cols-wide-left",
    NARROW = "section-2cols-narrow"
}
export declare enum Section2ColsAlignment {
    TOP = "section-2cols-align-top"
}
declare const Section2Cols: FunctionComponent<Section2ColsProps>;
export default Section2Cols;
