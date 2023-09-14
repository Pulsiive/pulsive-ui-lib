import React, {FunctionComponent, useState} from 'react';
import clsx from "clsx";
import IconTooltip, {IconTooltipProps} from './IconTooltip';

export type ActionMenuItem = {
    label: string;
    onClick: (e: React.MouseEvent) => void;
    critical?: boolean;
    separator?: boolean;
    cssClass?: string;
}

export enum ActionMenuItemPosition {
    TOP_LEFT = "actions-menu-content-top-left"
}

export enum ActionMenuIcon {
    EDIT = "edit",
    MORE = "more_vert",
    PREVIEW = "visibility",
    LINK_BLANK = "open_in_new"
}

type ActionsMenuProps = {
    iconTooltip: IconTooltipProps;
    items: ActionMenuItem[];
    position?: ActionMenuItemPosition;
}

const ActionsMenu: FunctionComponent<ActionsMenuProps> = ({iconTooltip, items, position}) => {
    const [isShowActions, setShowActions] = useState(false);

    const handleClick = (onClick: (e: React.MouseEvent) => void, e: React.MouseEvent) => {
        onClick(e);
        setShowActions(false);
    };

    return (
        <div className={clsx("actions-menu", {'active': isShowActions})}>
            <IconTooltip {...iconTooltip}
                cssClass={clsx("actions-menu-btn", iconTooltip.cssClass)}
                onClick={() => setShowActions(prev => !prev)}
            />
            <div className={clsx("actions-menu-content", position)} onMouseLeave={() => setShowActions(false)}>
                <ul>
                    {items.map(({label, onClick, critical, separator, cssClass}, index) => (
                        <li key={index} onClick={(e) => handleClick(onClick, e)} className={clsx({"separator": separator}, cssClass)}>
                            <span className={clsx({"critical": critical})}>{label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ActionsMenu;
