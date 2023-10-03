// import React from 'react';
// import {action} from '@storybook/addon-actions';
// import {ComponentMeta, ComponentStory} from '@storybook/react';

// import {Icon, Tooltip} from '../../src/component/snippet';

// export default {
//   title: 'Snippets/Tooltips/Tooltip',
//   component: Tooltip,
//   argTypes: {
//     children: { control: 'disabled' }
//   }
// } as ComponentMeta<typeof Tooltip>;

// const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   children: 'Mon texte avec tooltip',
//   text: 'Ceci est un tooltip message',
// };

// export const IconTooltip = Template.bind({});
// IconTooltip.args = {
//   children: <Icon name="delete" />,
//   text: 'Ceci est un tooltip message',
// };

// export const IconTooltipClickable = Template.bind({});
// IconTooltipClickable.args = {
//   children: <Icon name="delete" />,
//   text: 'Ceci est un tooltip message',
//   onClick: action('onClick')
// };
