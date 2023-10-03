import React, {useState} from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {Slider} from "../../../src/component/snippet";
import {action} from "@storybook/addon-actions";

export default {
    title: "Snippets/Fields/Slider",
    component: Slider,
    argTypes: {
        disabled: {control: 'boolean'}
    },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
    const [value, setValue] = useState<number>(0);

    return (<div style={{width: "30vw"}}>
            <Slider {...args} onChange={setValue} value={value}/>
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    onChange: action('onChange')
};

