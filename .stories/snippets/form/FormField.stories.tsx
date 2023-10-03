import React, {ChangeEvent, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {AlertSeverity, FormContainer, FormField, FormFieldMessageProps, FormFieldMessageType, FormFieldTitleFields, FormRow, FormRowSeparator, FormRowTitle, InputText, Select, ToggleSwitch, FormRowAlignment, FormGroup, Alert, Section2Cols, SectionCol, Section2ColsAlignment, Section2ColsLayout} from "../../../src/component/snippet";
import {FORM_FIELD_CONTENT_ITEMS, FormFieldContent, FormFieldContentItem, getFormFieldContentItem} from "./FormFieldContent";
import {FORM_FIELD_TITLE_ACTION_ITEMS, FormFieldTitleAction, getFormFieldTitleAction} from "./FormFieldTitleAction";

export default {
    title: 'Snippets/Form/FormField',
    component: FormContainer,
    argTypes: {}
} as ComponentMeta<typeof FormContainer>;

const Template: ComponentStory<typeof FormContainer> = () => {
    const [selectedFieldContentItem, setSelectedFieldContentItem] = useState<FormFieldContentItem>(FORM_FIELD_CONTENT_ITEMS[0]);

    const [formFieldTitle, setFormFieldTitle] = useState<FormFieldTitleFields>({label: `Form field ${FORM_FIELD_CONTENT_ITEMS[0].name.toLowerCase()}`});
    const [selectedFieldTitleAction, setSelectedFieldTitleAction] = useState<FormFieldTitleAction>(FormFieldTitleAction.NONE);

    const [formFieldMessage, setFormFieldMessage] = useState<FormFieldMessageProps>({message: "", active: false});

    const [isInline, setInline] = useState<boolean>(false);

    const handleChangeFieldContent = ({target}: ChangeEvent<HTMLSelectElement>) => {
        const formFieldContentItem = getFormFieldContentItem(target.value as FormFieldContent);
        if (formFieldContentItem) {
            setSelectedFieldContentItem(formFieldContentItem);
            setFormFieldTitle({...formFieldTitle, label: `Form field ${formFieldContentItem.name.toLowerCase()}`});
        }
    };

    const handleChangeFieldTitle = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        let {name, value} = e.currentTarget;
        if (name === "actions") {
            setSelectedFieldTitleAction(value as FormFieldTitleAction);
            setFormFieldTitle({...formFieldTitle, actions: getFormFieldTitleAction(value as FormFieldTitleAction)});
        } else {
            setFormFieldTitle({...formFieldTitle, [name]: value});
        }
    };

    const handleChangeFieldMessage = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        let {name, value} = e.currentTarget;
        if (name === "message") {
            setFormFieldMessage({...formFieldMessage, message: value, active: !!value.length} as FormFieldMessageProps);
        } else {
            setFormFieldMessage({...formFieldMessage, [name]: value} as FormFieldMessageProps);
        }
    };

    return (
        <div style={{width: "95vw", height: 'fit-content'}}>
            <Section2Cols layout={Section2ColsLayout.WIDE_LEFT} alignment={Section2ColsAlignment.TOP}>
                <SectionCol>
                    <div style={{ borderRight: '10px solid var(--color-grey-light)'}}>
                        <FormContainer>
                            <FormRowTitle>
                                Customise your field and see the result 👉
                            </FormRowTitle>
                            <FormRow alignment={FormRowAlignment.CENTER}>
                                <FormGroup>
                                    <Alert text={"Les champs avec la mention * sont obligatoires."} severity={AlertSeverity.INFO}/>
                                </FormGroup>
                            </FormRow>
                            <FormRow>
                                <FormField name="selectedFieldContentItem" title={{label: "Field selected"}} required>
                                    <Select
                                        name={"selectedFieldContentItem"}
                                        value={selectedFieldContentItem.name}
                                        options={FORM_FIELD_CONTENT_ITEMS.map(({name}) => ({value: name, label: name}))}
                                        onChange={handleChangeFieldContent}/>
                                </FormField>
                                <FormField name="label" title={{label: "Field title label"}}>
                                    <InputText name={"label"} value={formFieldTitle.label} placeholder={"Label"} onChange={handleChangeFieldTitle}/>
                                </FormField>
                            </FormRow>
                            <FormRow>
                                <FormField name="actions" title={{label: "Field title action"}}>
                                    <Select
                                        name={"actions"}
                                        value={selectedFieldTitleAction}
                                        options={FORM_FIELD_TITLE_ACTION_ITEMS.map(({name}) => ({value: name, label: name}))}
                                        onChange={handleChangeFieldTitle}/>
                                </FormField>
                                <FormField name="tooltip" title={{label: "Field title tooltip"}}>
                                    <InputText name={"tooltip"} value={formFieldTitle.tooltip} placeholder={"Tooltip text"} onChange={handleChangeFieldTitle}/>
                                </FormField>
                            </FormRow>
                            <FormRow>
                                <FormField name="message" title={{label: "Field message"}}>
                                    <InputText name={"message"} value={formFieldMessage?.message} placeholder={"Message"} onChange={handleChangeFieldMessage}/>
                                </FormField>
                                <FormField name="type" title={{label: "Field message type"}}>
                                    <Select
                                        name={"type"}
                                        value={formFieldMessage?.type || ""}
                                        options={[
                                            {value: "", label: "None"},
                                            {value: FormFieldMessageType.ERROR, label: "Error"},
                                            {value: FormFieldMessageType.SUCCESS, label: "Success"},
                                            {value: FormFieldMessageType.WARNING, label: "Warning"},
                                        ]}
                                        onChange={handleChangeFieldMessage}/>
                                </FormField>
                            </FormRow>
                            <FormRow>
                                <FormField name="is_inline" title={{label: "Inline field"}}>
                                    <ToggleSwitch label={"Inline"} name={"is_inline"} checked={isInline} onChange={() => setInline(prevState => !prevState)}/>
                                </FormField>
                            </FormRow>
                        </FormContainer>
                    </div>
                </SectionCol>
                <SectionCol>
                    <div>
                        <FormContainer>
                            <FormRowTitle>Result</FormRowTitle>
                            <FormRowSeparator/>
                            <FormRow>
                            <FormField name={selectedFieldContentItem.name.toLowerCase().replace(/ /, '-')} title={formFieldTitle} messages={formFieldMessage?.message ? [formFieldMessage] : undefined} inline={isInline}>
                                    {React.createElement(selectedFieldContentItem.component, {...selectedFieldContentItem.props, name: selectedFieldContentItem.name.toLowerCase().replace(/ /, '-')})}
                                </FormField>
                            </FormRow>
                        </FormContainer>
                    </div>
                </SectionCol>
            </Section2Cols>
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {};
