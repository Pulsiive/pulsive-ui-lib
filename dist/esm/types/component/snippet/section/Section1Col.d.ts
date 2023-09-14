import React, { FunctionComponent } from 'react';
declare type Section1ColProps = {
    children: React.ReactNode;
    justifyContent?: Section1ColJustify;
};
export declare enum Section1ColJustify {
    CENTER = "section-col1-justify-center"
}
declare const Section1Col: FunctionComponent<Section1ColProps>;
export default Section1Col;
