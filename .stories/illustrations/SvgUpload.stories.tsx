import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SvgUpload } from '../../src/component/svg';

export default {
  title: 'Illustrations/Upload',
  component: SvgUpload,
  parameters: {
    controls: {hideNoControlsWarning: true},
  }
} as ComponentMeta<typeof SvgUpload>;

const Template: ComponentStory<typeof SvgUpload> = () => <SvgUpload />;

export const svg = Template.bind({});
