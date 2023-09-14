import React, { FunctionComponent } from 'react';
import { ButtonSize, ButtonStyle } from "../Button";
declare type ButtonValidateProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
    loading?: boolean;
};
declare const ButtonValidate: FunctionComponent<ButtonValidateProps>;
export default ButtonValidate;
