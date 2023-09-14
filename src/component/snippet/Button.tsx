import React, {ButtonHTMLAttributes, FunctionComponent} from 'react';
import clsx from "clsx";

import Icon, { IconProps } from "./Icon";
import Loader from './Loader';

export enum ButtonSize {
    XSMALL = "btn-xsmall",
    SMALL = "btn-small",
    MEDIUM = "btn-medium",
    BIG = "btn-big"
}

export enum ButtonStyle {
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

export type ButtonProps = {
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

const Button: FunctionComponent<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const {
        children,
        cssClass,
        disabled = false,
        icon,
        onClick,
        reverse,
        size,
        style,
        loading,
        ...rest
    } = props;

    return (
        <button
            type={onClick === undefined ? "submit" : "button"}
            className={clsx("btn", {"reverse": reverse}, size || ButtonSize.MEDIUM, style || ButtonStyle.PRIMARY_GREEN, cssClass)}
            onClick={(e) => onClick !== undefined && onClick(e)}
            disabled={disabled || loading}
            {...rest}
        >
            {icon && <Icon {...icon}/>}
            {children && <span>{children}</span>}
            {loading && <Loader cssClass="btn__loader" small />}
        </button>
    );
};

export default Button;
