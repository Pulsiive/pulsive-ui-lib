import React, {ChangeEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ColorPicker} from "../../../src/component/snippet";

export default {
    title: 'Snippets/Inputs/ColorPicker',
    component: ColorPicker,
    argTypes: {
        value: { control: 'disabled' }
    }
} as ComponentMeta<typeof ColorPicker>;

const Template: ComponentStory<typeof ColorPicker> = (args) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return <ColorPicker {...args} value={value} onChange={handleChange}/>;
};

export const Default = Template.bind({});
Default.args = {
    onChange: action('onChange')
};

export const Small = Template.bind({});
Small.args = {
    onChange: action('onChange'),
    small: true
};
