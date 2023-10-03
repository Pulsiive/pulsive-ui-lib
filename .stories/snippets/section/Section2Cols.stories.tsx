import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Section2Cols, SectionCol} from "../../../src/component/snippet";
import {SvgRocket} from "../../../src/component/svg";

import "./sb-section.scss";

export default {
    title: "Snippets/Sections/Section2Cols",
    component: Section2Cols,
} as ComponentMeta<typeof Section2Cols>;

const Template: ComponentStory<typeof Section2Cols> = (args) => {
    return (
        <div className="sb-section-2-cols-example">
            <h1>Section with 2 columns example</h1>
            <Section2Cols {...args}>
                <SectionCol>
                    <SvgRocket />
                </SectionCol>
                <SectionCol>
                    <div>
                        <h2>Section 2</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer sed porta risus. Nunc eu velit lobortis,
                            scelerisque quam vitae, rhoncus sem. Sed tristique enim
                            nec imperdiet elementum. Nam ut eros et risus
                            pellentesque pharetra nec vel justo. Vivamus mattis
                            justo neque, at porttitor justo aliquet quis. Aenean
                            quis elit tellus. Integer volutpat turpis in sodales
                            finibus. Aenean facilisis suscipit erat vel molestie.
                            Etiam a pellentesque lorem. Nulla rutrum velit ac odio
                            semper, volutpat semper tellus lacinia. Nunc nec
                            consectetur justo, in interdum enim. Aliquam et enim
                            imperdiet, feugiat velit ac, suscipit felis.
                        </p>
                    </div>
                </SectionCol>
            </Section2Cols>
        </div>
    );
};

export const Default: ComponentStory<typeof Section2Cols> = Template.bind({});
