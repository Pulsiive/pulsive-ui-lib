import React from "react";
import clsx from "clsx";

type AccordionItemContentProps = {
    children: React.ReactNode;
    cssClass?: string;
}

const AccordionItemContent: React.FunctionComponent<AccordionItemContentProps> = ({children, cssClass}) => {
    if (!children) return null;

    return <div className={clsx("accordion__item__body__content", cssClass)}>{children}</div>;
};

export default AccordionItemContent;
