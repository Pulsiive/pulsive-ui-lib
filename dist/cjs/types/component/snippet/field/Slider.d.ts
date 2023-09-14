import { FunctionComponent } from 'react';
import { InputRangeProps } from "../input/InputRange";
declare type SliderProps = InputRangeProps & {
    unit?: string;
    cssClass?: string;
};
declare const Slider: FunctionComponent<SliderProps>;
export default Slider;
