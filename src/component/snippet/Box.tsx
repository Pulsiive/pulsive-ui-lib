import React from 'react';
import clsx from "clsx";

export enum BoxRadius {
    XS = '--border-radius-xs',
    SM = '--border-radius-sm',
    MD = '--border-radius-md',
    LG = '--border-radius-lg',
    XL = '--border-radius-xl',
}

export enum BoxSpacing {
    NONE = '--spacing-none',
    XSMALL = '--spacing-xs',
    SMALL = '--spacing-sm',
    MEDIUM = '--spacing-md',
    LARGE = '--spacing-lg',
    XLARGE = '--spacing-xl',
}

export enum BoxShadow {
    BLACK_BIG = 'box--shadow-black-l',
    BLACK_MEDIUM = 'box--shadow-black-m',
}

export class BoxProps {
    static SECTION_BLOCK: BoxProps = new BoxProps(BoxRadius.XL, BoxSpacing.LARGE);
    static SECTION_BLOCK_WITH_SHADOW: BoxProps = new BoxProps(BoxRadius.XL, BoxSpacing.LARGE, BoxShadow.BLACK_MEDIUM);

    radius?: BoxRadius;
    shadow?: BoxShadow;
    spacing?: BoxSpacing;
    cssClass?: string;
    onClick?: (e: React.MouseEvent) => void;

    constructor(radius: BoxRadius, spacing: BoxSpacing, shadow?: BoxShadow) {
        this.radius = radius;
        this.spacing = spacing;
        this.shadow = shadow;
    }
}

const Box: React.FunctionComponent<{children: React.ReactNode} & BoxProps> = ({ children, radius = BoxRadius.XL, shadow, spacing = BoxSpacing.MEDIUM, cssClass , onClick}) => {
  return (
    <div className={clsx("box", {"box--clickable": !!onClick}, shadow, cssClass)} style={{ borderRadius: `var(${radius})`, padding: `var(${spacing})` }} onClick={onClick}>
        {children}
    </div>
  );
}

export default Box;
