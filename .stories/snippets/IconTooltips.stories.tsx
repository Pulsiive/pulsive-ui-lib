import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {IconTooltip} from '../../src/component/snippet';

export default {
  title: 'Snippets/Tooltips/IconTooltip',
  component: IconTooltip,
  argTypes: {}
} as ComponentMeta<typeof IconTooltip>;

const Template: ComponentStory<typeof IconTooltip> = (args) => <IconTooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: {name: 'delete'},
  text: 'Ceci est un tooltip message',
};

export const Clickable = Template.bind({});
Clickable.args = {
  icon: {name: 'delete'},
  text: 'Ceci est un tooltip message',
  onClick: action('onClick')
};
