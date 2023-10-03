import React, { useState } from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {InputToggleSwitch} from "../../../src/component/snippet";

export default {
    title: "Snippets/Inputs/InputToggleSwitch",
    component: InputToggleSwitch,
} as ComponentMeta<typeof InputToggleSwitch>;

const Template: ComponentStory<typeof InputToggleSwitch> = (args) => {
    const [bool, SetBool] = useState(false);
    const handleChange = () => SetBool(!bool);

    return <InputToggleSwitch {...args} onChange={handleChange} checked={bool} />;
};

export const Default = Template.bind({});
Default.args = {
    name: "checkbox-name"
};

export const Disabled = Template.bind({});
Disabled.args = {
    name: "checkbox-name",
    disabled: true
};
