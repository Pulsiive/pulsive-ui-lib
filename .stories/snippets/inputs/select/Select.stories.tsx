import React, {ChangeEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Select} from "../../../../src/component/snippet";

export default {
    title: 'Snippets/Inputs/Selects/Select',
    component: Select,
    argTypes: {}
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState("option 1");
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => setValue(e.target.value);

    return <Select {...args} onChange={handleChange} value={value} />;
};

export const Default = Template.bind({});
Default.args = {
    name: "select",
    value: 1,
    options: [
        {value: "option 1", label: "Option 1"},
        {value: "option 2", label: "Option 2"},
        {value: "option 3", label: "Option 3"}
    ],
    onChange: action('onChange')
};

export const Small = Template.bind({});
Small.args = {
    name: "select",
    value: 1,
    options: [
        {value: "option 1", label: "Option 1"},
        {value: "option 2", label: "Option 2"},
        {value: "option 3", label: "Option 3"}
    ],
    onChange: action('onChange'),
    small: true
};
