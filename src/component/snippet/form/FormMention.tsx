import React, {FunctionComponent} from 'react';
import {TranslationLibFile, TranslationLibKey} from "../../../utils/locale";
import {useTranslation} from "react-i18next";

type FormMentionProps = {
    message?: string | React.ReactNode;
}

const FormMention: FunctionComponent<FormMentionProps> = ({message}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);
    return (
        <div className="form-mention">{message || t(TranslationLibKey.MESSAGE_INPUTS_REQUIRED)}</div>
    );
}

export default FormMention;
