import React, { ChangeEventHandler, FunctionComponent } from 'react';
import clsx from "clsx";

export type InputToggleSwitchProps = {
    name: string;
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement> | VoidFunction;
    disabled?: boolean;
};

const InputToggleSwitch: FunctionComponent<InputToggleSwitchProps> = ({name, checked, onChange, disabled}) => {
    return (
        <input
            type="checkbox"
            className={clsx("input-toggle-switch", {"disabled": disabled})}
            id={!!onChange ? name : undefined}
            name={name}
            checked={checked}
            onChange={!!onChange ? onChange : () => {}}
            disabled={disabled}
        />
    );
};

export default InputToggleSwitch;
