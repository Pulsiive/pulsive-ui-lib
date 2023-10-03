import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Section1Col, SectionCol, SectionSeparator} from "../../../src/component/snippet";

export default {
    title: "Snippets/Sections/SectionSeparator",
    component: SectionSeparator,
} as ComponentMeta<typeof SectionSeparator>;

const Template: ComponentStory<typeof SectionSeparator> = () => {
    return (
        <div className="sb-section-separator-example">
            <h1>Section separator example</h1>
            <Section1Col>
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
                <SectionSeparator />
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
            </Section1Col>
        </div>
    );
};

export const Default: ComponentStory<typeof SectionSeparator> = Template.bind({});
