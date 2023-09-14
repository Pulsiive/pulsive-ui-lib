import React, {FunctionComponent} from 'react';
import clsx from "clsx";

export enum ModalDescriptionAlignment {
    CENTER = "modal-description--align-center"
}

type ModalDescriptionProps = {
    children: React.ReactNode;
    alignment?: ModalDescriptionAlignment;
};

const ModalDescription: FunctionComponent<ModalDescriptionProps> = ({children, alignment}) => {
    return (
        <div className={clsx("modal-description", alignment)}>{children}</div>
    )
};

export default ModalDescription;
