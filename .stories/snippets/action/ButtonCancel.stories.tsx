import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ButtonLinkCancel} from "../../../src";

export default {
    title: 'Snippets/Actions/ButtonLinkCancel',
    component: ButtonLinkCancel,
    argTypes: {}
} as ComponentMeta<typeof ButtonLinkCancel>;

const Template: ComponentStory<typeof ButtonLinkCancel> = (args) => {
    return <ButtonLinkCancel {...args}/>;
};

export const Default = Template.bind({});
Default.args = {
    onClick: action('onClick')
};
