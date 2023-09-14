import React, { FunctionComponent } from 'react';
export declare enum ModalNewSize {
    FULLSCREEN = "modal-new__container--fullscreen",
    MAX_WIDTH = "modal-new__container--max-width",
    MAX_HEIGHT = "modal-new__container--max-height"
}
export declare type ModalNewProps = {
    onClose?: (e: React.MouseEvent) => void;
    active: boolean;
    size?: ModalNewSize;
    animate?: boolean;
    loading?: boolean;
    children: React.ReactNode;
    cssClass?: string;
    subLink?: {
        onClick: (e: React.MouseEvent) => void;
        label: string;
    };
    keepMounted?: boolean;
};
declare const ModalNew: FunctionComponent<ModalNewProps>;
export default ModalNew;
