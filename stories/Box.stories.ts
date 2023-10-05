import type {Meta, StoryObj} from '@storybook/react';

import Box from './Box';

const meta: Meta<typeof Box> = {
  title: 'Component/Box',
  component: Box,
} as Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof Box>;

export const Basic: Story = {
  args: {
    label: 'Box',
  },
};

