import React, { FunctionComponent } from 'react';
import { ButtonLinkStyle } from "../ButtonLink";
declare type ButtonLinkCloseProps = {
    onClick: (e: React.MouseEvent) => void;
    style?: ButtonLinkStyle;
    cssClass?: string;
};
declare const ButtonLinkClose: FunctionComponent<ButtonLinkCloseProps>;
export default ButtonLinkClose;
