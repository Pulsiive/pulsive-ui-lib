import React, {FunctionComponent, ReactElement, ReactNode, useState} from "react";
import clsx from "clsx";
import Icon from "../Icon";

type AccordionItemProps = {
    heading: string | ReactElement;
    children: ReactNode;
    startOpen?: boolean;
    cssClass?: string;
};

const AccordionItem: FunctionComponent<AccordionItemProps> = ({children, heading, startOpen, cssClass}) => {
    const [isOpen, setOpen] = useState(startOpen || false);

    return (
        <div className={clsx("accordion__item", cssClass)}>
            <div className="accordion__item__head" onClick={() => setOpen((open) => !open)}>
                {typeof heading === "string" ? heading : React.cloneElement(heading as ReactElement)}
                <Icon name={isOpen ? "expand_less" : "expand_more"} />
            </div>
            <div className={clsx("accordion__item__body", {"accordion__item__body--open": isOpen})}>
                {children}
            </div>
        </div>
    );
};

export default AccordionItem;
