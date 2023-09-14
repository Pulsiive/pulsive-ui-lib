import React, { FunctionComponent } from 'react';
import clsx from "clsx";
import InputCheckbox, {InputCheckboxProps} from "../input/InputCheckbox";
import FormTooltip from "../form/FormTooltip";

type CheckboxProps = InputCheckboxProps & {
    label?: string;
    tooltip?: string;
    cssClass?: string;
};

const Checkbox: FunctionComponent<CheckboxProps> = (props) => {
    const {
        name,
        label,
        tooltip,
        cssClass
    } = props;

    return (
        <div className={clsx("checkbox-field", cssClass)}>
            <InputCheckbox {...props}/>
            {label && <label htmlFor={name}><span dangerouslySetInnerHTML={{__html: label}}/><FormTooltip text={tooltip}/></label>}
        </div>
    );
};

export default Checkbox;
