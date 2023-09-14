import React, { FunctionComponent } from 'react';
import { SearchBarProps } from "../field/SearchBar";
import { SearchBarClearableProps } from "../field/SearchBarClearable";
declare type SearchToolbarProps = {
    searchBar?: SearchBarProps | SearchBarClearableProps;
    actions?: React.ReactNode[];
    children?: React.ReactNode;
    canHideFilters?: boolean;
    onClearFilters?: (e: React.MouseEvent) => void;
    themeWhite?: boolean;
};
declare const SearchToolbar: FunctionComponent<SearchToolbarProps>;
export default SearchToolbar;
