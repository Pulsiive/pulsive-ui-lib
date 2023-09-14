import React, {FunctionComponent} from "react";
import clsx from "clsx";
import Icon, {IconProps} from "./Icon";

export enum TagSize {
    XSMALL = "tag--xsmall",
    SMALL = "tag--small",
    MEDIUM = "tag--medium",
    BIG = "tag--big"
}

export enum TagStyle {
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

export enum TagTextTransform {
    CAPITALIZE = "tag--capitalize",
    UPPERCASE = "tag--uppercase"
}

export type TagProps = {
    label: string;
    icon?: IconProps;
    size?: TagSize;
    style?: TagStyle;
    customColor?: {backgroundColor?: string, color?: string, borderColor?: string};
    highlighted?: boolean;
    textTransform?: TagTextTransform;
    disabled?: boolean;
    reverse?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    cssClass?: string;
};

const Tag: FunctionComponent<TagProps> = ({label, icon, size = TagSize.MEDIUM, style= TagStyle.PRIMARY_GREY_DARK, highlighted, textTransform, disabled, reverse, customColor, onClick, cssClass}) => {
    return (
        <span
            className={clsx("tag", {"tag--highlighted": highlighted}, {"tag--disabled": disabled}, {"tag--clickable": onClick}, {"tag--reverse": reverse}, size, style, textTransform, cssClass)}
            style={customColor}
            onClick={onClick}
        >
            {icon && <Icon {...icon} cssClass={clsx("tag__icon", {"tag__icon--clickable": !!icon.onClick}, icon.cssClass)}/>}
            <span>{label}</span>
        </span>
    );
};

export default Tag;
