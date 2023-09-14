import { ChangeEventHandler, FunctionComponent } from 'react';
export declare type InputToggleSwitchProps = {
    name: string;
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement> | VoidFunction;
    disabled?: boolean;
};
declare const InputToggleSwitch: FunctionComponent<InputToggleSwitchProps>;
export default InputToggleSwitch;
