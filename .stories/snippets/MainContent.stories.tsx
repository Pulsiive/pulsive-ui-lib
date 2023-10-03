import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {MainContent, MainPageHeader, Paragraph, ParagraphAlignment} from "../../src/component/snippet";
import {MainContentStyle} from "../../src/component/snippet/MainContent";

export default {
    title: 'Snippets/MainContent',
    component: MainContent,
    parameters: {
        layout: 'fullscreen',
    }
} as ComponentMeta<typeof MainContent>;

const Template: ComponentStory<typeof MainContent> = (args) => {
    return (
        <MainContent {...args}>
            <MainPageHeader title="Main Content"/>
            <Paragraph alignment={ParagraphAlignment.JUSTIFY}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer sed porta risus. Nunc eu velit lobortis,
                scelerisque quam vitae, rhoncus sem. Sed tristique enim
                nec imperdiet elementum. Nam ut eros et risus
                pellentesque pharetra nec vel justo. Vivamus mattis
                justo neque, at porttitor justo aliquet quis. Aenean
                quis elit tellus. Integer volutpat turpis in sodales
                finibus. Aenean facilisis suscipit erat vel molestie.
                Etiam a pellentesque lorem. Nulla rutrum velit ac odio
                semper, volutpat semper tellus lacinia. Nunc ne c
                consectetur justo, in interdum enim. Aliquam et enim
                imperdiet, feugiat velit ac, suscipit felis.
            </Paragraph>
        </MainContent>
    );
};

export const Default = Template.bind({});
Default.args = {};

export const FullWidth = Template.bind({});
FullWidth.args = {
    style: MainContentStyle.FULL_WIDTH
};

export const NarrowWidth = Template.bind({});
NarrowWidth.args = {
    style: MainContentStyle.NARROW_WIDTH
};
