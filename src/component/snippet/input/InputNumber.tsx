import React, {ChangeEvent, ChangeEventHandler, FunctionComponent} from 'react';
import clsx from "clsx";

export type InputNumberProps = {
    name: string;
    placeholder?: string;
    value?: number;
    minValue?: number;
    maxValue?: number;
    step?: number;
    onChange: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    small?: boolean;
};

const InputNumber: FunctionComponent<InputNumberProps> = ({name, placeholder, value, minValue, maxValue, step, onChange, required, autoFocus, disabled, small}) => {
    function handleBlur(e: ChangeEvent<HTMLInputElement>) {
        if (maxValue !== undefined && Number(e.target.value) > maxValue) {
            e.target.value = maxValue.toString();
        } else if (minValue !== undefined && Number(e.target.value) < minValue) {
            e.target.value = minValue.toString();
        }
        onChange(e);
    }

    return (
        <input className={clsx({"input--small": small})}
               type="number"
               name={name}
               id={name}
               value={value ? value : ''}
               placeholder={placeholder}
               min={minValue}
               max={maxValue}
               step={step}
               onChange={onChange}
               onBlur={handleBlur}
               required={required}
               autoFocus={autoFocus}
               disabled={disabled}
        />
    );
};

export default InputNumber;
