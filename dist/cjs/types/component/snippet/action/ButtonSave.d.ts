import React, { FunctionComponent } from 'react';
import { ButtonSize, ButtonStyle } from "../Button";
declare type ButtonSaveProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
    loading?: boolean;
};
declare const ButtonSave: FunctionComponent<ButtonSaveProps>;
export default ButtonSave;
