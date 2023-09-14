import React, { FunctionComponent } from 'react';
import { ButtonLinkStyle } from "../ButtonLink";
declare type ButtonLinkBackProps = {
    onClick: (e: React.MouseEvent) => void;
    style?: ButtonLinkStyle;
    cssClass?: string;
};
declare const ButtonLinkBack: FunctionComponent<ButtonLinkBackProps>;
export default ButtonLinkBack;
