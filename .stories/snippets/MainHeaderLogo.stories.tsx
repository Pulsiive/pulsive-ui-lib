import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {MainHeaderLayout, MainHeaderLogo, MainHeaderSlice} from '../../src/component/snippet';
import {SvgSirdataLogoWhite} from "../../src";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Snippets/MainHeader/MainHeaderLogo',
    component: MainHeaderLogo,
} as ComponentMeta<typeof MainHeaderLogo>;

const Template: ComponentStory<typeof MainHeaderLogo> = (args) => {
    return (
        <MainHeaderLayout>
            <MainHeaderSlice>
                <MainHeaderLogo {...args} onClick={() => {}}/>
            </MainHeaderSlice>
        </MainHeaderLayout>
    );
};

export const Default = Template.bind({});
Default.args = {
    link: "",
    logo: SvgSirdataLogoWhite,
    onClick: action('onClick')
};

export const Preprod = Template.bind({});
Preprod.args = {
    link: "",
    logo: SvgSirdataLogoWhite,
    onClick: action('onClick'),
    usePreprod: true
};
