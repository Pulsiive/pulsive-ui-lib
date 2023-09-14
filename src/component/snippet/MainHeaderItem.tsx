import React, {FunctionComponent} from 'react';
import clsx from "clsx";
import Tooltip from "./Tooltip";
import IconTooltip from "./IconTooltip";
import Icon, {IconProps} from "./Icon";

type MainHeaderItemProps = {
    icon: IconProps;
    label: string;
    active: boolean;
    onOpen: (e: React.MouseEvent) => void;
    onClose?: (e: React.MouseEvent) => void;
    children?: React.ReactNode;
    mobileOnly?: boolean;
    withChip?: boolean;
    showLabel?: boolean;
}

const MainHeaderItem: FunctionComponent<MainHeaderItemProps> = ({
    icon,
    label,
    active,
    onOpen,
    onClose,
    children,
    mobileOnly,
    withChip,
    showLabel,
}) => {
    return showLabel ? (
        <Tooltip
            text={label}
            cssClass={clsx("main-header__item", {"main-header__item--mobile": mobileOnly}, {"main-header__item--active": active})}
            onClick={(e) => (active ? onClose && onClose(e) : onOpen(e))}
        >
            <span className={clsx("main-header__item__icon", {"main-header__item__icon--with-chip": withChip})}>
                <Icon {...icon} />
            </span>
            <span className="main-header__item__label">{label}</span>
            {children}
        </Tooltip>
    ) : (
        <div className={clsx("main-header__item", {"main-header__item--mobile": mobileOnly}, {"main-header__item--active": active})}>
            <IconTooltip
                icon={icon}
                text={label}
                cssClass={clsx("main-header__item__icon", {"main-header__item__icon--with-chip": withChip})}
                onClick={(e) => (active ? onClose && onClose(e) : onOpen(e))}
            />
            {children}
        </div>
    );
};

export default MainHeaderItem;
