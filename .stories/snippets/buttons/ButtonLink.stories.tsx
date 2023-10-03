import React from "react";
import {action} from "@storybook/addon-actions";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {ButtonLink, ButtonLinkStyle} from "../../../src/component/snippet";

export default {
    title: "Snippets/Buttons/ButtonLink",
    component: ButtonLink,
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => (
    <ButtonLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
    children: "Click me",
    onClick: action("onClick"),
};

export const White = Template.bind({});
White.parameters = {
    backgrounds: {default: "Dark"},
};
White.args = {
    children: "Click me",
    onClick: action("onClick"),
    style: ButtonLinkStyle.WHITE,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    children: "Click me",
    onClick: action("onClick"),
    icon: {name: "launch"}
};
