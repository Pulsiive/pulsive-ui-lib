import React, { FunctionComponent } from "react";
export declare type SearchAutocompleteItem = {
    value: any;
    searchField: string;
    component?: React.ReactNode;
};
declare type SearchAutocompleteProps = {
    value?: string;
    onChange?: (query: string) => void;
    items: SearchAutocompleteItem[];
    selectedItems?: SearchAutocompleteItem[];
    onSelect: (item: SearchAutocompleteItem) => void;
    placeholder?: string;
    small?: boolean;
};
declare const SearchAutocomplete: FunctionComponent<SearchAutocompleteProps>;
export default SearchAutocomplete;
