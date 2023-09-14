import React, { FunctionComponent } from 'react';
export declare enum ModalSize {
    FULLSCREEN = "modal-content-fullscreen",
    MAX_WIDTH = "modal-content-max-width",
    MAX_HEIGHT = "modal-content-max-height"
}
declare type ModalProps = {
    onClose?: (e: React.MouseEvent) => void;
    active: boolean;
    size?: ModalSize;
    animate?: boolean;
    loading?: boolean;
    children: React.ReactNode;
};
declare const Modal: FunctionComponent<ModalProps>;
export default Modal;
