import {Checkbox, ColorPicker, InfoValue, InputDate, InputEmail, InputNumber, InputPassword, InputText, NumberUnit, RadioButtons, Select, TagField, Textarea, ToggleOption, ToggleSwitch, UploadPanel, UploadLogo, SelectMultiple, SelectV2, InputAutocomplete, SelectAutocomplete} from "../../../src";
import { DEMO_USER_LIST } from "../DemoUserList";

export enum FormFieldContent {
    CHECKBOX = "Checkbox",
    COLOR_PICKER = "Color Picker",
    INFO_VALUE = "Info Value",
    INPUT_AUTOCOMPLETE = "Input Autocomplete",
    INPUT_DATE = "Input Date",
    INPUT_EMAIL = "Input Email",
    INPUT_NUMBER = "Input Number",
    INPUT_PASSWORD = "Input Password",
    INPUT_TEXT = "Input Text",
    NUMBER_UNIT = "Number Unit",
    RADIO_BUTTONS = "Radio Buttons",
    SELECT = "Select",
    SELECT_V2 = "Select V2",
    SELECT_AUTOCOMPLETE = "Select Autocomplete",
    SELECT_MULTIPLE = "Select Multiple",
    TAG_FIELD = "Tag Field",
    TEXTAREA = "Textarea",
    TOGGLE_OPTION = "Toggle Option",
    TOGGLE_SWITCH = "Toggle Switch",
    UPLOAD_LOGO = "Upload Logo",
    UPLOAD_PANEL = "Upload Panel"
}
export type FormFieldContentItem = {
    name: FormFieldContent;
    component: React.FunctionComponent<any>;
    props?: any;
}

export const FORM_FIELD_CONTENT_ITEMS: FormFieldContentItem[] = [
    {name: FormFieldContent.CHECKBOX, component: Checkbox, props: {label: "Checkbox", tooltip: "Some additional information on the purpose of this Checkbox"}},
    {name: FormFieldContent.COLOR_PICKER, component: ColorPicker, props: {value: "#5A6D90",onChange: () => {}}},
    {name: FormFieldContent.INFO_VALUE, component: InfoValue, props: {value: "Info Value"}},
    {name: FormFieldContent.INPUT_DATE, component: InputDate, props: {onChange: () => {}}},
    {name: FormFieldContent.INPUT_EMAIL, component: InputEmail, props: {placeholder: "Email", onChange: () => {}}},
    {name: FormFieldContent.INPUT_NUMBER, component: InputNumber, props: {placeholder: "Number"}},
    {name: FormFieldContent.INPUT_PASSWORD, component: InputPassword, props: {placeholder: "Password", onChange: () => {}}},
    {name: FormFieldContent.INPUT_TEXT, component: InputText, props: {placeholder: "Text", onChange: () => {}}},
    {name: FormFieldContent.INPUT_AUTOCOMPLETE, component: InputAutocomplete, props: {placeholder: "Type something...", options: [{value: "Adidas", label: "Adidas"},{value: "Nike", label: "Nike"},{value: "Puma", label: "Puma"},{value: "Nike", label: "Nike"},], onChange: () => {}}},
    {name: FormFieldContent.NUMBER_UNIT, component: NumberUnit, props: {label: "euro(s)"}},
    {name: FormFieldContent.RADIO_BUTTONS, component: RadioButtons, props: {options: [{value: "option 1", label: "Option 1"}, {value: "option 2", label: "Option 2"}], value: "option 1", onChange: () => {}}},
    {name: FormFieldContent.SELECT, component: Select, props: {options: [{value: "option 1", label: "Option 1"}, {value: "option 2", label: "Option 2"}]}},
    {name: FormFieldContent.SELECT_V2, component: SelectV2, props: {options: [{value: "option 1", label: "Option 1"}, {value: "option 2", label: "Option 2"}], selected: {value: "option 1", label: "Option 1"}, onChange: () => {}}},
    {name: FormFieldContent.SELECT_AUTOCOMPLETE, component: SelectAutocomplete, props: {options: DEMO_USER_LIST.map(it => ({ label: it.company, value: it.company })), onChange: () => {}}},
    {name: FormFieldContent.SELECT_MULTIPLE, component: SelectMultiple, props: {options: DEMO_USER_LIST.map(it => ({ label: it.company, value: it.company })), onChange: () => {}}},
    {name: FormFieldContent.TAG_FIELD, component: TagField, props: {label: "Tag"}},
    {name: FormFieldContent.TEXTAREA, component: Textarea, props: {placeholder: "Textarea", rows: 2, onChange: () => {}}},
    {name: FormFieldContent.TOGGLE_OPTION, component: ToggleOption, props: {firstOption: "Option 1", secondOption: "Option 2"}},
    {name: FormFieldContent.TOGGLE_SWITCH, component: ToggleSwitch, props: {label: "Toggle Switch", tooltip: "Some additional information on the purpose of this Toggle"}},
    {name: FormFieldContent.UPLOAD_LOGO, component: UploadLogo, props: {onChange: () => {}}},
    {name: FormFieldContent.UPLOAD_PANEL, component: UploadPanel, props: {onChange: () => {}}}
];

export const getFormFieldContentItem = (name: FormFieldContent): FormFieldContentItem | undefined => {
    return FORM_FIELD_CONTENT_ITEMS.find(it => it.name === name);
}