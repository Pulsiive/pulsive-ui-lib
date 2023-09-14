import { ChangeEventHandler, FunctionComponent } from 'react';
declare type InputRadioProps = {
    id?: string;
    name: string;
    value: string | number;
    checked: boolean;
    onChange: ChangeEventHandler;
};
declare const InputRadio: FunctionComponent<InputRadioProps>;
export default InputRadio;
