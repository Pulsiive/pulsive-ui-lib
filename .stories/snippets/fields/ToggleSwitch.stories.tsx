import React, { useState } from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {ToggleSwitch} from "../../../src/component/snippet";

export default {
    title: "Snippets/Fields/ToggleSwitch",
    component: ToggleSwitch,
} as ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (args) => {
    const [bool, SetBool] = useState(false);
    const handleChange = () => SetBool(!bool);

    return <ToggleSwitch {...args} onChange={handleChange} checked={bool} />;
};

export const Default = Template.bind({});
Default.args = {
    name: "toggle-switch-name",
    label: "Active Toggle Switch",
    tooltip: "Some additional information on the purpose of this Toggle"
};
