import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Button, EmptyContentMessage} from "../../src/component/snippet";
import {SvgNoResult} from "../../src/component/svg";

export default {
    title: "Snippets/EmptyContentMessage",
    component: EmptyContentMessage,
} as ComponentMeta<typeof EmptyContentMessage>;

const Template: ComponentStory<typeof EmptyContentMessage> = (args) => (
    <EmptyContentMessage {...args} svg={SvgNoResult} />
);

export const Default = Template.bind({});
Default.args = {
    message: "No content message",
};

export const WithChildren = Template.bind({});
WithChildren.args = {
    message: "No content message with children",
    children: <Button>Retry</Button>
};
