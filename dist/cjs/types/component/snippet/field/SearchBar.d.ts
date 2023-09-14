import { FunctionComponent } from "react";
export declare type SearchBarProps = {
    value?: string;
    onChange: (query: string) => void;
    placeholder?: string;
    cssClass?: string;
    small?: boolean;
};
declare const SearchBar: FunctionComponent<SearchBarProps>;
export default SearchBar;
