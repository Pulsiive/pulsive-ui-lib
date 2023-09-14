import React, {ChangeEventHandler, FunctionComponent} from 'react';
import {MomentInput} from "moment";
import {Formatter, FormatterFormat} from "../../../utils/Formatter";
import clsx from "clsx";

export enum InputDateType {
    DATE = "date",
    DATETIME_LOCAL = "datetime-local"
}

type InputDateProps = {
    name: string;
    value?: string;
    placeholder?: string;
    type?: InputDateType;
    min?: MomentInput;
    max?: MomentInput;
    onChange?: ChangeEventHandler;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    small?: boolean;
};

const InputDate: FunctionComponent<InputDateProps> = ({type= InputDateType.DATE, name, value, placeholder, min, max, onChange, required, autoFocus, disabled, readOnly, small}) => {
    return (
        <input className={clsx({"input--small": small})}
               type={type}
               name={name}
               id={name}
               value={value}
               placeholder={placeholder}
               min={min ? Formatter.formatDate(min, type === InputDateType.DATETIME_LOCAL ? FormatterFormat.DATE_TIME_INPUT : FormatterFormat.DATE_INPUT) : undefined}
               max={max ? Formatter.formatDate(max, type === InputDateType.DATETIME_LOCAL ? FormatterFormat.DATE_TIME_INPUT : FormatterFormat.DATE_INPUT) : undefined}
               onChange={!!onChange ? onChange : () => {}}
               required={required}
               autoFocus={autoFocus}
               disabled={disabled}
               readOnly={readOnly}
        />
    );
};

export default InputDate;
