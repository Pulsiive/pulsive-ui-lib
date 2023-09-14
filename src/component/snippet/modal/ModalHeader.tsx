import React, {FunctionComponent} from "react";
import clsx from "clsx";

export enum ModalHeaderDirection {
    ROW = "modal-new__container__header--row",
    ROW_REVERSE = "modal-new__container__header--row-reverse",
    COLUMN = "modal-new__container__header--column",
    COLUMN_REVERSE = "modal-new__container__header--column-reverse",
}

export enum ModalHeaderAlignment {
    CENTER = "modal-new__container__header--justify-center",
    LEFT = "modal-new__container__header--justify-left",
    RIGHT = "modal-new__container__header--justify-right",
    SPACE_BETWEEN = "modal-new__container__header--justify-space-between",
}

type ModalHeaderProps = {
    alignment?: ModalHeaderAlignment;
    direction?: ModalHeaderDirection;
    children: React.ReactNode;
};

const ModalHeader: FunctionComponent<ModalHeaderProps> = ({alignment = ModalHeaderAlignment.LEFT, direction = ModalHeaderDirection.ROW, children}) => {
    return (
        <div className={clsx("modal-new__container__header", alignment, direction)}>
            {children}
        </div>
    );
};

export default ModalHeader;
