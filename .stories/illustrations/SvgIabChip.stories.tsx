import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {SvgIabChip} from "../../src/component/svg";

export default {
    title: "Illustrations/IabChip",
    component: SvgIabChip,
    argTypes: {
        currentColor: {control: "color"},
    },
} as ComponentMeta<typeof SvgIabChip>;

const Template: ComponentStory<typeof SvgIabChip> = (args) => (
    <div style={{width: "150px"}}>
        <SvgIabChip {...args} />
    </div>
);

export const svg = Template.bind({});
