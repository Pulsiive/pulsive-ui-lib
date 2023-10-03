import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {
    ButtonLink,
    FlexContent,
    FlexContentDirection, FlexContentSpacing,
    FormField,
    Section2Cols,
    SectionCol,
    SelectAutocomplete,
    SelectOption
} from "../../../../src/component/snippet";
import {ResultRender} from './selectUtils';
import {GroupBase, OptionsOrGroups} from 'react-select';

export default {
    title: 'Snippets/Inputs/Selects/SelectAutocomplete',
    component: SelectAutocomplete,
} as ComponentMeta<typeof SelectAutocomplete>;

const Template: ComponentStory<typeof SelectAutocomplete> = (args) => {
    const [selected, setSelected] = useState<SelectOption>();
    const [options, setOptions] = useState<OptionsOrGroups<SelectOption, GroupBase<SelectOption>>>([
        {
            label: "sport labels",
            options: [
                {value: "Adidas", label: "Adidas"},
                {value: "Nike", label: "Nike"},
                {value: "Puma", label: "Puma"},
                {value: "Venum", label: "Venum"}
            ]
        },
        {value: "Gify", label: "Gify"}
    ]);

    const handleCreate = (value: any) => {
        const newValue = {value, label: value};
        let newOptions = [...options];
        const index = newOptions.findIndex(it => it.label === "added");
        if (index !== -1) {
            newOptions[index] = {label: newOptions[index].label, options: [...newOptions[index].options, newValue]}
        } else {
            newOptions = [...newOptions, {label: "added", options: [newValue]}];
        }
        setOptions(newOptions);
        setSelected(newValue);
    };

    return (
        <div style={{width: "65vw", height: 'fit-content'}}>
            <FlexContent direction={FlexContentDirection.ROW} spacing={FlexContentSpacing.SMALL}>
                <SelectAutocomplete
                    {...args}
                    name="select-autocomplete"
                    onChange={(newValue) => setSelected(newValue)}
                    options={options}
                    value={selected?.value}
                    onCreate={handleCreate}
                />
                {(selected && args.clearable) &&
                    <ButtonLink onClick={() => setSelected(undefined)}>Clear select</ButtonLink>
                }
            </FlexContent>
            <ResultRender result={selected}/>
        </div>
    );
};

export const Default: ComponentStory<typeof SelectAutocomplete> = Template.bind({});
Default.args = {
    placeholder: "Select something...",
    reactSelectProps: {},
};

export const Clearable: ComponentStory<typeof SelectAutocomplete> = Template.bind({});
Clearable.args = {
    placeholder: "Select something...",
    clearable: true,
    reactSelectProps: {},
};

export const Creatable: ComponentStory<typeof SelectAutocomplete> = Template.bind({});
Creatable.args = {
    placeholder: "Select something...",
    clearable: true,
    creatable: true,
    reactSelectProps: {},
};
