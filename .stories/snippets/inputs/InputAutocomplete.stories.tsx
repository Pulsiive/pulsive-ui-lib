import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Color} from '../../../src';
import {Section2Cols, SectionCol, InputAutocomplete, SelectOption, FormField} from "../../../src/component/snippet";

export default {
    title: 'Snippets/Inputs/InputAutocomplete',
    component: InputAutocomplete,
} as ComponentMeta<typeof InputAutocomplete>;

const Template: ComponentStory<typeof InputAutocomplete> = (args) => {
    const [selected, setSelected] = useState<SelectOption | undefined>();

    const ResultRender = ({result}: {result: SelectOption | undefined}) => 
        <pre 
            style={{ 
            backgroundColor: Color.BLACK_LIGHT,
            color: Color.CYAN, 
            marginTop: '2rem',
            padding: '1rem',
        }}>
            <span style={{color: Color.GREY_DARK}}># Selected</span><br/>
            {JSON.stringify(result, null, 2)}
        </pre>;

    return (
        <div style={{width: "65vw", height: 'fit-content'}}>
            <Section2Cols>
                <SectionCol>
                    <FormField name="input-autocomplete" title={{label: 'Input autocomplete'}}>
                        <InputAutocomplete {...args} name="input-autocomplete" onChange={setSelected} selected={selected} />
                    </FormField>
                </SectionCol>
                <SectionCol>
                    <ResultRender result={selected} />
                </SectionCol>
            </Section2Cols>
        </div>
    );
};

export const Default: ComponentStory<typeof InputAutocomplete> = Template.bind({});
Default.args = {
    options: [
        {value: "Adidas", label: "Adidas"},
        {value: "Nike", label: "Nike"},
        {value: "Puma", label: "Puma"},
        {value: "Venum", label: "Venum"}
    ],
    placeholder: "Write something...",
    reactSelectProps: {},
};

export const Clearable: ComponentStory<typeof InputAutocomplete> = Template.bind({});
Clearable.args = {
    options: [
        {value: "Adidas", label: "Adidas"},
        {value: "Nike", label: "Nike"},
        {value: "Puma", label: "Puma"},
        {value: "Venum", label: "Venum"}
    ],
    placeholder: "Write something...",
    clearable: true,
    reactSelectProps: {},
};

export const Creatable: ComponentStory<typeof InputAutocomplete> = Template.bind({});
Creatable.args = {
    options: [
        {value: "Adidas", label: "Adidas"},
        {value: "Nike", label: "Nike"},
        {value: "Puma", label: "Puma"},
        {value: "Venum", label: "Venum"}
    ],
    placeholder: "Write something...",
    clearable: true,
    creatable: true,
    reactSelectProps: {},
};
