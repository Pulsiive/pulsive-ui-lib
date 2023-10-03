import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SvgUnderConstruction } from '../../src/component/svg';

export default {
  title: 'Illustrations/UnderConstruction',
  component: SvgUnderConstruction,
  parameters: {
    controls: {hideNoControlsWarning: true},
  }
} as ComponentMeta<typeof SvgUnderConstruction>;

const Template: ComponentStory<typeof SvgUnderConstruction> = () => <SvgUnderConstruction />;

export const svg = Template.bind({});
