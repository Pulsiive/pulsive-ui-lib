import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {Section3Cols, SectionCol} from "../../../src/component/snippet";

import "./sb-section.scss";

export default {
    title: "Snippets/Sections/Section3Cols",
    component: Section3Cols,
} as ComponentMeta<typeof Section3Cols>;

const Template: ComponentStory<typeof Section3Cols> = (args) => {
    return (
        <div className="sb-section-3-cols-example">
            <h1>Section with 3 columns example</h1>
            <Section3Cols {...args}>
                <SectionCol>
                    <div>
                        <h2>Section 1</h2>
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
                <SectionCol>
                    <div>
                        <h2>Section 3</h2>
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
            </Section3Cols>
        </div>
    );
};

export const Default: ComponentStory<typeof Section3Cols> = Template.bind({});
