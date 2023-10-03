import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {FormContainer, FormField, FormFieldMessageProps, FormRow, SearchIds, SearchIdsResult} from '../../../src/component/snippet';
import {DEMO_USER_LIST} from "../DemoUserList";

export default {
    title: 'Snippets/Fields/SearchIds',
    component: SearchIds,
    argTypes: {}
} as ComponentMeta<typeof SearchIds>;

const Template: ComponentStory<typeof SearchIds> = (args) => {
    const [selectedItems, setSelectedItems] = useState<any[]>([]);
    const [searchIdResultMessages, setSearchIdResultMessages] = useState<FormFieldMessageProps[]>([]);
    const handleSubmit = (result: SearchIdsResult) => {
        setSelectedItems(prevState => [...prevState, ...result.matchedItems]);
        setSearchIdResultMessages(result.messages);
        setTimeout(() => {
            setSearchIdResultMessages([]);
        }, 5000);
    };

    return (
        <FormContainer>
            <FormRow>
                <FormField messages={searchIdResultMessages}>
                    <SearchIds {...args}
                               onSubmit={handleSubmit}
                               selectedItems={selectedItems}/>
                </FormField>
            </FormRow>
        </FormContainer>
    );
};

export const Default = Template.bind({});
Default.args = {
    value: "",
    items: DEMO_USER_LIST
};
