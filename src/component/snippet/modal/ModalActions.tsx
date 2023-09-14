import React, {FunctionComponent} from "react";
import clsx from "clsx";

export enum ModalActionsAlignment {
    CENTER = "modal-new__container__actions--justify-center",
    LEFT = "modal-new__container__actions--justify-left",
    RIGHT = "modal-new__container__actions--justify-right",
    SPACE_BETWEEN = "modal-new__container__actions--justify-space-between",
}

type ModalActionsProps = {
    alignment?: ModalActionsAlignment;
    children: React.ReactNode;
};

const ModalActions: FunctionComponent<ModalActionsProps> = ({children, alignment = ModalActionsAlignment.CENTER}) => {
    return (
        <div className={clsx("modal-new__container__actions", alignment)}>
            {children}
        </div>
    );
};

export default ModalActions;
