import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ButtonSave} from "../../../src";

export default {
    title: 'Snippets/Actions/ButtonSave',
    component: ButtonSave,
    argTypes: {}
} as ComponentMeta<typeof ButtonSave>;

const Template: ComponentStory<typeof ButtonSave> = (args) => {
    return <ButtonSave {...args}/>;
};

export const Default = Template.bind({});
Default.args = {
    onClick: action('onClick')
};
