import React, {ChangeEvent, FunctionComponent, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {onKeyEnter} from "../../../utils/helper";
import {TranslationLibFile, TranslationLibKey} from '../../../utils/locale';
import {ButtonSize, ButtonStyle} from "../Button";
import {FormFieldMessageProps, FormFieldMessageType} from "../form/FormFieldMessage";
import InputTextWithButton from "./InputTextWithButton";

export type SearchIdsResult = {
    matchedItems: any[];
    alreadySelectedIds: string[];
    unmatchedIds: string[];
    messages: FormFieldMessageProps[];
};

type SearchIdsProps = {
    value?: string;
    onChange?: (query: string) => void;
    items: any[];
    selectedItems?: any[];
    idField?: string;
    placeholder?: string;
    onSubmit: (result: SearchIdsResult) => void;
    small?: boolean;
};

const SearchIds: FunctionComponent<SearchIdsProps> = ({value, onChange, items, selectedItems, idField, placeholder, onSubmit, small}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);
    const [isLoading, setLoading] = useState(false);
    const [query, setQuery] = useState<string>("");

    const ID_FIELD = idField || "id";
    const SEPARATOR = ",";

    useEffect(() => {
        setQuery(value || "");
    }, [value]);

    const handleChangeQuery = ({target}: ChangeEvent<HTMLInputElement>) => {
        const value = target.value.replaceAll(' ', ',');
        setQuery(value);
        onChange && onChange(value);
    };

    const handleSubmit = () => {
        if (!query) return;

        setLoading(true);
        let matchedItems: any[] = [];
        let alreadySelectedIds: string[] = [];
        let unmatchedIds: string[] = [];

        query.split(SEPARATOR).forEach(id => {
            if ([...alreadySelectedIds, ...unmatchedIds].includes(id) || [...matchedItems.map(it => Number(it[ID_FIELD]))].includes(Number(id))) return;
            if (selectedItems && !!selectedItems.find(it => Number(it[ID_FIELD]) === Number(id))) {
                alreadySelectedIds.push(id);
            } else {
                const item = items.find(it => Number(it[ID_FIELD]) === Number(id));
                if (item) {
                    matchedItems.push(item);
                } else {
                    unmatchedIds.push(id);
                }
            }
        });

        let messages: FormFieldMessageProps[] = [];
        if (matchedItems.length) {
            messages.push({
                message: t(TranslationLibKey.MESSAGE_ID_MATCHED, {count: matchedItems.length}),
                type: FormFieldMessageType.SUCCESS,
                active: true
            });
        }
        if (alreadySelectedIds.length) {
            messages.push({
                message: t(TranslationLibKey.MESSAGE_ID_ALREADY_SELECTED, {count: alreadySelectedIds.length, ids: alreadySelectedIds.join(`${SEPARATOR} `)}),
                type: FormFieldMessageType.WARNING,
                active: true
            });
        }
        if (unmatchedIds.length) {
            messages.push({
                message: t(TranslationLibKey.MESSAGE_ID_UNMATCHED, {count: unmatchedIds.length, ids: unmatchedIds.join(`${SEPARATOR} `)}),
                type: FormFieldMessageType.ERROR,
                active: true
            });
        }

        const result: SearchIdsResult = {matchedItems: matchedItems, alreadySelectedIds: alreadySelectedIds, unmatchedIds: unmatchedIds, messages: messages};
        onSubmit(result);
        setLoading(false);
    }

    return (
        <InputTextWithButton input={{
            name: "idsSearchQuery",
            value: query,
            placeholder: placeholder || t(TranslationLibKey.PLACEHOLDER_SEARCH_IDS),
            onKeyDown: (e) => onKeyEnter(e, handleSubmit),
            onChange: handleChangeQuery,
            small: small
        }} button={{
            size: small ? ButtonSize.SMALL : ButtonSize.MEDIUM,
            style: ButtonStyle.PRIMARY_MIDNIGHT,
            children: t(TranslationLibKey.ACTION_OK),
            onClick: handleSubmit,
            loading: isLoading
        }}/>
    )
};

export default SearchIds;
