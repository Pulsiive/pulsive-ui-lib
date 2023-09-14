import React, { FunctionComponent } from 'react';
export declare enum ModalTitleSize {
    HUGE = "modal-title-huge"
}
export declare enum ModalTitleAlignment {
    LEFT = "modal-title-align-left"
}
declare type ModalTitleProps = {
    children: React.ReactNode;
    size?: ModalTitleSize;
    alignment?: ModalTitleAlignment;
};
declare const ModalTitle: FunctionComponent<ModalTitleProps>;
export default ModalTitle;
