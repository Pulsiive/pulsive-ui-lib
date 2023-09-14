import { ChangeEventHandler, FunctionComponent } from 'react';
declare type RadioButtonProps = {
    id: string;
    name: string;
    label: string;
    value: string | number;
    checked: boolean;
    onChange: ChangeEventHandler;
};
declare const RadioButton: FunctionComponent<RadioButtonProps>;
export default RadioButton;
