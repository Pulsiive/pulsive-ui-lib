import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {GoToTop} from "../../src/component/snippet";
import {Color} from "../../src/utils/color";

export default {
    title: "Snippets/GoToTop",
    component: GoToTop,
    parameters: {
        layout: "fullscreen",
        controls: {hideNoControlsWarning: true},
    },
} as ComponentMeta<typeof GoToTop>;

const Template: ComponentStory<typeof GoToTop> = () => {
    return (
        <div style={{height: "200vh", textAlign: "center", paddingTop: "100px"}}>
            <h1 style={{color: Color.GREEN}}>Go to top</h1>
            <p>Scroll to the bottom !</p>
            <GoToTop />
        </div>
    );
};

export const Default = Template.bind({});
