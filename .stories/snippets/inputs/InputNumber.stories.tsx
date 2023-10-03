import React, {ChangeEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {InputNumber} from "../../../src/component/snippet";

export default {
    title: 'Snippets/Inputs/InputNumber',
    component: InputNumber,
    argTypes: {}
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args) => {
    const [value, setValue] = useState<number>(0);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(+e.target.value);

    return <InputNumber {...args} onChange={handleChange} value={value} />;
};

export const Default = Template.bind({});
Default.args = {
    placeholder: "Number",
    onChange: action('onChange')
};

export const Disabled = Template.bind({});
Disabled.args = {
    placeholder: "Number",
    onChange: action('onChange'),
    disabled: true
};

export const Small = Template.bind({});
Small.args = {
    placeholder: "Number",
    onChange: action('onChange'),
    small: true
};
