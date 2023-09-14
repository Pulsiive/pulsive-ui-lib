import React from 'react';
export declare enum BoxRadius {
    XS = "--border-radius-xs",
    SM = "--border-radius-sm",
    MD = "--border-radius-md",
    LG = "--border-radius-lg",
    XL = "--border-radius-xl"
}
export declare enum BoxSpacing {
    NONE = "--spacing-none",
    XSMALL = "--spacing-xs",
    SMALL = "--spacing-sm",
    MEDIUM = "--spacing-md",
    LARGE = "--spacing-lg",
    XLARGE = "--spacing-xl"
}
export declare enum BoxShadow {
    BLACK_BIG = "box--shadow-black-l",
    BLACK_MEDIUM = "box--shadow-black-m"
}
export declare class BoxProps {
    static SECTION_BLOCK: BoxProps;
    static SECTION_BLOCK_WITH_SHADOW: BoxProps;
    radius?: BoxRadius;
    shadow?: BoxShadow;
    spacing?: BoxSpacing;
    cssClass?: string;
    onClick?: (e: React.MouseEvent) => void;
    constructor(radius: BoxRadius, spacing: BoxSpacing, shadow?: BoxShadow);
}
declare const Box: React.FunctionComponent<{
    children: React.ReactNode;
} & BoxProps>;
export default Box;
