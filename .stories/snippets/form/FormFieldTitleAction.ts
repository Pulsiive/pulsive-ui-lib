import {Button, ButtonSize, ToggleOption} from "../../../src";
import React from "react";

export enum FormFieldTitleAction {
    NONE = "None",
    ACTION_BUTTON_XSMALL = "Action button xsmall",
    TOGGLE_OPTION_SLIM = "Toggle option slim"
}
export type FormFieldTitleActionItem = {
    name: FormFieldTitleAction,
    component?: React.FunctionComponent<any>,
    props?: any
}

export const FORM_FIELD_TITLE_ACTION_ITEMS: FormFieldTitleActionItem[] = [
    {name: FormFieldTitleAction.NONE},
    {name: FormFieldTitleAction.ACTION_BUTTON_XSMALL, component: Button, props: {children: "Action button xsmall", onChange: () => {}, size: ButtonSize.XSMALL}},
    {name: FormFieldTitleAction.TOGGLE_OPTION_SLIM, component: ToggleOption, props: {firstOption: "fr", secondOption: "en", slim: true}}
];

export const getFormFieldTitleAction = (name: FormFieldTitleAction): React.ReactNode | undefined => {
    let formFieldTitleActionItem = FORM_FIELD_TITLE_ACTION_ITEMS.find(it => it.name === name);
    return formFieldTitleActionItem?.component ? React.createElement(formFieldTitleActionItem.component, formFieldTitleActionItem.props) : undefined;
}