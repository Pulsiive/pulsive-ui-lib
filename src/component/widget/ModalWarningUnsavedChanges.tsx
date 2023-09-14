import React, {FunctionComponent} from 'react';
import {useTranslation} from "react-i18next";
import {TranslationLibFile, TranslationLibKey} from "../../utils/locale";
import ModalConfirmMessage from "./ModalConfirmMessage";
import {ButtonSize, ButtonStyle} from "../snippet";

type ModalWarningUnsavedChangesProps = {
    active: boolean;
    onCancel: (e: React.MouseEvent) => void;
    onConfirm: (e: React.MouseEvent) => void;
}

const ModalWarningUnsavedChanges: FunctionComponent<ModalWarningUnsavedChangesProps> = ({active, onCancel, onConfirm}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    return <ModalConfirmMessage active={active}
                                cancel={{onClick: onCancel, size: ButtonSize.BIG, style: ButtonStyle.PRIMARY_MIDNIGHT, children: t(TranslationLibKey.ACTION_CANCEL)}}
                                confirm={{onClick: onConfirm, size: ButtonSize.BIG, style: ButtonStyle.DEFAULT_MIDNIGHT, children: t(TranslationLibKey.ACTION_QUIT)}}
                                message={t(TranslationLibKey.MESSAGE_WARNING_UNSAVED_CHANGES)}/>;
}

export default ModalWarningUnsavedChanges;
