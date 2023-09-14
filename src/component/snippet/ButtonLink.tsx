import React, {FunctionComponent} from "react";
import clsx from "clsx";
import Icon, { IconProps } from "./Icon";

export enum ButtonLinkStyle {
    BLACK_LIGHT = "btn-link-black-light",
    GREY = "btn-link-grey",
    MIDNIGHT = "btn-link-midnight",
    MIDNIGHT_LIGHT = "btn-link-midnight-light",
    WHITE = "btn-link-white",
}

export type ButtonLinkProps = {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    style?: ButtonLinkStyle;
    cssClass?: string;
    icon?: IconProps;
    reverse?: boolean;
    reverseUnderline?: boolean;
};

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
    onClick,
    children,
    style,
    cssClass,
    icon,
    reverse,
    reverseUnderline
}) => {
    return (
        <button className={clsx("btn-link", {"btn-link--reverse": reverse}, {"btn-link--reverse-underline": reverseUnderline}, style || ButtonLinkStyle.MIDNIGHT, cssClass)} onClick={onClick}>
            <span>{children}</span>
            {icon && <Icon {...icon}/>}
        </button>
    );
};

export default ButtonLink;
