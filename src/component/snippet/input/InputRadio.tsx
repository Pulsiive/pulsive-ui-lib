import React, {ChangeEventHandler, FunctionComponent} from 'react';

type InputRadioProps = {
    id?: string;
    name: string;
    value: string | number;
    checked: boolean;
    onChange: ChangeEventHandler;
};

const InputRadio: FunctionComponent<InputRadioProps> = ({id, name, value, checked, onChange}) => {
    return (
        <input type="radio"
               id={id}
               name={name}
               value={value}
               checked={checked}
               onChange={onChange}
        />
    );
};

export default InputRadio;
