import React, {ChangeEventHandler, FunctionComponent} from 'react';
import clsx from "clsx";

type InputPasswordProps = {
    name: string;
    placeholder?: string;
    value?: string;
    onChange: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    small?: boolean;
};

const InputPassword: FunctionComponent<InputPasswordProps> = ({name, placeholder, value, onChange, required, autoFocus, small}) => {

    return (
        <input
            className={clsx({"input--small": small})}
            type="password"
            name={name}
            id={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            autoFocus={autoFocus}
        />
    );
};

export default InputPassword;
