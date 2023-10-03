import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Box, BoxProps} from '../../src/component/snippet';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Snippets/Box',
    component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default: ComponentStory<typeof Box> = Template.bind({});
Default.args = {
    children: <div>Ceci est une box</div>,
};

export const SectionBlock: ComponentStory<typeof Box> = Template.bind({});
SectionBlock.args = {
    ...BoxProps.SECTION_BLOCK,
    children: <div>Ceci est une box</div>,
};

export const SectionBlockWithShadow: ComponentStory<typeof Box> = Template.bind({});
SectionBlockWithShadow.args = {
    ...BoxProps.SECTION_BLOCK_WITH_SHADOW,
    children: <div>Ceci est une box</div>,
};

export const SectionBlockWithShadowClickable: ComponentStory<typeof Box> = Template.bind({});
SectionBlockWithShadowClickable.args = {
    ...BoxProps.SECTION_BLOCK_WITH_SHADOW,
    children: <div>Ceci est une box</div>,
    onClick: action('onClick')
};
