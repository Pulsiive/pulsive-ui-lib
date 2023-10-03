import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Tag, TagSize, TagStyle, TagTextTransform} from "../../src/component/snippet";

export default {
    title: "Snippets/Tag",
    component: Tag,
    argTypes: {
        icon: { control: 'object' },
        style: { control: { type: 'select', options: TagStyle } },
        size: { control: { type: 'select', options: TagSize } },
        textTransform: { control: { type: 'select', options: TagTextTransform } },
        customColor: { control: 'object' },
        highlighted: { control: 'boolean' },
        disabled: { control: 'boolean' }
    },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
    <Tag {...args} />
);

export const Default = Template.bind({});
Default.args = {
    label: "Label"
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    label: "delete",
    icon: {name: 'delete'}
};

export const Clickable = Template.bind({});
Clickable.args = {
    label: "Delete",
    icon: {name: 'delete'},
    onClick: () => {}
};

export const WithCustomColor = Template.bind({});
WithCustomColor.args = {
    label: "Label",
    customColor: {backgroundColor: "var(--color-orange-dark)", color: "var(--color-white)", borderColor: "var(--color-orange-dark)"}
};

export const WithClickableIcon = Template.bind({});
WithClickableIcon.args = {
    label: "Remove",
    reverse: true,
    icon: {name: 'close', onClick: () => {}}
};
