import React, {ChangeEvent, useState} from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {InputRange} from "../../../src/component/snippet";
import {action} from "@storybook/addon-actions";

export default {
    title: "Snippets/Inputs/InputRange",
    component: InputRange,
    argTypes: {
        disabled: { control: 'boolean' }
    },
} as ComponentMeta<typeof InputRange>;

const Template: ComponentStory<typeof InputRange> = (args) => {
    const [value, setValue] = useState<number>(0);

    return <InputRange {...args} onChange={setValue} value={value}/>
};

export const Default = Template.bind({});
Default.args = {
    onChange: action('onChange')
};

