import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ActionMenuIcon, ActionsMenu} from '../../src/component/snippet';

export default {
    title: 'Snippets/ActionsMenu',
    component: ActionsMenu,
} as ComponentMeta<typeof ActionsMenu>;

const Template: ComponentStory<typeof ActionsMenu> = (args) => <ActionsMenu {...args} />;

export const Default: ComponentStory<typeof ActionsMenu> = Template.bind({});
Default.args = {
    iconTooltip: { icon: {name: ActionMenuIcon.MORE}, text: 'Actions'},
    items: [
        {label: "Action 1", onClick: action('onClick Action 1')},
        {label: "Action 2", onClick: action('onClick Action 2')},
        {label: "Action 3", onClick: action('onClick Action 3')}
    ]
};
