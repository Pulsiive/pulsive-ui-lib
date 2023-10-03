import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {IconEdit} from "../../../src";

export default {
    title: 'Snippets/Actions/IconEdit',
    component: IconEdit,
    argTypes: {}
} as ComponentMeta<typeof IconEdit>;

const Template: ComponentStory<typeof IconEdit> = (args) => {
    return <IconEdit {...args}/>;
};

export const Default = Template.bind({});
Default.args = {
    onClick: action('onClick')
};
