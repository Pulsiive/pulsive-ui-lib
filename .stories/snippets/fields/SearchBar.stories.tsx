import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBar } from '../../../src/component/snippet';

export default {
  title: 'Snippets/Fields/SearchBar',
  component: SearchBar,
  argTypes: {}
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Type something...",
  onChange: action('onChange')
};
