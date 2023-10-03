import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loader } from "../../src/component/snippet";

export default {
    title: "Snippets/Loader",
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
    small: false
};
