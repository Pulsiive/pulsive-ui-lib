import React, {ChangeEventHandler, FunctionComponent} from 'react';
import clsx from "clsx";

type SelectProps = {
    name: string;
    value: string | number;
    options: { value: string | number, label: string }[];
    onChange: ChangeEventHandler;
    withEmptyOption?: boolean;
    disabled?: boolean;
    small?: boolean;
};

const Select: FunctionComponent<SelectProps> = ({name, value, options, onChange, withEmptyOption, disabled, small}) => {
    return (
        <div className={clsx("input-select", {"input--small": small})}>
            <select name={name} id={name} value={value} onChange={onChange} disabled={disabled}>
                {withEmptyOption && <option value="">-</option>}
                {options.map(({value, label}, index) =>
                    <option key={index} value={value}>{label}</option>
                )}
            </select>
        </div>
    );
};

export default Select;
