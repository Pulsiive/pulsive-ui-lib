import React, { FunctionComponent } from "react";
import { IconProps } from "./Icon";
export declare enum ButtonLinkStyle {
    BLACK_LIGHT = "btn-link-black-light",
    GREY = "btn-link-grey",
    MIDNIGHT = "btn-link-midnight",
    MIDNIGHT_LIGHT = "btn-link-midnight-light",
    WHITE = "btn-link-white"
}
export declare type ButtonLinkProps = {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    style?: ButtonLinkStyle;
    cssClass?: string;
    icon?: IconProps;
    reverse?: boolean;
    reverseUnderline?: boolean;
};
declare const ButtonLink: FunctionComponent<ButtonLinkProps>;
export default ButtonLink;
