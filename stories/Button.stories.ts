import type {Meta, StoryObj} from '@storybook/react';

import {Button} from './Button';

const meta: Meta<typeof Button> = {
  title: 'Component/Button',
  component: Button,
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    label: 'Button',
  },
};
