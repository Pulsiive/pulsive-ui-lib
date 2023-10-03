// import React from 'react';
// import {action} from '@storybook/addon-actions';
// import {ComponentMeta, ComponentStory} from '@storybook/react';

// import {InputDate, InputDateType, InputNumber, InputText, SearchField, Select} from "../../../src/component/snippet";

// export default {
//     title: 'Snippets/Search/SearchField',
//     component: SearchField,
//     argTypes: {}
// } as ComponentMeta<typeof SearchField>;

// const Template: ComponentStory<typeof SearchField> = (args) => <SearchField {...args} />;

// export const SearchFieldSelect = Template.bind({});
// SearchFieldSelect.args = {
//     name: "search-field-select",
//     label: "Search field select",
//     children: <Select name={"select"}
//                       value={""}
//                       options={[
//                           {value: "option 1", label: "Option 1"},
//                           {value: "option 2", label: "Option 2"}
//                       ]}
//                       onChange={action('onChange')}/>
// };

// export const SearchFieldText = Template.bind({});
// SearchFieldText.args = {
//     name: "search-field-text",
//     label: "Search field text",
//     children: <InputText name={"text"}
//                          placeholder={"value"}
//                          value={""}
//                          onChange={action('onChange')}/>
// };

// export const SearchFieldNumber = Template.bind({});
// SearchFieldNumber.args = {
//     name: "search-field-number",
//     label: "Search field number",
//     children: <InputNumber name={"number"}
//                            placeholder={"number"}
//                            value={undefined}
//                            onChange={action('onChange')}/>
// };

// export const SearchFieldDate = Template.bind({});
// SearchFieldDate.args = {
//     name: "search-field-date",
//     label: "Search field date",
//     children: <InputDate name={"date"}
//                          value={undefined}
//                          onChange={action('onChange')}/>
// };

// export const SearchFieldDateTime = Template.bind({});
// SearchFieldDateTime.args = {
//     name: "search-field-datetime",
//     label: "Search field datetime local",
//     children: <InputDate name={"date"}
//                          value={undefined}
//                          type={InputDateType.DATETIME_LOCAL}
//                          onChange={action('onChange')}/>
// };

// export const WithTooltip = Template.bind({});
// WithTooltip.args = {
//     name: "with-tooltip",
//     label: "Date",
//     tooltip: "Lorem ipsum",
//     children: <InputDate name={"date"}
//                          value={undefined}
//                          onChange={action('onChange')}/>
// };

