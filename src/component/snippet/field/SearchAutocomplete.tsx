import React, {ChangeEvent, FunctionComponent, useEffect, useRef, useState} from "react";
import clsx from "clsx";
import {useTranslation} from "react-i18next";
import {onKeyEnter} from "../../../utils/helper";
import Icon from "../Icon";
import {TranslationLibFile, TranslationLibKey} from '../../../utils/locale';
import InputText from "../input/InputText";

export type SearchAutocompleteItem = {
    value: any;
    searchField: string;
    component?: React.ReactNode;
};

type SearchAutocompleteProps = {
    value?: string;
    onChange?: (query: string) => void;
    items: SearchAutocompleteItem[];
    selectedItems?: SearchAutocompleteItem[];
    onSelect: (item: SearchAutocompleteItem) => void;
    placeholder?: string;
    small?: boolean;
};

const SEARCH_RESULT_ID = "search-result-list";

const SearchAutocomplete: FunctionComponent<SearchAutocompleteProps> = ({value, onChange, items, selectedItems, onSelect, placeholder, small}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    const searchTimeout: any = useRef<any>();
    const [isSearchLoading, setSearchLoading] = useState(false);
    const [isShowSearchResult, setShowSearchResult] = useState(false);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<SearchAutocompleteItem[]>([]);
    const [searchResultIndex, setSearchResultIndex] = useState<number>(0);

    useEffect(() => {
        if (!searchQuery || !items.length) return;

        if (searchTimeout.current) {
            clearTimeout(searchTimeout.current);
            searchTimeout.current = undefined;
        }
        searchTimeout.current = setTimeout(() => {
            let newSearchResults = [...items];
            if (selectedItems) {
                newSearchResults = newSearchResults.filter(item => (
                    selectedItems.every(selectedItem => item.searchField !== selectedItem.searchField)
                ));
            }
            newSearchResults = newSearchResults.filter(item => item.searchField.toLowerCase().includes(searchQuery.toLowerCase()));

            setSearchResults(newSearchResults);
            setSearchLoading(false);
            searchTimeout.current = undefined;
        }, 300);
    }, [searchQuery, items, selectedItems]);

    useEffect(() => {
        setSearchQuery(value || "");
        setShowSearchResult(!!value);
        setSearchLoading(!!value);
    }, [value]);

    const handleChangeSearchQuery = ({target}: ChangeEvent<HTMLInputElement>) => {
        const query = target.value;
        setSearchQuery(query);
        onChange && onChange(query);
        if (!query) {
            setShowSearchResult(false);
            return;
        }

        setSearchLoading(true);
        setShowSearchResult(true);
    };

    const handleChangeSearchResultIndex = (searchResultIndex: number) => {
        setSearchResultIndex(searchResultIndex);
        let element = document.getElementById(SEARCH_RESULT_ID);
        if (element) {
            const searchResultHeight = element.clientHeight;
            const scrollHeight = element.scrollHeight;
            const averageSize = scrollHeight / searchResults.length;
            const searchResultPosition = searchResultIndex + 1

            if (averageSize * searchResultPosition > searchResultHeight / 2) {
                element.scroll(0, averageSize * searchResultPosition - searchResultHeight / 2);
            } else {
                element.scroll(0, 0);
            }
        }
    };

    const onKeyDownSearchQuery = (e: any) => {
        if (!!searchQuery && !!searchResults.length && isShowSearchResult) {
            const index = searchResultIndex;
            onKeyEnter(e, () => onSelect(searchResults[index]));
            if (e.key === 'ArrowDown' && index < searchResults.length - 1) {
                handleChangeSearchResultIndex(index + 1);
            }
            if (e.key === 'ArrowUp' && index !== 0) {
                handleChangeSearchResultIndex(index - 1);
            }
        }
    };

    return (
        <div className="search-bar"
             onClick={() => !!searchQuery && setShowSearchResult(true)}
             onFocus={() => !!searchQuery && setShowSearchResult(true)}
             onMouseLeave={() => setShowSearchResult(false)}
        >
            <InputText name={"search-bar-query"}
                       cssClass={clsx("search-bar-input", {"opened": isShowSearchResult})}
                       autoComplete={"off"}
                       placeholder={placeholder}
                       value={searchQuery}
                       onKeyDown={onKeyDownSearchQuery}
                       onChange={handleChangeSearchQuery}
                       small={small}
            />
            <ul id={SEARCH_RESULT_ID} className="search-bar-results" onBlur={() => setShowSearchResult(false)}>
                {isSearchLoading ?
                    <li><span>{t(TranslationLibKey.MESSAGE_LOADING_RESULT)}</span></li> :
                    (!!searchResults.length ?
                            <>
                                {searchResults.map((item, index) =>
                                    <li key={index} onClick={() => onSelect(item)} className={clsx({"selected": index === searchResultIndex})}>
                                        {item.component}
                                    </li>
                                )}
                            </> :
                            <li><span>{t(TranslationLibKey.MESSAGE_NO_RESULT_FOR_QUERY, {query: searchQuery})}</span></li>
                    )
                }
            </ul>
            <Icon name="search"/>
        </div>
    )
};

export default SearchAutocomplete;
