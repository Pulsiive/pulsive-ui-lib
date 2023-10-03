import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ButtonLinkBack} from "../../../src";

export default {
    title: 'Snippets/Actions/ButtonLinkBack',
    component: ButtonLinkBack,
    argTypes: {}
} as ComponentMeta<typeof ButtonLinkBack>;

const Template: ComponentStory<typeof ButtonLinkBack> = (args) => {
    return <ButtonLinkBack {...args}/>;
};

export const Default = Template.bind({});
Default.args = {
    onClick: action('onClick')
};
