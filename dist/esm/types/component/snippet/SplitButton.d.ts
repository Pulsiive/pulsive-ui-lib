import React, { FunctionComponent } from 'react';
import { ButtonSize, ButtonStyle } from "./Button";
export declare type SplitButtonAction = {
    label: string;
    onClick: (e: React.MouseEvent) => void;
};
declare type SplitButtonProps = {
    size?: ButtonSize;
    style?: ButtonStyle;
    actions: SplitButtonAction[];
};
declare const SplitButton: FunctionComponent<SplitButtonProps>;
export default SplitButton;
