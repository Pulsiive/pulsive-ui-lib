import React, {FunctionComponent, useEffect} from 'react';
import clsx from "clsx";
import Loadable from "./Loadable";
import ButtonLink, {ButtonLinkStyle} from "../snippet/ButtonLink";
import Icon from "../snippet/Icon";

export enum ModalNewSize {
    FULLSCREEN = "modal-new__container--fullscreen",
    MAX_WIDTH = "modal-new__container--max-width",
    MAX_HEIGHT = "modal-new__container--max-height"
}

export type ModalNewProps = {
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

const ModalNew: FunctionComponent<ModalNewProps> = ({onClose, active, size, animate, loading = false, children, cssClass, subLink, keepMounted}) => {
    useEffect(() => {
        if (active) {
            document.body.setAttribute("style", "overflow: hidden;");
        } else {
            document.body.removeAttribute("style");
        }
    }, [active]);

    if (!active && !keepMounted) return null;

    return (
        <div className={clsx("modal-new", {"modal-new--active": active }, cssClass)}>
            <Loadable loading={loading} loaderOptions={{ cssClass: "modal-new__loader", small: true }}>
                <div className={clsx("modal-new__container", size, {"modal-new__container--animated": animate})}>
                    {onClose &&
                        <span className="modal-new__container__close-btn" onClick={onClose}>
                            <Icon name="close" />
                        </span>
                    }
                    {children}
                </div>
                {subLink?.label && <ButtonLink cssClass="modal-new__sublink" style={ButtonLinkStyle.WHITE} onClick={subLink.onClick}>{subLink.label}</ButtonLink>}
            </Loadable>
        </div>
    );
};

export default ModalNew;
