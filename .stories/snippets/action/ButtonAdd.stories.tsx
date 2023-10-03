import React from "react";
import {action} from "@storybook/addon-actions";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {ButtonAdd} from "../../../src/component/snippet";

export default {
    title: "Snippets/Actions/ButtonAdd",
    component: ButtonAdd,
} as ComponentMeta<typeof ButtonAdd>;

const Template: ComponentStory<typeof ButtonAdd> = (args) => (
    <ButtonAdd {...args} />
);

export const Default = Template.bind({});
Default.args = {
    onClick: action("onClick")
};
