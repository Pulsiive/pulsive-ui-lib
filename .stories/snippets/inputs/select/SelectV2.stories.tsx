import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {
    ButtonLink,
    FlexContent,
    FlexContentDirection,
    FlexContentSpacing, LayoutRows, Section2Cols, SectionCol,
    SelectOption,
    SelectV2
} from "../../../../src/component/snippet";
import {ResultRender} from "./selectUtils";

export default {
    title: 'Snippets/Inputs/Selects/SelectV2',
    component: SelectV2,
} as ComponentMeta<typeof SelectV2>;

const Template: ComponentStory<typeof SelectV2> = (args) => {
    const [selected, setSelected] = useState<SelectOption>();

    return (
        <div style={{width: "35vw"}}>
            <FlexContent direction={FlexContentDirection.ROW} spacing={FlexContentSpacing.SMALL}>
                <SelectV2 {...args} name="select-V2"
                          onChange={(newValue) => setSelected(newValue)}
                          value={selected?.value}/>
                {(selected && args.clearable) &&
                    <ButtonLink onClick={() => setSelected(undefined)}>Clear select</ButtonLink>
                }
            </FlexContent>
            <ResultRender result={selected}/>
        </div>
    );
};

export const StringOptions: ComponentStory<typeof SelectV2> = Template.bind({});
StringOptions.args = {
    options: [
        {value: "option 1", label: "This is the first option you can select"},
        {value: "option 2", label: "This is the second option you can select"},
        {value: "option 3", label: "This is the third option you can select"}
    ],
};

export const NumberOptions: ComponentStory<typeof SelectV2> = Template.bind({});
NumberOptions.args = {
    options: [
        {value: 1, label: "Option 1"},
        {value: 2, label: "Option 2"},
        {value: 3, label: "Option 3"}
    ],
};

export const Small: ComponentStory<typeof SelectV2> = Template.bind({});
Small.args = {
    options: [
        {value: "option 1", label: "Option 1"},
        {value: "option 2", label: "Option 2"},
        {value: "option 3", label: "Option 3"}
    ],
    small: true
};

export const Clearable: ComponentStory<typeof SelectV2> = Template.bind({});
Clearable.args = {
    options: [
        {value: "option 1", label: "Option 1"},
        {value: "option 2", label: "Option 2"},
        {value: "option 3", label: "Option 3"}
    ],
    clearable: true
};
