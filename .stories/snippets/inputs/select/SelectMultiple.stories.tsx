import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {
    ButtonLink,
    FlexContent,
    FlexContentDirection, FlexContentSpacing,
    FormField,
    Section2Cols,
    SectionCol,
    SelectMultiple,
    SelectOption
} from "../../../../src/component/snippet";
import {ResultRender} from './selectUtils';

export default {
    title: 'Snippets/Inputs/Selects/SelectMultiple',
    component: SelectMultiple,
} as ComponentMeta<typeof SelectMultiple>;

const Template: ComponentStory<typeof SelectMultiple> = (args) => {
    const [selected, setSelected] = useState<SelectOption[]>([]);

    return (
        <div style={{width: "35vw"}}>
            <FlexContent direction={FlexContentDirection.ROW} spacing={FlexContentSpacing.SMALL}>
                <SelectMultiple {...args} name="select-multiple" onChange={(newValue) => setSelected(newValue)} values={selected.map(it => it.value)} />
                {!!selected.length &&
                    <ButtonLink onClick={() => setSelected([])}>Clear select</ButtonLink>
                }
            </FlexContent>
            <ResultRender result={selected} />
        </div>
    );
};

export const Default: ComponentStory<typeof SelectMultiple> = Template.bind({});
Default.args = {
    options: [
        {label: "Marc", value: "item 1", foo: 'bar'},
        {label: "Jean", value: "item 2"},
        {label: "Jeanne", value: "item 3"},
        {label: "Marcel", value: "item 4"},
        {label: "Jacques", value: "item 5"},
        {label: "Zoro", value: "item 6", isDisabled: true},
        {label: "Philippe", value: "item 7"},
        {label: "Zizou", value: "item 8"}
    ],
    placeholder: "Select something...",
    reactSelectProps: {},
};
