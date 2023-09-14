import React, { FunctionComponent } from 'react';
export declare enum FlexContentDirection {
    ROW = "flex-content--direction-row",
    COLUMN = "flex-content--direction-column"
}
export declare enum FlexContentAlignment {
    START = "flex-content--align-start",
    END = "flex-content--align-end",
    CENTER = "flex-content--align-center",
    INITIAL = "flex-content--align-initial"
}
export declare enum FlexContentJustify {
    START = "flex-content--justify-start",
    END = "flex-content--justify-end",
    CENTER = "flex-content--justify-center",
    SPACE_AROUND = "flex-content--justify-space-around",
    SPACE_BETWEEN = "flex-content--justify-space-between",
    SPACE_EVENLY = "flex-content--justify-space-evenly"
}
export declare enum FlexContentSpacing {
    XSMALL = "flex-content--spacing-xsmall",
    SMALL = "flex-content--spacing-small",
    MEDIUM = "flex-content--spacing-medium",
    LARGE = "flex-content--spacing-large",
    LARGE_PLUS = "flex-content--spacing-large-plus",
    XLARGE = "flex-content--spacing-xlarge"
}
export declare enum FlexContentMobileDirection {
    ROW = "flex-content--mobile-direction-row",
    COLUMN = "flex-content--mobile-direction-column",
    COLUMN_REVERSE = "flex-content--mobile-direction-column-reverse"
}
export declare enum FlexContentLayout {
    COLUMNS = "flex-content--layout-columns",
    TWO_COLUMNS_WIDE_LEFT = "flex-content--layout-two-columns-wide-left",
    TWO_COLUMNS_WIDE_RIGHT = "flex-content--layout-two-columns-wide-right"
}
export declare class FlexContentProps {
    static LAYOUT_COLUMNS: FlexContentProps;
    static LAYOUT_ROWS: FlexContentProps;
    children: React.ReactNode;
    direction: FlexContentDirection;
    alignment?: FlexContentAlignment;
    justify?: FlexContentJustify;
    spacing?: FlexContentSpacing;
    allowWrap?: boolean;
    mobileDirection?: FlexContentMobileDirection;
    cssClass?: string;
    layout?: FlexContentLayout;
    constructor(direction: FlexContentDirection, spacing: FlexContentSpacing, layout?: FlexContentLayout, mobileDirection?: FlexContentMobileDirection);
}
declare const FlexContent: FunctionComponent<FlexContentProps>;
export default FlexContent;
