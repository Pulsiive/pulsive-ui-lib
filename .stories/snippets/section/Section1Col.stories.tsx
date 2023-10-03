import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Section1Col, Section1ColJustify} from "../../../src/component/snippet";

export default {
    title: "Snippets/Sections/Section1Col",
    component: Section1Col,
} as ComponentMeta<typeof Section1Col>;

const Template: ComponentStory<typeof Section1Col> = (args) => {
    return (
        <div className="sb-section-1-col-example">
            <h1>Section with 1 column example</h1>
            <Section1Col {...args}>
                <div
                    style={{
                        height: "100px",
                        width: "50vw",
                        backgroundColor: "var(--color-grey)",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    Content
                </div>
            </Section1Col>
        </div>
    );
};

export const Default: ComponentStory<typeof Section1Col> = Template.bind({});

export const _Centered: ComponentStory<typeof Section1Col> = Template.bind({});
_Centered.args = {
    justifyContent: Section1ColJustify.CENTER
};
