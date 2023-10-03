import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {InputNumberNew} from "../../../src/component/snippet";

export default {
    title: 'Snippets/Inputs/InputNumberNew',
    component: InputNumberNew,
    argTypes: {}
} as ComponentMeta<typeof InputNumberNew>;

const Template: ComponentStory<typeof InputNumberNew> = (args) => {
    const [value, setValue] = useState<number>();

    return <InputNumberNew {...args} onChange={(value: number) => setValue(value)} value={value}/>;
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
