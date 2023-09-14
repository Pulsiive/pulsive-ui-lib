import React, { FunctionComponent } from 'react';
import { ButtonSize, ButtonStyle } from "../Button";
declare type ButtonAddProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
};
declare const ButtonAdd: FunctionComponent<ButtonAddProps>;
export default ButtonAdd;
