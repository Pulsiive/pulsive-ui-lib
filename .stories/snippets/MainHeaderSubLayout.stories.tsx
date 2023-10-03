import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {MainHeaderSubLayout} from '../../src/component/snippet';

export default {
    title: 'Snippets/MainHeader/MainHeaderSubLayout',
    component: MainHeaderSubLayout,
    parameters: {
        layout: 'fullscreen',
    }
} as ComponentMeta<typeof MainHeaderSubLayout>;

const Template: ComponentStory<typeof MainHeaderSubLayout> = (args) => {
    return (
        <MainHeaderSubLayout {...args}>
            <span>MainHeaderSubLayout</span>
        </MainHeaderSubLayout>
    );
};

export const Default = Template.bind({});
Default.args = {
};

