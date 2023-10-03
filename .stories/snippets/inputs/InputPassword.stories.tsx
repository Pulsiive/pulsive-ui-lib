import React, {ChangeEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {InputPassword} from "../../../src/component/snippet";

export default {
    title: 'Snippets/Inputs/InputPassword',
    component: InputPassword,
    argTypes: {}
} as ComponentMeta<typeof InputPassword>;

const Template: ComponentStory<typeof InputPassword> = (args) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return <InputPassword {...args} onChange={handleChange} value={value} />;
};

export const Default = Template.bind({});
Default.args = {
    placeholder: "Enter your Password",
    onChange: action('onChange')
};

export const Small = Template.bind({});
Small.args = {
    placeholder: "Enter your Password",
    onChange: action('onChange'),
    small: true
};
