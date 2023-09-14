import React, {FunctionComponent} from 'react';
import clsx from "clsx";

export type InputRangeProps = {
    name?: string;
    value?: number;
    minValue?: number;
    maxValue?: number;
    step?: number;
    onChange: (value: number) => void;
    disabled?: boolean;
    reverseRange?: boolean;
};

const InputRange: FunctionComponent<InputRangeProps> = ({name, value, minValue = 0, maxValue = 100, step, onChange, disabled, reverseRange}) => {

    const getBackgroundSize = () => {
        let newPos = value ? Number(((value - minValue) * 100) / (maxValue - minValue)) : minValue;
        return {backgroundSize: `${newPos}% 100%`};
    };

    return (
        <input type="range"
               className={clsx({"reverse-range": reverseRange})}
               name={name}
               id={name}
               style={getBackgroundSize()}
               value={value}
               min={minValue}
               max={maxValue}
               step={step}
               onChange={(e) => onChange(e.target.valueAsNumber)}
               disabled={disabled}/>
    );
};

export default InputRange;
