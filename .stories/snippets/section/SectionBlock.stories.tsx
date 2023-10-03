import React from "react";
import {action} from "@storybook/addon-actions"
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {BoxProps, Button, ButtonSize, Section1Col, SectionBlock, SectionCol} from "../../../src/component/snippet";

export default {
    title: "Snippets/Sections/SectionBlock",
    component: SectionBlock,
} as ComponentMeta<typeof SectionBlock>;

const Template: ComponentStory<typeof SectionBlock> = (args) => {
    return (
        <div className="main-content">
            <div className="sb-section-content-example">
                <h1>Section block example</h1>
                <Section1Col>
                    <SectionCol>
                        <SectionBlock {...args}>
                            <h2>Basic Content</h2>
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
                                semper, volutpat semper tellus lacinia. Nunc ne c
                                consectetur justo, in interdum enim. Aliquam et enim
                                imperdiet, feugiat velit ac, suscipit felis.
                            </p>
                        </SectionBlock>
                        <SectionBlock {...args} box={{...BoxProps.SECTION_BLOCK_WITH_SHADOW, onClick: action('onClick')}}>
                            <h2>Clickable Content</h2>
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
                        </SectionBlock>
                    </SectionCol>
                </Section1Col>
            </div>
        </div>
    );
};

export const Default: ComponentStory<typeof SectionBlock> = Template.bind({});

export const WithHeader: ComponentStory<typeof SectionBlock> = Template.bind({});
WithHeader.args = {
    header: {
        title: "My title",
        icon: {name: "info"},
        action: <Button size={ButtonSize.SMALL} icon={{name: "add_circle"}} onClick={action('onAdd')}>Add</Button>,
        link: "#my-content"
    }
}

export const WithFooter: ComponentStory<typeof SectionBlock> = Template.bind({});
WithFooter.args = {
    footer: {
        link: "#my-content",
        label: "Go to content",
        target: "_blank"
    }
}
