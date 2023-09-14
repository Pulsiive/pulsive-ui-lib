import { FunctionComponent } from 'react';
export declare type InputRangeProps = {
    name?: string;
    value?: number;
    minValue?: number;
    maxValue?: number;
    step?: number;
    onChange: (value: number) => void;
    disabled?: boolean;
    reverseRange?: boolean;
};
declare const InputRange: FunctionComponent<InputRangeProps>;
export default InputRange;
