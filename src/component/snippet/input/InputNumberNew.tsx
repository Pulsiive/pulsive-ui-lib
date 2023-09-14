import React, {ChangeEvent, FunctionComponent, KeyboardEventHandler, useEffect, useState} from "react";
import {Formatter} from "../../../utils/Formatter";
import clsx from "clsx";

export type InputNumberNewProps = {
    name: string;
    placeholder?: string;
    value?: number;
    minValue?: number;
    maxValue?: number;
    onKeyDown?: KeyboardEventHandler;
    onChange: (value: number) => void;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    small?: boolean;
};

const InputNumberNew: FunctionComponent<InputNumberNewProps> = ({name, placeholder, value, minValue, maxValue, onKeyDown, onChange, required, autoFocus, disabled, small}) => {
    const [inputValue, setInputValue] = useState<string>("");
    const NUMBER_FORMAT = "0,0.[0000]";

    useEffect(() => {
        let newInputValue = Formatter.formatNumber(value, NUMBER_FORMAT);
        newInputValue = newInputValue.replace(/,/g, " ");
        setInputValue(newInputValue);
    }, [value]);

    const getStringValue = (value: string) => {
        let newValue = value.replace(/[^\d,.]/g, "").replace(",", ".");
        const parts = newValue.split(".");
        if (parts.length > 1) {
            newValue = `${parts[0]}.${parts.slice(1, parts.length).join("")}`;
        }
        return newValue;
    };

    const getNumberValue = (value: string): number => {
        let newValue = value;
        if (newValue.endsWith(".")) {
            newValue = `${newValue}0`;
        }
        return +newValue;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let newInputValue = getStringValue(e.target.value);
        if (getStringValue(inputValue) === newInputValue) {
            return;
        }
        setInputValue(newInputValue);

        const newValue = getNumberValue(newInputValue);
        if (!isNaN(newValue)) {
            onChange(newValue);
        }
    };

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +getStringValue(e.target.value);
        let newValue = value;
        if (maxValue !== undefined) newValue = Math.min(newValue, maxValue);
        if (minValue !== undefined) newValue = Math.max(newValue, minValue);
        if (newValue !== value) {
            onChange(newValue);
        }
    };

    return (
        <input className={clsx({"input--small": small})}
               type="text"
               inputMode="numeric"
               pattern="[0-9]*"
               name={name}
               id={name}
               value={inputValue}
               onBlur={handleBlur}
               placeholder={placeholder}
               onKeyDown={onKeyDown}
               onChange={handleChange}
               required={required}
               autoFocus={autoFocus}
               disabled={disabled}
        />
    );
};

export default InputNumberNew;
