import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Color} from "../../src/utils/color";
import {MainPageHeader} from "../../src/component/snippet";

export default {
    title: "Snippets/MainPageHeader",
    component: MainPageHeader,
    parameters: {
        layout: "fullscreen",
    },
} as ComponentMeta<typeof MainPageHeader>;

const Template: ComponentStory<typeof MainPageHeader> = (args) => (
    <div className="main-content main-content-narrow">
        <MainPageHeader {...args} />
    </div>
);

export const Default: ComponentStory<typeof MainPageHeader> = Template.bind({});
Default.args = {
    title: "Main page title",
    icon: {name: "favorite"},
};

export const WithColorIcon: ComponentStory<typeof MainPageHeader> = Template.bind({});
WithColorIcon.args = {
    title: "Main page title",
    icon: {name: "receipt_long", outlined: true, colorIcon: Color.CYAN}
};
