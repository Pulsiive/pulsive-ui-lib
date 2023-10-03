import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SvgNoResult } from '../../src/component/svg';

export default {
  title: 'Illustrations/NoResult',
  component: SvgNoResult,
  parameters: {
    controls: {hideNoControlsWarning: true},
  }
} as ComponentMeta<typeof SvgNoResult>;

const Template: ComponentStory<typeof SvgNoResult> = () => <SvgNoResult />;

export const svg = Template.bind({});
