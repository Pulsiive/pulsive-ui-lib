import React, { ChangeEventHandler, FunctionComponent } from 'react';

export type InputCheckboxProps = {
    name: string;
    checked: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement> | VoidFunction;
    disabled?: boolean;
    readOnly?: boolean;
};

const InputCheckbox: FunctionComponent<InputCheckboxProps> = ({name, checked, onChange, disabled, readOnly}) => {
    return (
        <input
            type="checkbox"
            className="input-checkbox"
            name={name}
            id={!!onChange ? name : undefined}
            checked={checked}
            onChange={!!onChange ? onChange : () => {}}
            disabled={disabled}
            readOnly={readOnly}
        />
    );
};

export default InputCheckbox;
