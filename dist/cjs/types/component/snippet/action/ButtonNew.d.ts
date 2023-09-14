import React, { FunctionComponent } from 'react';
import { ButtonSize, ButtonStyle } from "../Button";
declare type ButtonNewProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
};
declare const ButtonNew: FunctionComponent<ButtonNewProps>;
export default ButtonNew;
