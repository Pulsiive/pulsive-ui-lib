import React, {FunctionComponent} from 'react';
import clsx from "clsx";
import {MenuItem} from "./MainHeaderBurgerMenu";
import Icon from "./Icon";

type MainHeaderShortcutMenuProps = {
    items: MenuItem[];
    activePath: string;
    onClickLink: (path: string, e: React.MouseEvent) => void;
    themeWhite?: boolean;
}

const MainHeaderShortcutMenu: FunctionComponent<MainHeaderShortcutMenuProps> = ({items, activePath, onClickLink, themeWhite}) => {
    if (!items?.length) return <></>;

    return (
        <div className={clsx("main-header-shortcut-menu", {"main-header-shortcut-menu--white": themeWhite})}>
            {items.map(({path, items, includes, text}, id) =>
                ((items && items.length) ?
                    <div key={id} className={clsx("main-header-shortcut-menu__group", {"main-header-shortcut-menu__group--active": !!(items.find(({path}) => activePath.match(path))) || activePath === path})}>
                        <span className="main-header-shortcut-menu__group__label">{text}</span>
                        <div className="main-header-shortcut-menu__group__content">
                            <ul>
                                {items.map(({path, icon, includes, externalUrl, text}, index) =>
                                    <li key={index} className={clsx("main-header-shortcut-menu__group__content__item", {"main-header-shortcut-menu__group__content__item--active": includes ? activePath.includes(path) : activePath.match(path)})}>
                                        {externalUrl ?
                                            <a href={path} target="_blank" rel="noopener noreferrer" className="main-header-shortcut-menu__group__content__item__link">
                                                <Icon {...icon}/>
                                                <span>{text}</span>
                                            </a> :
                                            <a onClick={(e) => onClickLink(path, e)} className="main-header-shortcut-menu__group__content__item__link">
                                                <Icon {...icon}/>
                                                <span>{text}</span>
                                            </a>
                                        }
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div> :
                    <div key={id} className={clsx("main-header-shortcut-menu__group", {"main-header-shortcut-menu__group--active": includes ? activePath.includes(path) : activePath.match(path)})}>
                        <a onClick={(e) => onClickLink(path, e)} className="main-header-shortcut-menu__group__label">
                            {text}
                        </a>
                    </div>
                )
            )}
        </div>
    );
}

export default MainHeaderShortcutMenu;
