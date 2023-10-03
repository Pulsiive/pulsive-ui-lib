import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Box} from "../../../src";
import {FlexContent, FlexContentAlignment, FlexContentDirection, FlexContentSpacing} from "../../../src/index";

export default {
    title: 'Snippets/FlexContent/FlexContent',
    component: FlexContent,
} as ComponentMeta<typeof FlexContent>;

const Template: ComponentStory<typeof FlexContent> = (args) => {
    return (
        <FlexContent {...args} />
    );
};

const smallBox = () => {
    return (
        <Box>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer sed porta risus. Nunc eu velit lobortis,
        </Box>
    );
};

const mediumBox = () => {
    return (
        <Box>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer sed porta risus. Nunc eu velit lobortis,
            scelerisque quam vitae, rhoncus sem. Sed tristique enim
            nec imperdiet elementum. Nam ut eros et risus
            pellentesque pharetra nec vel justo. Vivamus mattis
            justo neque, at porttitor justo aliquet quis. Aenean
        </Box>
    );
};

const bigBox = () => {
    return (
        <Box>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer sed porta risus. Nunc eu velit lobortis,
            scelerisque quam vitae, rhoncus sem. Sed tristique enim
            nec imperdiet elementum. Nam ut eros et risus
            pellentesque pharetra nec vel justo. Vivamus mattis
            justo neque, at porttitor justo aliquet quis. Aenean
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer sed porta risus. Nunc eu velit lobortis,
            scelerisque quam vitae, rhoncus sem. Sed tristique enim
            nec imperdiet elementum. Nam ut eros et risus
            pellentesque pharetra nec vel justo. Vivamus mattis
            justo neque, at porttitor justo aliquet quis. Aenean
        </Box>
    );
};

export const Default: ComponentStory<typeof FlexContent> = Template.bind({});
Default.args = {
    children:
        [
            mediumBox(),
            bigBox(),
            smallBox()
        ]
};

export const DirectionColumnWithSpacingMedium: ComponentStory<typeof FlexContent> = Template.bind({});
DirectionColumnWithSpacingMedium.args = {
    direction: FlexContentDirection.COLUMN,
    spacing: FlexContentSpacing.MEDIUM,
    children:
        [
            smallBox(),
            smallBox(),
        ]
};

export const DirectionRowWithAlignCenter: ComponentStory<typeof FlexContent> = Template.bind({});
DirectionRowWithAlignCenter.args = {
    direction: FlexContentDirection.ROW,
    alignment: FlexContentAlignment.CENTER,
    spacing: FlexContentSpacing.LARGE,
    children:
        [
            mediumBox(),
            bigBox()
        ]
};
