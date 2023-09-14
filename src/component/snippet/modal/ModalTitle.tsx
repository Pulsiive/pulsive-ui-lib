import React, {FunctionComponent} from 'react';
import clsx from "clsx";

export enum ModalTitleSize {
    HUGE = "modal-title-huge"
}

export enum ModalTitleAlignment {
    LEFT = "modal-title-align-left"
}

type ModalTitleProps = {
    children: React.ReactNode;
    size?: ModalTitleSize;
    alignment?: ModalTitleAlignment;
};

const ModalTitle: FunctionComponent<ModalTitleProps> = ({children, size, alignment}) => {
    return (
        <div className={clsx("modal-title", size, alignment)}>{children}</div>
    )
};

export default ModalTitle;
