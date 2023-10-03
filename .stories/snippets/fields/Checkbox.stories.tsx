import React, { useState } from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Checkbox} from "../../../src/component/snippet";

export default {
    title: "Snippets/Fields/Checkbox",
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
    const [bool, SetBool] = useState(false);
    const handleChange = () => SetBool(!bool);

    return <Checkbox {...args} onChange={handleChange} checked={bool} />;
};

export const Default = Template.bind({});
Default.args = {
    name: "checkbox-name",
    label: "Active checkbox",
    tooltip: "Some additional information on the purpose of this Checkbox"
};
