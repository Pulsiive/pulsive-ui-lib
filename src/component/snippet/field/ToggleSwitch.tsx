import React, {FunctionComponent} from 'react';
import clsx from "clsx";
import InputToggleSwitch, {InputToggleSwitchProps} from "../input/InputToggleSwitch";
import FormTooltip from "../form/FormTooltip";

type ToggleSwitchProps = InputToggleSwitchProps & {
    label?: string;
    tooltip?: string;
    cssClass?: string;
};

const ToggleSwitch: FunctionComponent<ToggleSwitchProps> = (props) => {
    const {
        name,
        label,
        tooltip,
        cssClass
    } = props;

    return (
        <div className={clsx("toggle-switch-field", cssClass)}>
            <InputToggleSwitch {...props}/>
            {label && <label htmlFor={name}><span dangerouslySetInnerHTML={{__html: label}}/><FormTooltip text={tooltip}/></label>}
        </div>
    );
};

export default ToggleSwitch;
