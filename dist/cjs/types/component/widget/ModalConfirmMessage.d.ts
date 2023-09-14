import { FunctionComponent } from 'react';
import { ButtonProps } from "../snippet/Button";
declare type ModalConfirmMessageProps = {
    message: string;
    confirm: ButtonProps;
    cancel: ButtonProps;
    active: boolean;
};
declare const ModalConfirmMessage: FunctionComponent<ModalConfirmMessageProps>;
export default ModalConfirmMessage;
