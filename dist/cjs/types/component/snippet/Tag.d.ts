import React, { FunctionComponent } from "react";
import { IconProps } from "./Icon";
export declare enum TagSize {
    XSMALL = "tag--xsmall",
    SMALL = "tag--small",
    MEDIUM = "tag--medium",
    BIG = "tag--big"
}
export declare enum TagStyle {
    PRIMARY_MIDNIGHT_LIGHT = "tag--primary-midnight-light",
    DEFAULT_MIDNIGHT_LIGHT = "tag--default-midnight-light",
    PRIMARY_CYAN_LIGHT = "tag--primary-cyan-light",
    DEFAULT_CYAN_LIGHT = "tag--default-cyan-light",
    PRIMARY_OCEAN = "tag--primary-ocean",
    DEFAULT_OCEAN = "tag--default-ocean",
    PRIMARY_RED = "tag--primary-red",
    PRIMARY_GREY_DARK = "tag--primary-grey-dark",
    PRIMARY_GREY_LIGHT = "tag--primary-grey-light"
}
export declare enum TagTextTransform {
    CAPITALIZE = "tag--capitalize",
    UPPERCASE = "tag--uppercase"
}
export declare type TagProps = {
    label: string;
    icon?: IconProps;
    size?: TagSize;
    style?: TagStyle;
    customColor?: {
        backgroundColor?: string;
        color?: string;
        borderColor?: string;
    };
    highlighted?: boolean;
    textTransform?: TagTextTransform;
    disabled?: boolean;
    reverse?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    cssClass?: string;
};
declare const Tag: FunctionComponent<TagProps>;
export default Tag;
