import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ToggleOption} from "../../../src/component/snippet";

export default {
    title: 'Snippets/Fields/ToggleOption',
    component: ToggleOption,
    argTypes: {}
} as ComponentMeta<typeof ToggleOption>;

const Template: ComponentStory<typeof ToggleOption> = (args) => {
    const [bool, setBool] = useState(true);

    return <ToggleOption {...args} onClick={setBool} isFirstOption={bool} />;
};

export const Default = Template.bind({});
Default.args = {
    firstOption: "Option 1",
    secondOption: "Option 2"
};

export const _Slim = Template.bind({});
_Slim.args = {
    firstOption: "Option 1",
    secondOption: "Option 2",
    slim: true
};
