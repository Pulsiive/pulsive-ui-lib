import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {InputRadio} from "../../../src/component/snippet";

export default {
    title: "Snippets/Inputs/InputRadio",
    component: InputRadio,
} as ComponentMeta<typeof InputRadio>;

const Template: ComponentStory<typeof InputRadio> = (args) => <InputRadio {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "input-radio-name",
    value: "input-radio-value"
};
