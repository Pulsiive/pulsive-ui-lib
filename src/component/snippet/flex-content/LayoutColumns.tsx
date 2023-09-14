import React, {FunctionComponent} from 'react';
import FlexContent, {
    FlexContentMobileDirection,
    FlexContentProps
} from "./FlexContent";

export type LayoutColumnsProps = {
    children: React.ReactNode;
    mobileDirection?: FlexContentMobileDirection;
    cssClass?: string;
};

const LayoutColumns: FunctionComponent<LayoutColumnsProps> = ({children, mobileDirection = FlexContentMobileDirection.COLUMN, cssClass}) => {
    return (
        <FlexContent {...FlexContentProps.LAYOUT_COLUMNS} mobileDirection={mobileDirection} cssClass={cssClass}>
            {children}
        </FlexContent>
    );
};

export default LayoutColumns;