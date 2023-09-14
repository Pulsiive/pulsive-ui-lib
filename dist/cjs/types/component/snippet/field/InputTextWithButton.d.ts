import { FunctionComponent } from "react";
import { ButtonProps } from "../Button";
import { InputTextProps } from "../input/InputText";
declare type InputTextWithButtonProps = {
    input: InputTextProps;
    button: ButtonProps;
};
declare const InputTextWithButton: FunctionComponent<InputTextWithButtonProps>;
export default InputTextWithButton;
