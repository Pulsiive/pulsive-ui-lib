import React, {FunctionComponent} from 'react';
import {useTranslation} from "react-i18next";
import EmptyContentMessage from "./EmptyContentMessage";
import {SvgNoResult} from "../svg";
import {TranslationLibFile, TranslationLibKey} from "../../utils/locale";

type SearchErrorProps = {
    query?: string;
};

const SearchError: FunctionComponent<SearchErrorProps> = ({query}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);
    return (
        <EmptyContentMessage
            svg={SvgNoResult}
            message={query ? t(TranslationLibKey.MESSAGE_NO_RESULT_FOR_QUERY, {query: query}) : t(TranslationLibKey.MESSAGE_NO_RESULT)}
        />
    );
};

export default SearchError;
