import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ButtonValidate} from "../../../src";

export default {
    title: 'Snippets/Actions/ButtonValidate',
    component: ButtonValidate,
    argTypes: {}
} as ComponentMeta<typeof ButtonValidate>;

const Template: ComponentStory<typeof ButtonValidate> = (args) => {
    return <ButtonValidate {...args}/>;
};

export const Default = Template.bind({});
Default.args = {
    onClick: action('onClick')
};
