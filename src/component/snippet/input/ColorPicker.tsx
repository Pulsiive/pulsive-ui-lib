import React, {ChangeEvent, FunctionComponent, useEffect, useState} from "react";
import clsx from "clsx";

type ColorPickerProps = {
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    cssClass?: string;
    small?: boolean;
    placeholder?: string;
};

const ColorPicker: FunctionComponent<ColorPickerProps> = ({name, value, onChange, cssClass, small, placeholder}) => {
    const [focus, setFocus] = useState(false);

    const [valueInput, setValueInput] = useState<string>(value);
    const [valuePicker, setValuePicker] = useState<string>(placeholder || valueInput);

    useEffect(() => {
        if (!value) return;
        setValueInput(value);

        if (value.length === 4 && value[0] === '#') {
            setValuePicker('#' + value[1] + value[1] + value[2] + value[2] + value[3] + value[3]);
        } else setValuePicker(value);
    }, [value, valuePicker]);

    useEffect(() => {
        if (!placeholder || valuePicker) return;

        if (placeholder.length === 4 && placeholder[0] === '#') {
            setValuePicker('#' + placeholder[1] + placeholder[1] + placeholder[2] + placeholder[2] + placeholder[3] + placeholder[3]);
        } else setValuePicker(placeholder);

    }, [valuePicker, placeholder]);

    useEffect(() => {
        const activeEl = document.activeElement;
        if (!activeEl) return;

        if (!focus && activeEl.tagName === "IFRAME") {
            document.getElementById(name)?.focus();
            setFocus(true);
        }
    }, [focus, name]);

    useEffect(() => {
        setValuePicker(valueInput);
    }, [valueInput]);

    return (
        <div className={clsx("color-picker", cssClass)}>
            <input type="text" className={clsx({"input--small": small})} id={name} name={name} value={valueInput} onChange={onChange}
                   onFocus={() => setFocus(true)} onBlurCapture={() => setFocus(false)}/>
            <input type="color" className={clsx({"input--small": small})} name={name} value={valuePicker} onChange={onChange}/>
        </div>
    );
};

export default ColorPicker;
