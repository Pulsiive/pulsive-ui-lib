import { FunctionComponent, ReactElement, ReactNode } from "react";
declare type AccordionItemProps = {
    heading: string | ReactElement;
    children: ReactNode;
    startOpen?: boolean;
    cssClass?: string;
};
declare const AccordionItem: FunctionComponent<AccordionItemProps>;
export default AccordionItem;
