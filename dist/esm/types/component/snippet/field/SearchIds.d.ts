import { FunctionComponent } from "react";
import { FormFieldMessageProps } from "../form/FormFieldMessage";
export declare type SearchIdsResult = {
    matchedItems: any[];
    alreadySelectedIds: string[];
    unmatchedIds: string[];
    messages: FormFieldMessageProps[];
};
declare type SearchIdsProps = {
    value?: string;
    onChange?: (query: string) => void;
    items: any[];
    selectedItems?: any[];
    idField?: string;
    placeholder?: string;
    onSubmit: (result: SearchIdsResult) => void;
    small?: boolean;
};
declare const SearchIds: FunctionComponent<SearchIdsProps>;
export default SearchIds;
