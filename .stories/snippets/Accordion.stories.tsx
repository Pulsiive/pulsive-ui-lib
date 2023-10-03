import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Accordion, AccordionItem, AccordionItemContent, Tag, TagSize, TagStyle} from '../../src/component/snippet';

export default {
    title: 'Snippets/Accordion',
    component: Accordion,
    parameters: {
        layout: 'fullscreen',
    }
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
    <div style={{width: '50vw', paddingTop: '100px', margin: '0 auto'}}>
        <Accordion {...args} />
    </div>
);

export const Default: ComponentStory<typeof Accordion> = Template.bind({});
Default.args = {
    children: <>
        <AccordionItem heading={"Title 1"} startOpen>
            <AccordionItemContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse 
                lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            </AccordionItemContent>
        </AccordionItem>
        <AccordionItem heading={"Title 2"}>
            <AccordionItemContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse 
                lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            </AccordionItemContent>
        </AccordionItem>
        <AccordionItem heading={"Title 3"}>
            <AccordionItemContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse 
                lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            </AccordionItemContent>
        </AccordionItem>
    </>
};

export const WithCustomHeader: ComponentStory<typeof Accordion> = Template.bind({});
WithCustomHeader.args = {
    children: <>
        <AccordionItem 
            heading={<Tag label='Couleurs' icon={{name: 'colorize'}} style={TagStyle.DEFAULT_OCEAN} size={TagSize.SMALL}/>} 
            startOpen
        >
            <AccordionItemContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse 
                lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            </AccordionItemContent>
        </AccordionItem>
        <AccordionItem
            heading={<Tag label='Polices' icon={{name: 'font_download'}} style={TagStyle.DEFAULT_OCEAN} size={TagSize.SMALL}/>} 
        >
            <AccordionItemContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse 
                lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            </AccordionItemContent>
        </AccordionItem>
        <AccordionItem 
            heading={<Tag label='Bordures' icon={{name: 'rounded_corner'}} style={TagStyle.DEFAULT_OCEAN} size={TagSize.SMALL}/>} 
        >
            <AccordionItemContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse 
                lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            </AccordionItemContent>
        </AccordionItem>
    </>
};
