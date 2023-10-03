import React, {ChangeEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {InputDate, InputDateType} from "../../../src/component/snippet";

export default {
    title: 'Snippets/Inputs/InputDate',
    component: InputDate,
    argTypes: {}
} as ComponentMeta<typeof InputDate>;

const Template: ComponentStory<typeof InputDate> = (args) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return <InputDate {...args} onChange={handleChange} value={value} />;
};

export const Default = Template.bind({});
Default.args = {
    name: "input-date",
    onChange: action('onChange'),
    min: new Date()
};

export const DatetimeLocal = Template.bind({});
DatetimeLocal.args = {
    name: "input-datetime-local",
    onChange: action('onChange'),
    type: InputDateType.DATETIME_LOCAL,
    min: new Date()
};

export const Disabled = Template.bind({});
Disabled.args = {
    name: "input-date",
    onChange: action('onChange'),
    disabled: true
};

export const Small = Template.bind({});
Small.args = {
    name: "input-date",
    onChange: action('onChange'),
    small: true
};
