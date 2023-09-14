import React, { FunctionComponent } from 'react';
export declare enum ModalDescriptionAlignment {
    CENTER = "modal-description--align-center"
}
declare type ModalDescriptionProps = {
    children: React.ReactNode;
    alignment?: ModalDescriptionAlignment;
};
declare const ModalDescription: FunctionComponent<ModalDescriptionProps>;
export default ModalDescription;
