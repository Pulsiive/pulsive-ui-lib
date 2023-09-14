import React, { FunctionComponent } from "react";
export declare enum ModalActionsAlignment {
    CENTER = "modal-new__container__actions--justify-center",
    LEFT = "modal-new__container__actions--justify-left",
    RIGHT = "modal-new__container__actions--justify-right",
    SPACE_BETWEEN = "modal-new__container__actions--justify-space-between"
}
declare type ModalActionsProps = {
    alignment?: ModalActionsAlignment;
    children: React.ReactNode;
};
declare const ModalActions: FunctionComponent<ModalActionsProps>;
export default ModalActions;
