import { ChangeEventHandler, FunctionComponent } from 'react';
import { MomentInput } from "moment";
export declare enum InputDateType {
    DATE = "date",
    DATETIME_LOCAL = "datetime-local"
}
declare type InputDateProps = {
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
declare const InputDate: FunctionComponent<InputDateProps>;
export default InputDate;
