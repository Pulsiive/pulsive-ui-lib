import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {StatusLabel} from '../../src/component/snippet';
import {Color} from "../../src/utils/color";

export default {
  title: 'Snippets/StatusLabel',
  component: StatusLabel,
  argTypes: {}
} as ComponentMeta<typeof StatusLabel>;

const Template: ComponentStory<typeof StatusLabel> = (args) => <StatusLabel {...args} />;

export const Circle = Template.bind({});
Circle.args = {
  label: "Active",
  icon: {
    name: "circle",
    colorIcon: Color.GREEN
  },
};

export const Error = Template.bind({});
Error.args = {
  label: "Error",
  icon: {
    name: "error",
    colorIcon: Color.RED
  },
};
