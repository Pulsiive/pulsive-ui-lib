import React, {FunctionComponent} from 'react';
import clsx from "clsx";
import InputRange, {InputRangeProps} from "../input/InputRange";

type SliderProps = InputRangeProps & {
    unit?: string;
    cssClass?: string;
};

const Slider: FunctionComponent<SliderProps> = (props) => {
    const {
        value,
        minValue = 0,
        maxValue = 100,
        unit,
        cssClass,
    } = props;

    return (
        <div className={clsx("slider", cssClass)}>
            <div className="slider__labels">
                <span className="slider__labels__min">{minValue}{unit}</span>
                <span className="slider__labels__current">{value}{unit}</span>
                <span className="slider__labels__max">{maxValue}{unit}</span>
            </div>
            <div className="slider__range">
                <InputRange {...props}/>
            </div>
        </div>
    );
};

export default Slider;
