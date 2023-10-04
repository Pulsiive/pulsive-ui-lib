import type {Meta, StoryObj} from '@storybook/react';

import MyButton from './MyButton';

const meta: Meta<typeof MyButton> = {
  title: 'Component/MyButton',
  component: MyButton,
} as Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof MyButton>;

export const Basic: Story = {
  args: {
    label: 'Button',
  },
};
