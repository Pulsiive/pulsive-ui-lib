import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Bullet, BulletStatus } from '../../src/component/snippet';

export default {
  title: 'Snippets/Bullet',
  component: Bullet,
} as ComponentMeta<typeof Bullet>;

const Template: ComponentStory<typeof Bullet> = (args) => <Bullet {...args} />;

export const Default = Template.bind({});

export const Green = Template.bind({});
Green.args = {
  status: BulletStatus.GREEN
};

export const Orange = Template.bind({});
Orange.args = {
  status: BulletStatus.ORANGE
};

export const Red = Template.bind({});
Red.args = {
  status: BulletStatus.RED
};
