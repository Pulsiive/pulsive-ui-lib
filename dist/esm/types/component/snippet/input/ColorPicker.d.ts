import { ChangeEvent, FunctionComponent } from "react";
declare type ColorPickerProps = {
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    cssClass?: string;
    small?: boolean;
    placeholder?: string;
};
declare const ColorPicker: FunctionComponent<ColorPickerProps>;
export default ColorPicker;
