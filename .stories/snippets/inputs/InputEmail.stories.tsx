import React, {ChangeEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {InputEmail} from "../../../src/component/snippet";

export default {
    title: 'Snippets/Inputs/InputEmail',
    component: InputEmail,
    argTypes: {}
} as ComponentMeta<typeof InputEmail>;

const Template: ComponentStory<typeof InputEmail> = (args) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return <InputEmail {...args} onChange={handleChange} value={value} />;
};

export const Default = Template.bind({});
Default.args = {
    placeholder: "Enter your Email",
    onChange: action('onChange')
};

export const Disabled = Template.bind({});
Disabled.args = {
    placeholder: "Enter your Email",
    onChange: action('onChange'),
    disabled: true
};

export const Small = Template.bind({});
Small.args = {
    placeholder: "Enter your Email",
    onChange: action('onChange'),
    small: true
};
