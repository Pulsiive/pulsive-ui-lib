import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {RadioButton} from "../../../src/component/snippet";

export default {
    title: 'Snippets/Fields/RadioButton',
    component: RadioButton,
    argTypes: {}
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args}/>;

export const Default = Template.bind({});
Default.args = {
    name: "radio-button",
    id: "radio-button",
    label: "Option 1",
    value: "option 1",
    checked: true,
    onChange: action('onChange')
};
