import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Button, Checkbox, InputText, RadioButtons, SearchField, SearchToolbar, SelectV2, ToggleSwitch} from "../../../src/component/snippet";

export default {
    title: 'Snippets/Search/SearchToolbar',
    component: SearchToolbar,
    argTypes: {}
} as ComponentMeta<typeof SearchToolbar>;

const Template: ComponentStory<typeof SearchToolbar> = (args) => {
    return <div style={{width: "90vw"}}><SearchToolbar {...args} /></div>;
};

export const Default = Template.bind({});
Default.args = {
    searchBar: {value: "", onChange: action('onChange'), placeholder: "Search for ..."},
};

export const WithAction = Template.bind({});
WithAction.args = {
    searchBar: {value: "", onChange: action('onChange'), placeholder: "Search for ..."},
    actions: [<Button icon={{name: "add_circle"}} onClick={action('onAdd')}>Add</Button>]
};

export const WithFilters = Template.bind({});
WithFilters.args = {
    searchBar: {value: "", onChange: action('onChange'), placeholder: "Search for ..."},
    actions: [<Button icon={{name: "add_circle"}} onClick={action('onAdd')}>Add</Button>],
    canHideFilters: true,
    onClearFilters: action('onClearFilters'),
    children:
        <>
            <SearchField label={"Select"} fixedWidth>
                <SelectV2 name="select-V2"
                          options={[
                              {value: "option 1", label: "Option 1"},
                              {value: "option 2", label: "Option 2"}
                          ]}
                          onChange={action('onChange')}
                          value={""} />
            </SearchField>
            <SearchField label={"Text"}>
                <InputText name={"text"}
                           placeholder={"Type text..."}
                           value={""}
                           onChange={action('onChange')}/>
            </SearchField>
            <SearchField label={"Checkbox"}>
                <Checkbox name={"checkbox"}
                          label={"Checkbox label"}
                          checked={false}
                          onChange={action('onChange')}/>
            </SearchField>
            <SearchField label={"Toggle Switch"}>
                <ToggleSwitch name={"toggle-switch"}
                              label={"Toggle switch label"}
                              checked={false}
                              onChange={action('onChange')}/>
            </SearchField>
            <SearchField label={"Radio Buttons"}>
                <RadioButtons name={"radios-button"}
                              value={"1"}
                              options={[
                                  {value: "1", label: "One"},
                                  {value: "2", label: "Two"}
                              ]}
                              onChange={action('onChange')}/>
            </SearchField>
        </>
};

export const WithSearchBarClearable = Template.bind({});
WithSearchBarClearable.args = {
    searchBar: {value: "", onSubmit: action('onChange'), placeholder: "Search for ..."},
    actions: [<Button icon={{name: "add_circle"}} onClick={action('onAdd')}>Add</Button>],
    canHideFilters: true,
    onClearFilters: action('onClearFilters'),
    children:
        <>
            <SearchField label={"Select"} fixedWidth>
                <SelectV2 name="select-V2"
                          options={[
                              {value: "option 1", label: "Option 1"},
                              {value: "option 2", label: "Option 2"}
                          ]}
                          onChange={action('onChange')}
                          value={""} />
            </SearchField>
            <SearchField label={"Text"}>
                <InputText name={"text"}
                           placeholder={"Type text..."}
                           value={""}
                           onChange={action('onChange')}/>
            </SearchField>
            <SearchField label={"Checkbox"}>
                <Checkbox name={"checkbox"}
                          label={"Checkbox label"}
                          checked={false}
                          onChange={action('onChange')}/>
            </SearchField>
            <SearchField label={"Toggle"}>
                <ToggleSwitch name={"toggle-switch"}
                              label={"Toggle label"}
                              checked={false}
                              onChange={action('onChange')}/>
            </SearchField>
            <SearchField label={"Radio Buttons"}>
                <RadioButtons name={"radios-button"}
                              value={""}
                              options={[
                                  {value: "1", label: "One"},
                                  {value: "2", label: "Two"}
                              ]}
                              onChange={action('onChange')}/>
            </SearchField>
        </>
};
