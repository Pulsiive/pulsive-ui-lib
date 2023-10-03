import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {InfoValue} from "../../../src/component/snippet";

export default {
    title: "Snippets/Fields/InfoValue",
    component: InfoValue,
} as ComponentMeta<typeof InfoValue>;

const Template: ComponentStory<typeof InfoValue> = (args) => <InfoValue {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: "Info value"
};
