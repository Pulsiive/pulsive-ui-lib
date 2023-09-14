import React, {FunctionComponent} from 'react';
import {useTranslation} from "react-i18next";
import {TranslationLibFile, TranslationLibKey} from "../../utils/locale";
import ModalContent from "../snippet/modal/ModalContent";
import ModalDescription, {ModalDescriptionAlignment} from "../snippet/modal/ModalDescription";
import FormContainer from "../snippet/form/FormContainer";
import FormRow, {FormRowAlignment} from "../snippet/form/FormRow";
import FormButtons from "../snippet/form/FormButtons";
import Button, {ButtonSize, ButtonStyle} from "../snippet/Button";
import ModalNew from "./ModalNew";

type ModalSaveBeforeLeavingProps = {
    active: boolean;
    onSave: (e: React.MouseEvent) => void;
    onLeave: (e: React.MouseEvent) => void;
    onCancel: (e: React.MouseEvent) => void;
}

const ModalSaveBeforeLeaving: FunctionComponent<ModalSaveBeforeLeavingProps> = ({active, onSave, onLeave, onCancel}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    return (
        <ModalNew active={active} loading={false} subLink={{onClick: onLeave, label: t(TranslationLibKey.ACTION_QUIT_WITHOUT_SAVING)}}>
            <ModalContent>
                <FormContainer>
                    <FormRow alignment={FormRowAlignment.CENTER}>
                        <ModalDescription alignment={ModalDescriptionAlignment.CENTER}>
                            <span dangerouslySetInnerHTML={{__html: t(TranslationLibKey.MESSAGE_SAVE_BEFORE_LEAVING)}}/>
                        </ModalDescription>
                    </FormRow>
                    <FormRow alignment={FormRowAlignment.CENTER}>
                        <FormButtons>
                            <Button onClick={onCancel} size={ButtonSize.BIG} style={ButtonStyle.DEFAULT_MIDNIGHT}>{t(TranslationLibKey.ACTION_CANCEL)}</Button>
                            <Button onClick={onSave} size={ButtonSize.BIG} style={ButtonStyle.PRIMARY_GREEN}>{t(TranslationLibKey.ACTION_SAVE_AND_QUIT)}</Button>
                        </FormButtons>
                    </FormRow>
                </FormContainer>
            </ModalContent>
        </ModalNew>
    )
}

export default ModalSaveBeforeLeaving;
