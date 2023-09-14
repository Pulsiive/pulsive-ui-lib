import React, {ChangeEventHandler, FunctionComponent} from 'react';
import InputRadio from "../input/InputRadio";

type RadioButtonProps = {
    id: string;
    name: string;
    label: string;
    value: string | number;
    checked: boolean;
    onChange: ChangeEventHandler;
};

const RadioButton: FunctionComponent<RadioButtonProps> = ({id, name, label, value, checked, onChange}) => {
    return (
        <span className="radio-button">
            <InputRadio id={id} name={name} value={value} checked={checked} onChange={onChange}/>
            <label htmlFor={id}>{label}</label>
        </span>
    );
};

export default RadioButton;
