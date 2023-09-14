import React, { FunctionComponent } from "react";
export declare enum ModalHeaderDirection {
    ROW = "modal-new__container__header--row",
    ROW_REVERSE = "modal-new__container__header--row-reverse",
    COLUMN = "modal-new__container__header--column",
    COLUMN_REVERSE = "modal-new__container__header--column-reverse"
}
export declare enum ModalHeaderAlignment {
    CENTER = "modal-new__container__header--justify-center",
    LEFT = "modal-new__container__header--justify-left",
    RIGHT = "modal-new__container__header--justify-right",
    SPACE_BETWEEN = "modal-new__container__header--justify-space-between"
}
declare type ModalHeaderProps = {
    alignment?: ModalHeaderAlignment;
    direction?: ModalHeaderDirection;
    children: React.ReactNode;
};
declare const ModalHeader: FunctionComponent<ModalHeaderProps>;
export default ModalHeader;
