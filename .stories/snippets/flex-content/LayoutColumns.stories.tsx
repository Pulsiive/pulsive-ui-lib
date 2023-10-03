// @ts-ignore
import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Box, FlexContentMobileDirection} from "../../../src";
import LayoutColumns from "../../../src/component/snippet/flex-content/LayoutColumns";

export default {
    title: 'Snippets/FlexContent/LayoutColumns',
    component: LayoutColumns,
} as ComponentMeta<typeof LayoutColumns>;

const Template: ComponentStory<typeof LayoutColumns>  = (args) => {
    return (
        <LayoutColumns {...args}/>
    );
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
    children:
        [
            <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer sed porta risus. Nunc eu velit lobortis
            </Box>,
            <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer sed porta risus. Nunc eu velit lobortis
            </Box>
        ]
};

export const ReverseOnMobile = Template.bind({});
TwoColumns.args = {
    children:
        [
            <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer sed porta risus. Nunc eu velit lobortis
            </Box>,
            <Box>
                lobortis velit eu Nunc .risus porta sed Integer
                .elit adipiscing consectetur ,amet sit dolor ipsum Lorem
            </Box>
        ],
    mobileDirection: FlexContentMobileDirection.COLUMN_REVERSE
};

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
    children:
        [
            <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer sed porta risus. Nunc eu velit lobortis
            </Box>,
            <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer sed porta risus. Nunc eu velit lobortis
            </Box>,
            <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer sed porta risus. Nunc eu velit lobortis
            </Box>
        ]
};

export const FourColumns = Template.bind({});
FourColumns.args = {
    children:
        [
            <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer sed porta risus. Nunc eu velit lobortis
            </Box>,
            <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer sed porta risus. Nunc eu velit lobortis
            </Box>,
            <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer sed porta risus. Nunc eu velit lobortis
            </Box>,
            <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer sed porta risus. Nunc eu velit lobortis
            </Box>
        ]
};