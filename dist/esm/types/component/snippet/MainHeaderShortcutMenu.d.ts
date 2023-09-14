import React, { FunctionComponent } from 'react';
import { MenuItem } from "./MainHeaderBurgerMenu";
declare type MainHeaderShortcutMenuProps = {
    items: MenuItem[];
    activePath: string;
    onClickLink: (path: string, e: React.MouseEvent) => void;
    themeWhite?: boolean;
};
declare const MainHeaderShortcutMenu: FunctionComponent<MainHeaderShortcutMenuProps>;
export default MainHeaderShortcutMenu;
