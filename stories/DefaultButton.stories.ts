import type {Meta, StoryObj} from '@storybook/react';

import DefaultButton from './DefaultButton';

const meta: Meta<typeof DefaultButton> = {
  title: 'Component/Button',
  component: DefaultButton,
} as Meta<typeof DefaultButton>;

export default meta;

type Story = StoryObj<typeof DefaultButton>;

export const Basic: Story = {
  args: {
    label: 'Button',
  },
};

export const Second: Story = {
  args: {
    label: 'Se connecter avec Google',
    second: true,
  },
};
