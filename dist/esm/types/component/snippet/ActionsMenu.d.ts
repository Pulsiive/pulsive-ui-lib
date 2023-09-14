import React, { FunctionComponent } from 'react';
import { IconTooltipProps } from './IconTooltip';
export declare type ActionMenuItem = {
    label: string;
    onClick: (e: React.MouseEvent) => void;
    critical?: boolean;
    separator?: boolean;
    cssClass?: string;
};
export declare enum ActionMenuItemPosition {
    TOP_LEFT = "actions-menu-content-top-left"
}
export declare enum ActionMenuIcon {
    EDIT = "edit",
    MORE = "more_vert",
    PREVIEW = "visibility",
    LINK_BLANK = "open_in_new"
}
declare type ActionsMenuProps = {
    iconTooltip: IconTooltipProps;
    items: ActionMenuItem[];
    position?: ActionMenuItemPosition;
};
declare const ActionsMenu: FunctionComponent<ActionsMenuProps>;
export default ActionsMenu;
