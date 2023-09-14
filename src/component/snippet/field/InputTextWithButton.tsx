import React, {FunctionComponent} from "react";
import Button, {ButtonProps, ButtonSize} from "../Button";
import InputText, {InputTextProps} from "../input/InputText";

type InputTextWithButtonProps = {
    input: InputTextProps;
    button: ButtonProps;
};

const InputTextWithButton: FunctionComponent<InputTextWithButtonProps> = ({input, button}) => {

    return (
        <div className="input-text-with-button">
            <InputText {...input} disabled={input.disabled || button.loading}/>
            <Button {...button} size={input.small ? ButtonSize.SMALL : ButtonSize.MEDIUM}/>
        </div>
    )
};

export default InputTextWithButton;
