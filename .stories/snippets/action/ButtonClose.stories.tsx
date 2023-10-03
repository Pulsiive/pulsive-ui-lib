import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ButtonLinkClose} from "../../../src";

export default {
    title: 'Snippets/Actions/ButtonLinkClose',
    component: ButtonLinkClose,
    argTypes: {}
} as ComponentMeta<typeof ButtonLinkClose>;

const Template: ComponentStory<typeof ButtonLinkClose> = (args) => {
    return <ButtonLinkClose {...args}/>;
};

export const Default = Template.bind({});
Default.args = {
    onClick: action('onClick')
};
