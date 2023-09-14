import { FunctionComponent } from "react";
export declare type SearchBarClearableProps = {
    value?: string;
    onSubmit: (query: string) => void;
    placeholder?: string;
    cssClass?: string;
    small?: boolean;
};
declare const SearchBarClearable: FunctionComponent<SearchBarClearableProps>;
export default SearchBarClearable;
