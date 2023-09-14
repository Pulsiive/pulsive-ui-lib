import React, {ChangeEventHandler, FunctionComponent, KeyboardEventHandler} from 'react';
import clsx from "clsx";

export type InputTextProps = {
    name: string;
    placeholder?: string;
    value?: string;
    onKeyDown?: KeyboardEventHandler;
    onChange: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    datalistOptions?: string[];
    small?: boolean;
    autoComplete?: string;
    cssClass?: string;
};

const InputText: FunctionComponent<InputTextProps> = ({name, placeholder, value, onKeyDown, onChange, required, autoFocus, disabled, datalistOptions, small, autoComplete, cssClass}) => {
    const generateUniqueId = (name: string) => {
        return `${name}_${Date.now().toString(36)}`;
    }
    const datalistId = !!datalistOptions?.length ? generateUniqueId(name) : undefined;

    return (
        <>
            <input className={clsx(cssClass, {"input--small": small})}
                   type="text"
                   name={name}
                   id={name}
                   value={value}
                   placeholder={placeholder}
                   onKeyDown={onKeyDown}
                   onChange={onChange}
                   required={required}
                   autoFocus={autoFocus}
                   disabled={disabled}
                   list={datalistId}
                   autoComplete={autoComplete}
            />
            {(datalistId && datalistOptions) &&
            <datalist id={datalistId}>
                {datalistOptions.map(value =>
                    <option value={value} key={value}/>
                )}
            </datalist>
            }
        </>
    );
};

export default InputText;
