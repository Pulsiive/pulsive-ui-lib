import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {MainHeaderLayout, MainHeaderShortcutMenu, MainHeaderSlice} from '../../src/component/snippet';

export default {
    title: 'Snippets/MainHeader/MainHeaderShortcutMenu',
    component: MainHeaderShortcutMenu,
} as ComponentMeta<typeof MainHeaderShortcutMenu>;

const Template: ComponentStory<typeof MainHeaderShortcutMenu> = (args) => {
    return (
        <MainHeaderLayout themeWhite={args.themeWhite}>
            <MainHeaderSlice>
                <MainHeaderShortcutMenu {...args}/>
            </MainHeaderSlice>
        </MainHeaderLayout>
    );
};

export const Default = Template.bind({});
Default.args = {
    items: [
        {label: "Home", text: "Home", path: "/home", icon: {name: "home"}},
        {label: "Favorite", text: "Favorite", path: "/favorites", icon: {name: "favorite_border"}, includes: true},
        {
            label: "Partners", text: "Partners", path: "/partners", icon: {name: "manage_accounts", outlined: true}, items: [
                {label: "Partner 1", text: "Partner 1", path: "/partners/1", icon: {name: "chevron_right"}},
                {label: "Partner 2", text: "Partner 2", path: "/partners/2", icon: {name: "chevron_right"}}
            ]
        }
    ],
    activePath: "/partners/1",
    onClickLink: action("onClick")
};
