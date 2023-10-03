import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {SplitButton} from '../../../src/component/snippet';

export default {
  title: 'Snippets/Buttons/SplitButton',
  component: SplitButton,
  argTypes: {
      actions: { control: 'object' }
  }
} as ComponentMeta<typeof SplitButton>;

const Template: ComponentStory<typeof SplitButton> = (props) => <SplitButton {...props}/>;

export const Primary: ComponentStory<typeof SplitButton> = Template.bind({});
Primary.args = {
  actions: [
      {label: "Top action", onClick: () => {}},
      {label: "Action 2", onClick: () => {}},
      {label: "Action 3", onClick: () => {}}
  ]
};

