import React, {ChangeEventHandler, FunctionComponent} from 'react';
import clsx from "clsx";

type InputEmailProps = {
    name: string;
    value?: string;
    placeholder?: string;
    onChange?: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    small?: boolean;
};

const InputEmail: FunctionComponent<InputEmailProps> = ({name, value, placeholder, onChange, required, autoFocus, disabled, small}) => {
    return (
        <input className={clsx({"input--small": small})}
               type="email"
               name={name}
               id={name}
               value={value}
               placeholder={placeholder}
               onChange={onChange}
               required={required}
               autoFocus={autoFocus}
               disabled={disabled}
        />
    );
};

export default InputEmail;
