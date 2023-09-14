import { FunctionComponent } from 'react';
import { InputCheckboxProps } from "../input/InputCheckbox";
declare type CheckboxProps = InputCheckboxProps & {
    label?: string;
    tooltip?: string;
    cssClass?: string;
};
declare const Checkbox: FunctionComponent<CheckboxProps>;
export default Checkbox;
