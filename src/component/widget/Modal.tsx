import React, {FunctionComponent} from 'react';
import clsx from "clsx";
import Icon from "../snippet/Icon";
import Loadable from "./Loadable";

export enum ModalSize {
    FULLSCREEN = "modal-content-fullscreen",
    MAX_WIDTH = "modal-content-max-width",
    MAX_HEIGHT = "modal-content-max-height"
}

type ModalProps = {
    onClose?: (e: React.MouseEvent) => void;
    active: boolean;
    size?: ModalSize;
    animate?: boolean;
    loading?: boolean;
    children: React.ReactNode;
};

const Modal: FunctionComponent<ModalProps> = ({onClose, active, size, animate, loading = false, children}) => {
    return (
        <div className={clsx("modal", {"modal-active": active})}>
            <div className={clsx("modal-content", size, {"modal-content-animated": animate})}>
                <div className="modal-body">
                    <div className="modal-body-wrapper">
                        {onClose && <span className="modal-close-btn" onClick={onClose}><Icon name="close"/></span>}
                        <div className="modal-block">
                            <Loadable loading={loading}>
                                {children}
                            </Loadable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
