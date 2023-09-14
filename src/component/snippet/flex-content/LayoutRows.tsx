import React, {FunctionComponent} from 'react';
import FlexContent, {FlexContentProps} from "./FlexContent";

export type LayoutRowsProps = {
    children: React.ReactNode;
    cssClass?: string;
};

const LayoutRows: FunctionComponent<LayoutRowsProps> = ({children, cssClass}) => {
    return (
        <FlexContent {...FlexContentProps.LAYOUT_ROWS} cssClass={cssClass}>
            {children}
        </FlexContent>
    );
};

export default LayoutRows;