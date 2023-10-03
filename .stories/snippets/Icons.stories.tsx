import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from '../../src/component/snippet';

export default {
  title: 'Snippets/Icons/Icon',
  component: Icon,
  argTypes: {
    outlined: { control: 'boolean' },
    colorIcon: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'delete',
};

export const IconOutlined = Template.bind({});
IconOutlined.args = {
    name: 'delete',
    outlined: true
};

export const IconClickable = Template.bind({});
IconClickable.args = {
    name: 'delete',
    onClick: action('onClick')
};
