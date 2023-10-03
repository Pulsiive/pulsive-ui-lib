import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ButtonNew} from "../../../src";

export default {
    title: 'Snippets/Actions/ButtonNew',
    component: ButtonNew,
    argTypes: {}
} as ComponentMeta<typeof ButtonNew>;

const Template: ComponentStory<typeof ButtonNew> = (args) => {
    return <ButtonNew {...args}/>;
};

export const Default = Template.bind({});
Default.args = {
    onClick: action('onClick')
};
