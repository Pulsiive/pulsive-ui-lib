// @ts-ignore
import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Box, ContentBlock} from "../../../src";
import LayoutRows from "../../../src/component/snippet/flex-content/LayoutRows";


export default {
    title: 'Snippets/FlexContent/LayoutRows',
    component: LayoutRows,
} as ComponentMeta<typeof LayoutRows>;

const Template: ComponentStory<typeof LayoutRows>  = (args) => {
    return (
        <LayoutRows {...args}/>
    );
};

export const Default = Template.bind({});
Default.args = {
    children:
        [
            <ContentBlock header={{title: {label: "Basic Content"}}}>
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
            </ContentBlock>,
            <ContentBlock header={{title: {label: "Basic Content"}}}>
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
            </ContentBlock>
        ]
};