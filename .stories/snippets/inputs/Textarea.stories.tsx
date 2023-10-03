import React, {ChangeEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Textarea} from "../../../src/component/snippet";

export default {
    title: 'Snippets/Inputs/Textarea',
    component: Textarea,
    argTypes: {}
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);

    return <Textarea {...args} onChange={handleChange} value={value} />;
};

export const Default = Template.bind({});
Default.args = {
    placeholder: "Type something...",
    rows: 3,
    onChange: action('onChange')
};

export const Disabled = Template.bind({});
Disabled.args = {
    placeholder: "Type something...",
    rows: 3,
    onChange: action('onChange'),
    disabled: true
};

export const Small = Template.bind({});
Small.args = {
    placeholder: "Type something...",
    rows: 3,
    onChange: action('onChange'),
    small: true
};