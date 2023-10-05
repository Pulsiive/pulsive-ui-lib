import type {Meta, StoryObj} from '@storybook/react';

import Icon from './Icon';

import linkedin from './assets/link.png';
import google from './assets/google.png';
import twitter from './assets/twitter.png';

const meta: Meta<typeof Icon> = {
  title: 'Assets/Icons',
  component: Icon,
} as Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Linkedin: Story = {
  args: {
    src: linkedin,
  },
};

export const Google: Story = {
  args: {
    src: google,
  },
};

export const Twitter: Story = {
  args: {
    src: twitter,
  },
};
