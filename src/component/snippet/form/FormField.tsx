import React, {FunctionComponent, useEffect, useState} from 'react';
import clsx from "clsx";
import FormFieldTitle from "./FormFieldTitle";
import FormFieldMessage, {FormFieldMessageProps} from "./FormFieldMessage";

export enum FormFieldSize {
    FLEX = "form-field--flex"
}

export type FormFieldTitleFields = {
    label?: string;
    tooltip?: string;
    actions?: React.ReactNode | React.ReactNode[];
};

export type FormFieldProps = {
    children: React.ReactElement;
    name?: string;
    required?: boolean;
    title?: FormFieldTitleFields;
    size?: FormFieldSize;
    messages?: FormFieldMessageProps[] | FormFieldMessageProps;
    inline?: boolean;
};

const FormField: FunctionComponent<FormFieldProps> = ({children, name, title, size, messages, required, inline}) => {
    const [props, setProps] = useState<{ name?: string, required?: boolean }>();

    const messageList = messages && (Array.isArray(messages) ? messages : [messages]);

    useEffect(() => {
        let newProps : { name?: string, required?: boolean } = {};
        if (name) newProps.name = name;
        if (required) newProps.required = required;
        setProps(newProps);
    }, [name, required]);

    return (
        <div className={clsx("form-field", {'form-field-inline': inline}, size)}>
            {title && <FormFieldTitle {...title} name={name} required={required}/>}
            <div className="form-field-content">
                <div className="form-field-content-item">
                    {props ? React.cloneElement(children as React.ReactElement, props) : children}
                </div>
                {messageList?.map((message, index) =>
                    <FormFieldMessage key={index} {...message} />
                )}
            </div>
        </div>
    )
};

export default FormField;
