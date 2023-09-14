import React, { FunctionComponent } from 'react';
import { ButtonLinkStyle } from "../ButtonLink";
declare type ButtonLinkCancelProps = {
    onClick: (e: React.MouseEvent) => void;
    style?: ButtonLinkStyle;
    cssClass?: string;
};
declare const ButtonLinkCancel: FunctionComponent<ButtonLinkCancelProps>;
export default ButtonLinkCancel;
