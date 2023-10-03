import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Alert, AlertSeverity} from '../../src/component/snippet';

export default {
    title: 'Snippets/Alert',
    component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Danger = Template.bind({});
Danger.args = {
    text: "Error message",
    severity: AlertSeverity.DANGER
};

export const Info = Template.bind({});
Info.args = {
    text: "Message for information purposes",
    severity: AlertSeverity.INFO
};

export const Success = Template.bind({});
Success.args = {
    text: "Success message",
    severity: AlertSeverity.SUCCESS
};

export const Warning = Template.bind({});
Warning.args = {
    text: "Warning message",
    severity: AlertSeverity.WARNING
};
