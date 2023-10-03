import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SvgError403 } from '../../src/component/svg';

export default {
  title: 'Illustrations/Error403',
  component: SvgError403,
  parameters: {
    controls: {hideNoControlsWarning: true},
  }
} as ComponentMeta<typeof SvgError403>;

const Template: ComponentStory<typeof SvgError403> = () => <SvgError403 />;

export const svg = Template.bind({});
