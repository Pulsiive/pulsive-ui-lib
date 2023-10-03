import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SvgError404 } from '../../src/component/svg';

export default {
  title: 'Illustrations/Error404',
  component: SvgError404,
  parameters: {
    controls: {hideNoControlsWarning: true},
  }
} as ComponentMeta<typeof SvgError404>;

const Template: ComponentStory<typeof SvgError404> = () => <SvgError404 />;

export const svg = Template.bind({});
