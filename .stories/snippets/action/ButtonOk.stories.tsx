import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ButtonOk} from "../../../src";

export default {
    title: 'Snippets/Actions/ButtonOk',
    component: ButtonOk,
    argTypes: {}
} as ComponentMeta<typeof ButtonOk>;

const Template: ComponentStory<typeof ButtonOk> = (args) => {
    return <ButtonOk {...args}/>;
};

export const Default = Template.bind({});
Default.args = {
    onClick: action('onClick')
};
