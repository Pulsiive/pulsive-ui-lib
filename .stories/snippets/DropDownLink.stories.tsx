import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {DropDownLink} from '../../src/component/snippet';

export default {
    title: 'Snippets/DropDownLink',
    component: DropDownLink,
    parameters: {
        layout: 'fullscreen',
    }
} as ComponentMeta<typeof DropDownLink>;

const Template: ComponentStory<typeof DropDownLink> = (args) => (
    <div style={{width: '50vw', paddingTop: '100px', margin: '0 auto'}}>
        <DropDownLink {...args} />
    </div>
);

export const Default: ComponentStory<typeof DropDownLink> = Template.bind({});
Default.args = {
    link: {children: <>En savoir plus</>},
    children:
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
            lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </span>
};