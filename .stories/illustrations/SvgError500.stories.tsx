import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SvgError500 } from '../../src/component/svg';

export default {
  title: 'Illustrations/Error500',
  component: SvgError500,
  parameters: {
    controls: {hideNoControlsWarning: true},
  }
} as ComponentMeta<typeof SvgError500>;

const Template: ComponentStory<typeof SvgError500> = () => <SvgError500 />;

export const svg = Template.bind({});
