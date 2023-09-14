import React, {FunctionComponent, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import clsx from "clsx";
import {TranslationLibFile, TranslationLibKey} from "../../utils/locale";
import MainHeaderItem from "./MainHeaderItem";
import Icon, {IconProps} from "./Icon";

export type MenuItem = {
    label: string;
    path: string;
    icon: IconProps;
    includes?: boolean;
    items?: MenuItem[];
    externalUrl?: boolean;
    allowedTo?: string;
    adminOnly?: boolean;
    text?: string; // translated text, must be defined using the key defined in 'label'
}

type MainHeaderBurgerMenuProps = {
    items: MenuItem[];
    activePath: string;
    active: boolean;
    onOpen: (e: React.MouseEvent) => void;
    onClose: (e: React.MouseEvent) => void;
    onClickLink: (path: string, e: React.MouseEvent) => void;
    themeWhite?: boolean;
}

const MainHeaderBurgerMenu: FunctionComponent<MainHeaderBurgerMenuProps> = ({items, activePath, active, onOpen, onClose, onClickLink, themeWhite}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);
    const [openedMenuItem, setOpenedMenuItem] = useState<string>("");

    const toggleOpenedMenuItem = (path: string) => {
        (openedMenuItem === path) ? setOpenedMenuItem("") : setOpenedMenuItem(path);
    };

    useEffect(() => {
        (async () => {
            const openedMenuItem = items?.find(({items}) => items?.map(({path}) => path).includes(activePath));
            if (openedMenuItem) {
                setOpenedMenuItem(openedMenuItem.path);
            }
        })();
    }, [activePath, items]);

    if (!items?.length) return <></>;

    const buildLink = (item: MenuItem) => {
        if (item.externalUrl) {
            return (
                <a href={item.path} target="_blank" rel="noopener noreferrer">
                    <Icon {...item.icon}/>
                    <span>{item.text}</span>
                </a>
            );
        } else {
            return (
                <a onClick={(e) => onClickLink(item.path, e)}>
                    <Icon {...item.icon}/>
                    <span>{item.text}</span>
                </a>
            );
        }
    };

    return (
        <MainHeaderItem icon={{name: "reorder"}}
                        label={t(TranslationLibKey.HEADER_MENU)}
                        active={active}
                        onOpen={onOpen}
                        onClose={onClose}>
            <div className={clsx("burger-menu", {"burger-menu--visible": active}, {"burger-menu--white": themeWhite})}>
                <div className="burger-menu__content">
                    <div className="burger-menu__content__overlay" onClick={onClose}/>
                    <div className="burger-menu__content__panel">
                        <span className="burger-menu__content__close" onClick={onClose}>
                            <Icon name="close"/>
                        </span>
                        <ul className="burger-menu__content__items">
                            {items?.map((item, index) =>
                                ((!!item.items?.length) ?
                                    <li key={index} className={clsx("burger-menu__content__item",
                                        {"burger-menu__content__item--opened": openedMenuItem === item.path},
                                        {"burger-menu__content__item--active": activePath === item.path || item.items.map(({path}) => path).includes(activePath)})}>
                                        <span onClick={() => toggleOpenedMenuItem(item.path)}>
                                            <Icon {...item.icon}/>
                                            <span>{item.text}</span>
                                            <span className="burger-menu__content__item__expand">
                                                <Icon name="expand_more"/>
                                            </span>
                                        </span>
                                        <ul className="burger-menu__content__item__sub-menu">
                                            {item.items.map((subItem, index) =>
                                                <li key={index} className={clsx("burger-menu__content__item burger-menu__content__item--sub-item",
                                                    {"burger-menu__content__item--active": subItem.includes ? activePath.includes(subItem.path) : activePath.match(subItem.path)})}>
                                                    {buildLink(subItem)}
                                                </li>
                                            )}
                                        </ul>
                                    </li> :
                                    <li key={index} className={clsx("burger-menu__content__item",
                                        {"burger-menu__content__item--active": item.includes ? activePath.includes(item.path) : activePath.match(item.path)})}>
                                        {buildLink(item)}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </MainHeaderItem>
    );
}

export default MainHeaderBurgerMenu;
