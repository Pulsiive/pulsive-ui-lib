import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBarClearable from "../../../src/component/snippet/field/SearchBarClearable";

export default {
  title: 'Snippets/Fields/SearchBarClearable',
  component: SearchBarClearable,
  argTypes: {}
} as ComponentMeta<typeof SearchBarClearable>;

const Template: ComponentStory<typeof SearchBarClearable> = (args) => <SearchBarClearable {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Type something...",
  onSubmit: action('onSubmit')
};
