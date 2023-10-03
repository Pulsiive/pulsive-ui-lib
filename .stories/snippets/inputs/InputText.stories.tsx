import React, {ChangeEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {InputText} from "../../../src/component/snippet";
import {DEMO_USER_LIST} from "../DemoUserList";

export default {
    title: 'Snippets/Inputs/InputText',
    component: InputText,
    argTypes: {}
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return <InputText {...args} onChange={handleChange} value={value} />;
};

export const Default = Template.bind({});
Default.args = {
    placeholder: "Type something...",
    onChange: action('onChange')
};

export const WithDatalist = Template.bind({});
WithDatalist.args = {
    placeholder: "Type something...",
    onChange: action('onChange'),
    datalistOptions: DEMO_USER_LIST.map(({firstname, lastname}) => `${firstname} ${lastname}`)
};

export const Disabled = Template.bind({});
Disabled.args = {
    placeholder: "Type something...",
    onChange: action('onChange'),
    disabled: true
};

export const Small = Template.bind({});
Small.args = {
    placeholder: "Type something...",
    onChange: action('onChange'),
    small: true
};
