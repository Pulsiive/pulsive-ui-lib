import { FunctionComponent } from "react";
import { ButtonStyle } from "../Button";
import { IconProps } from "../Icon";
declare type ContentBlockActionProps = {
    type: ContentBlockActionType;
    onClick: () => void;
    isDisabled?: boolean;
    label?: string;
};
declare const ContentBlockAction: FunctionComponent<ContentBlockActionProps>;
export default ContentBlockAction;
export declare class ContentBlockActionType {
    static ADD: ContentBlockActionType;
    static EXPORT: ContentBlockActionType;
    static IMPORT: ContentBlockActionType;
    name: string;
    icon: IconProps;
    style: ButtonStyle;
    constructor(name: string, icon: IconProps, style?: ButtonStyle);
}
