import React, { useState } from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {InputCheckbox} from "../../../src/component/snippet";

export default {
    title: "Snippets/Inputs/InputCheckbox",
    component: InputCheckbox,
} as ComponentMeta<typeof InputCheckbox>;

const Template: ComponentStory<typeof InputCheckbox> = (args) => {
    const [bool, SetBool] = useState(false);
    const handleChange = () => SetBool(!bool);

    return <InputCheckbox {...args} onChange={handleChange} checked={bool} />;
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
