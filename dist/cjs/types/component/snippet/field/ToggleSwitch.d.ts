import { FunctionComponent } from 'react';
import { InputToggleSwitchProps } from "../input/InputToggleSwitch";
declare type ToggleSwitchProps = InputToggleSwitchProps & {
    label?: string;
    tooltip?: string;
    cssClass?: string;
};
declare const ToggleSwitch: FunctionComponent<ToggleSwitchProps>;
export default ToggleSwitch;
