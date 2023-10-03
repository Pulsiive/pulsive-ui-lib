import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconNotification } from '../../src/component/snippet';

export default {
  title: 'Snippets/Icons/IconNotification',
  component: IconNotification,
  argTypes: {}
} as ComponentMeta<typeof IconNotification>;

const Template: ComponentStory<typeof IconNotification> = (args) => <IconNotification {...args} />;

export const Default = Template.bind({});
Default.args = {
  hasNotifications: true,
  onClick: action('onClick'),
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  hasNotifications: true,
  tooltipText: 'Notifications',
  onClick: action('onClick'),
};
