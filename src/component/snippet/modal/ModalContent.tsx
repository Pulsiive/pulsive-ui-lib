import React, {FunctionComponent} from "react";
import clsx from "clsx";

type ModalContentProps = {
    fullWidth?: boolean;
    children: React.ReactNode;
    centered?: boolean;
};

const ModalContent: FunctionComponent<ModalContentProps> = ({children, centered = false, fullWidth = false}) => {
    return (
        <div
            className={clsx("modal-new__container__body", {
                "modal-new__container__body--centered": centered,
                "modal-new__container__body--fullwidth": fullWidth,
            })}
        >
            {children}
        </div>
    );
};

export default ModalContent;
