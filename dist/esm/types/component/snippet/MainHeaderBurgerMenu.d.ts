import React, { FunctionComponent } from "react";
import { IconProps } from "./Icon";
export declare type MenuItem = {
    label: string;
    path: string;
    icon: IconProps;
    includes?: boolean;
    items?: MenuItem[];
    externalUrl?: boolean;
    allowedTo?: string;
    adminOnly?: boolean;
    text?: string;
};
declare type MainHeaderBurgerMenuProps = {
    items: MenuItem[];
    activePath: string;
    active: boolean;
    onOpen: (e: React.MouseEvent) => void;
    onClose: (e: React.MouseEvent) => void;
    onClickLink: (path: string, e: React.MouseEvent) => void;
    themeWhite?: boolean;
};
declare const MainHeaderBurgerMenu: FunctionComponent<MainHeaderBurgerMenuProps>;
export default MainHeaderBurgerMenu;
