import React, { FunctionComponent } from 'react';
export declare type SearchFieldProps = {
    children: React.ReactElement;
    label: string;
    tooltip?: string;
    name?: string;
    fixedWidth?: boolean;
};
declare const SearchField: FunctionComponent<SearchFieldProps>;
export default SearchField;
