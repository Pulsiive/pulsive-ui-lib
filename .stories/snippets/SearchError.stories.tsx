import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {SearchError} from "../../src/component/snippet";

export default {
    title: "Snippets/SearchError",
    component: SearchError,
} as ComponentMeta<typeof SearchError>;

const Template: ComponentStory<typeof SearchError> = (args) => <SearchError {...args}/>;

export const Default = Template.bind({});

export const WithQuery = Template.bind({});
WithQuery.args = {
    query: "search word"
};
