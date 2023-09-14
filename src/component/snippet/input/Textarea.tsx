import React, {ChangeEventHandler, FunctionComponent} from 'react';
import clsx from "clsx";

type TextareaProps = {
    name: string;
    placeholder?: string;
    value?: string;
    onChange: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    rows?: number;
    maxLength?: number;
    small?: boolean;
};

const Textarea: FunctionComponent<TextareaProps> = ({name, placeholder, value, onChange, required, autoFocus, disabled, rows = 10, maxLength, small}) => {
    return (
        <textarea className={clsx({"input--small": small})}
                  name={name}
                  id={name}
                  value={value}
                  rows={rows}
                  maxLength={maxLength}
                  placeholder={placeholder}
                  onChange={onChange}
                  required={required}
                  autoFocus={autoFocus}
                  disabled={disabled}
        />
    );
};

export default Textarea;
