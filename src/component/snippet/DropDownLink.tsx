import React, {FunctionComponent, useState} from "react";
import clsx from "clsx";
import ButtonLink, { ButtonLinkProps } from "./ButtonLink";

type DropDownLinkProps = {
    link: ButtonLinkProps;
    children: React.ReactNode;
    cssClass?: string;
    startOpen?: boolean;
};

const DropDownLink: FunctionComponent<DropDownLinkProps> = ({link, children, cssClass, startOpen}) => {
    const [isOpen, setOpen] = useState(startOpen);

    const handleClick = (e: React.MouseEvent) => {
        link.onClick && link.onClick(e);
        setOpen((open) => !open);
    };

    return (
        <div className="drop-down-link">
            <ButtonLink {...link} onClick={handleClick} icon={{name: isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}}/>
            <div className={clsx("drop-down-link__content", {"drop-down-link__content--visible": isOpen}, cssClass)}>
                {children}
            </div>
        </div>
    );
};

export default DropDownLink;
