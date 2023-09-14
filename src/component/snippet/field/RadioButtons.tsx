import React, {ChangeEventHandler, FunctionComponent} from 'react';
import clsx from "clsx";
import RadioButton from "./RadioButton";

type RadioButtonsProps = {
    id?: string;
    name: string;
    value: string | number;
    options: { value: string | number, label: string }[];
    onChange: ChangeEventHandler;
};

const RadioButtons: FunctionComponent<RadioButtonsProps> = ({id, name, value, options, onChange}) => {
    return (
        <div className="radio-group">
            {options.map((it, index) =>
                <RadioButton key={index}
                             id={clsx(id, name, index)}
                             name={name}
                             label={it.label}
                             value={it.value}
                             checked={it.value === value}
                             onChange={onChange}/>
            )}
        </div>
    );
};

export default RadioButtons;
