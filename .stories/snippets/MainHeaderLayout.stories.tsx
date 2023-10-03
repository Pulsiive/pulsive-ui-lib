import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {MainHeaderAccount, MainHeaderAccountAvatar, MainHeaderBurgerMenu, MainHeaderItem, MainHeaderLayout, MainHeaderLogo, MainHeaderShortcutMenu, MainHeaderSlice} from '../../src/component/snippet';
import {SvgSirdataLogoMidnight, SvgSirdataLogoWhite} from "../../src";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Snippets/MainHeader/MainHeaderLayout',
    component: MainHeaderLayout,
    parameters: {
        layout: 'fullscreen',
    }
} as ComponentMeta<typeof MainHeaderLayout>;

const Template: ComponentStory<typeof MainHeaderLayout> = (args) => {
    const [isShowBurgerMenu, setShowBurgerMenu] = useState(false);
    return (
        <MainHeaderLayout {...args}>
            <MainHeaderSlice>
                <MainHeaderBurgerMenu items={MENU_ITEMS}
                                      activePath={""}
                                      active={isShowBurgerMenu}
                                      onOpen={() => setShowBurgerMenu(true)}
                                      onClose={() => setShowBurgerMenu(false)}
                                      onClickLink={action("onClick")}
                                      themeWhite={args.themeWhite}/>
                <MainHeaderLogo link="/home" logo={args.themeWhite ? SvgSirdataLogoMidnight : SvgSirdataLogoWhite} onClick={action("onClick")}/>
            </MainHeaderSlice>
            <MainHeaderSlice>
                <MainHeaderShortcutMenu items={MENU_ITEMS} activePath={""} onClickLink={action("onClick")} themeWhite={args.themeWhite}/>
            </MainHeaderSlice>
            <MainHeaderSlice>
                <MainHeaderItem icon={{name: "search"}} label={"Search"} active={false} onOpen={action("onClick")} showLabel/>
                <MainHeaderItem icon={{name: "favorite"}} label={"Favorites"} active={false} onOpen={action("onClick")}/>
                <MainHeaderItem icon={{name: "email"}} label={"Contact"} active={false} onOpen={action("onClick")}/>
                <MainHeaderAccount themeWhite={args.themeWhite}>
                    <MainHeaderItem icon={{name: "apps"}} label={"Applications"} active={false} onOpen={action("onClick")}/>
                    <MainHeaderAccountAvatar initials={"SP"} tooltip={"Sirdata Partner"} onOpen={action("onClick")}>
                        <div/>
                    </MainHeaderAccountAvatar>
                </MainHeaderAccount>
            </MainHeaderSlice>
        </MainHeaderLayout>
    );
};

export const Default = Template.bind({});
Default.args = {
    themeWhite: false
};

const MENU_ITEMS = [
    {label: "Home", text: "Home", path: "/home", icon: {name: "home"}},
    {label: "Favorite", text: "Favorite", path: "/favorites", icon: {name: "favorite_border"}, includes: true},
    {
        label: "Partners", text: "Partners", path: "/partners", icon: {name: "manage_accounts", outlined: true}, items: [
            {label: "Partner 1", text: "Partner 1", path: "/partners/1", icon: {name: "chevron_right"}},
            {label: "Partner 2", text: "Partner 2", path: "/partners/2", icon: {name: "chevron_right"}}
        ]
    }
];
