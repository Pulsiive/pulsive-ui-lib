import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {InputPhone, InputPhoneLocale} from "../../../src/component/snippet";

export default {
    title: 'Snippets/Inputs/InputPhone',
    component: InputPhone,
    argTypes: {}
} as ComponentMeta<typeof InputPhone>;

const Template: ComponentStory<typeof InputPhone> = (args) => {
    const [value, setValue] = useState("");
    const [country, setCountry] = useState<string>();

    return <InputPhone {...args} onChange={setValue} value={value} onCountryChange={setCountry} country={country}/>;
};

export const Default = Template.bind({});
Default.args = {
    name: "input-phone",
    placeholder: "Enter your Phone Number",
    onChange: action('onChange')
};

export const FrenchLocale = Template.bind({});
FrenchLocale.args = {
    name: "input-phone",
    placeholder: "Entrer votre Numéro",
    onChange: action('onChange'),
    locale: InputPhoneLocale.FRENCH
};

export const Small = Template.bind({});
Small.args = {
    name: "input-phone",
    placeholder: "Enter your Phone Number",
    onChange: action('onChange'),
    small: true
};
