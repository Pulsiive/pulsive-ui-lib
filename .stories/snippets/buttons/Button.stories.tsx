import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonStyle } from '../../../src/component/snippet';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Snippets/Buttons/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    style: { control: { type: 'select', options: ButtonStyle } }
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({children, ...args}) => <Button {...args}>{children}</Button>;

export const Primary: ComponentStory<typeof Button> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Click me',
};

export const PrimaryIcon: ComponentStory<typeof Button> = Template.bind({});
PrimaryIcon.args = {
  children: 'Delete',
  icon: {name: 'delete'},
  "aria-label": 'Delete button',
};

export const _Loading: ComponentStory<typeof Button> = Template.bind({});
_Loading.args = {
  children: 'Save',
  icon: {name: 'save'},
  loading: true,
  "aria-label": 'Save button',
};