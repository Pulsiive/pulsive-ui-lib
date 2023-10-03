import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Icon, SearchAutocomplete, SearchAutocompleteItem, Tag} from '../../../src/component/snippet';
import {DEMO_USER_LIST} from "../DemoUserList";

export default {
    title: 'Snippets/Fields/SearchAutocomplete',
    component: SearchAutocomplete,
    argTypes: {}
} as ComponentMeta<typeof SearchAutocomplete>;

const Template: ComponentStory<typeof SearchAutocomplete> = (args) => {
    const [selectedItems, setSelectedItems] = useState<SearchAutocompleteItem[]>();
    const handleSelectItem = (item: SearchAutocompleteItem) => {
        let items = selectedItems ? [...selectedItems] : [];
        setSelectedItems([...items, item]);
    };

    return <SearchAutocomplete {...args}
                               onSelect={(item) => handleSelectItem(item)}
                               selectedItems={selectedItems}/>
};

export const Default = Template.bind({});
Default.args = {
    placeholder: "Type something...",
    items: DEMO_USER_LIST.map(user => {
        return {
            value: user,
            searchField: `${user.firstname} ${user.lastname} ${user.id}`,
            component:
                <>
                    <Tag label={user.id.toString()}/>
                    <span>{user.firstname} {user.lastname}</span>
                    <Icon name="add"/>
                </>
        }
    })
};
