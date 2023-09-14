import { ChangeEventHandler, FunctionComponent } from 'react';
declare type RadioButtonsProps = {
    id?: string;
    name: string;
    value: string | number;
    options: {
        value: string | number;
        label: string;
    }[];
    onChange: ChangeEventHandler;
};
declare const RadioButtons: FunctionComponent<RadioButtonsProps>;
export default RadioButtons;
