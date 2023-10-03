import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {AlertSeverity, Color, MainAlertBar} from "../../src";

export default {
    title: 'Snippets/MainAlertBar',
    component: MainAlertBar,
    parameters: {
        layout: 'fullscreen',
    }
} as ComponentMeta<typeof MainAlertBar>;

const Template: ComponentStory<typeof MainAlertBar> = (args) => {
    return (
        <MainAlertBar {...args}/>
    );
};

export const Default = Template.bind({});
Default.args = {
    text: "Main alert bar with default colors"
};

export const WithIconAndSeverity = Template.bind({});
WithIconAndSeverity.args = {
    text: "Main alert bar with icon and severity",
    severity: AlertSeverity.WARNING,
    icon: {name: "feedback", outlined: true}
};

export const WithIconAndColors = Template.bind({});
WithIconAndColors.args = {
    text: "Main alert bar with icon and custom colors",
    colors: {backgroundColor: Color.CORAL, color: Color.WHITE},
    icon: {name: "warning", outlined: true}
};
