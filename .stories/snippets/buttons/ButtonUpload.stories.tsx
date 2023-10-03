import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ButtonUpload} from '../../../src/component/snippet';

export default {
  title: 'Snippets/Buttons/ButtonUpload',
  component: ButtonUpload,
  argTypes: {},
} as ComponentMeta<typeof ButtonUpload>;

const Template: ComponentStory<typeof ButtonUpload> = (args) => <ButtonUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Upload file'
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Upload file',
    disabled: true
};

export const Loading = Template.bind({});
Loading.args = {
    label: 'Upload file',
    loading: true
};
