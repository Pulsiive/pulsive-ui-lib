import React, { FunctionComponent } from 'react';
import { ButtonSize, ButtonStyle } from "../Button";
declare type ButtonOkProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
};
declare const ButtonOk: FunctionComponent<ButtonOkProps>;
export default ButtonOk;
