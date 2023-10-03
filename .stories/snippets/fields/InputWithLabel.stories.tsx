import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {InputNumberNew, InputNumber, InputWithLabel, Select} from "../../../src/component/snippet";

export default {
    title: 'Snippets/Fields/InputWithLabel',
    component: InputWithLabel,
} as ComponentMeta<typeof InputWithLabel>;

const Template: ComponentStory<typeof InputWithLabel> = (args) => <InputWithLabel {...args}/>;

export const WithInputNumber = Template.bind({});
WithInputNumber.args = {
    label: "euro(s)",
    children: <InputNumber name={"number"}
                           value={undefined}
                           onChange={action('onChange')}/>
};

export const WithInputNumberSmall = Template.bind({});
WithInputNumberSmall.args = {
    label: "euro(s)",
    children: <InputNumber name={"number"}
                           value={undefined}
                           onChange={action('onChange')} small/>
};

export const WithInputNumberNew = Template.bind({});
WithInputNumberNew.args = {
    label: "euro(s)",
    children: <InputNumberNew name={"integer"}
                           value={undefined}
                           onChange={action('onChange')}/>
};

export const WithSelect = Template.bind({});
WithSelect.args = {
    label: "euro(s)",
    children: <Select name={"select"}
                      value={""}
                      options={[
                          {value: "1", label: "1"},
                          {value: "2", label: "2"}
                      ]}
                      onChange={action('onChange')}/>
};

