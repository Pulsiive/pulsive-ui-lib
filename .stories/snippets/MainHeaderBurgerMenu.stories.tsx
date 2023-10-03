import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {MainHeaderBurgerMenu, MainHeaderLayout, MainHeaderSlice} from '../../src/component/snippet';

export default {
    title: 'Snippets/MainHeader/MainHeaderBurgerMenu',
    component: MainHeaderBurgerMenu,
    parameters: {
        layout: 'fullscreen',
    }
} as ComponentMeta<typeof MainHeaderBurgerMenu>;

const Template: ComponentStory<typeof MainHeaderBurgerMenu> = (args) => {
    const [isShowBurgerMenu, setShowBurgerMenu] = useState(false);

    return (
        <MainHeaderLayout>
            <MainHeaderSlice>
                <MainHeaderBurgerMenu {...args}
                                      activePath={"/partners/2"}
                                      active={isShowBurgerMenu}
                                      onOpen={() => setShowBurgerMenu(true)}
                                      onClose={() => setShowBurgerMenu(false)}
                                      onClickLink={() => {}}/>
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
    ]
};
