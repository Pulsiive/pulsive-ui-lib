import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ButtonDelete} from "../../../src";

export default {
    title: 'Snippets/Actions/ButtonDelete',
    component: ButtonDelete,
    argTypes: {}
} as ComponentMeta<typeof ButtonDelete>;

const Template: ComponentStory<typeof ButtonDelete> = (args) => {
    return <ButtonDelete {...args}/>;
};

export const Default = Template.bind({});
Default.args = {
    onClick: action('onClick')
};
