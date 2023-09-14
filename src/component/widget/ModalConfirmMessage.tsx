import React, {FunctionComponent} from 'react';
import {useTranslation} from "react-i18next";
import ModalNew from "./ModalNew";
import {TranslationLibFile, TranslationLibKey} from "../../utils/locale";
import FormContainer from "../snippet/form/FormContainer";
import FormRow, {FormRowAlignment} from "../snippet/form/FormRow";
import ModalContent from "../snippet/modal/ModalContent";
import ModalDescription, {ModalDescriptionAlignment} from "../snippet/modal/ModalDescription";
import FormButtons from "../snippet/form/FormButtons";
import Button, {ButtonProps, ButtonSize, ButtonStyle} from "../snippet/Button";

type ModalConfirmMessageProps = {
    message: string;
    confirm: ButtonProps;
    cancel: ButtonProps;
    active: boolean;
};

const ModalConfirmMessage: FunctionComponent<ModalConfirmMessageProps> = ({message, confirm, cancel, active}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    return (
        <ModalNew onClose={cancel.onClick} active={active} loading={false}>
            <ModalContent>
                <FormContainer>
                    <FormRow alignment={FormRowAlignment.CENTER}>
                        <ModalDescription alignment={ModalDescriptionAlignment.CENTER}>
                            <span dangerouslySetInnerHTML={{__html: message}}/>
                        </ModalDescription>
                    </FormRow>
                    <FormRow alignment={FormRowAlignment.CENTER}>
                        <FormButtons>
                            <Button {...cancel} size={cancel.size || ButtonSize.BIG} style={cancel.style || ButtonStyle.DEFAULT_MIDNIGHT}>{cancel.children || t(TranslationLibKey.ACTION_CANCEL)}</Button>
                            <Button {...confirm} size={confirm.size || ButtonSize.BIG} style={confirm.style || ButtonStyle.PRIMARY_GREEN}>{confirm.children || t(TranslationLibKey.ACTION_CONFIRM)}</Button>
                        </FormButtons>
                    </FormRow>
                </FormContainer>
            </ModalContent>
        </ModalNew>
    )
};

export default ModalConfirmMessage
