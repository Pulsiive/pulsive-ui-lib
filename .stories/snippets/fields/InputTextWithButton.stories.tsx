import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {FormContainer, FormField, FormRow, InputTextWithButton} from '../../../src/component/snippet';

export default {
    title: 'Snippets/Fields/InputTextWithButton',
    component: InputTextWithButton,
    argTypes: {}
} as ComponentMeta<typeof InputTextWithButton>;

const Template: ComponentStory<typeof InputTextWithButton> = (args) => {
    return (
        <FormContainer>
            <FormRow>
                <FormField>
                    <InputTextWithButton {...args} />
                </FormField>
            </FormRow>
        </FormContainer>
    );
};

export const Default = Template.bind({});
Default.args = {
    input: {name: "input", placeholder: "Enter your value", onChange: () => {}},
    button: {children: "OK"}
};

export const Loading = Template.bind({});
Loading.args = {
    input: {name: "input", placeholder: "Enter your value", onChange: () => {}},
    button: {children: "OK", loading: true}
};


export const Small = Template.bind({});
Small.args = {
    input: {name: "input", placeholder: "Enter your value", onChange: () => {}, small: true},
    button: {children: "OK"}
};

export const SmallLoading = Template.bind({});
SmallLoading.args = {
    input: {name: "input", placeholder: "Enter your value", onChange: () => {}, small: true},
    button: {children: "OK", loading: true},
};
