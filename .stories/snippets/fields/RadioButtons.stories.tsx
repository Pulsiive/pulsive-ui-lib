import React, {ChangeEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {RadioButtons} from "../../../src/component/snippet";

export default {
    title: 'Snippets/Fields/RadioButtons',
    component: RadioButtons,
    argTypes: {}
} as ComponentMeta<typeof RadioButtons>;

const Template: ComponentStory<typeof RadioButtons> = (args) => {
    const [value, setValue] = useState("option 1");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return <RadioButtons {...args} onChange={handleChange} value={value} />;
};

export const Default = Template.bind({});
Default.args = {
    name: "radio-buttons",
    options: [
        {value: "option 1", label: "Option 1"},
        {value: "option 2", label: "Option 2"},
        {value: "option 3", label: "Option 3"}
    ],
    onChange: action('onChange')
};
