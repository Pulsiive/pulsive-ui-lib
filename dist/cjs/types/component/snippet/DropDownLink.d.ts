import React, { FunctionComponent } from "react";
import { ButtonLinkProps } from "./ButtonLink";
declare type DropDownLinkProps = {
    link: ButtonLinkProps;
    children: React.ReactNode;
    cssClass?: string;
    startOpen?: boolean;
};
declare const DropDownLink: FunctionComponent<DropDownLinkProps>;
export default DropDownLink;
