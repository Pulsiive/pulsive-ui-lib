import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { IconProps } from "./Icon";
export declare enum ButtonSize {
    XSMALL = "btn-xsmall",
    SMALL = "btn-small",
    MEDIUM = "btn-medium",
    BIG = "btn-big"
}
export declare enum ButtonStyle {
    PRIMARY_GREEN = "btn-primary-green",
    DEFAULT_GREEN = "btn-default-green",
    PRIMARY_MIDNIGHT = "btn-primary-midnight",
    DEFAULT_MIDNIGHT = "btn-default-midnight",
    PRIMARY_MIDNIGHT_LIGHT = "btn-primary-midnight-light",
    DEFAULT_MIDNIGHT_LIGHT = "btn-default-midnight-light",
    PRIMARY_WHITE = "btn-primary-white",
    DEFAULT_WHITE = "btn-default-white",
    PRIMARY_GREY = "btn-primary-grey"
}
export declare type ButtonProps = {
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    children?: React.ReactNode;
    icon?: IconProps;
    reverse?: boolean;
    loading?: boolean;
};
declare const Button: FunctionComponent<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>>;
export default Button;
