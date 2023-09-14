import React, {FunctionComponent} from "react";
import clsx from "clsx";
import {useTranslation} from "react-i18next";
import {TranslationLibFile, TranslationLibKey} from "../../../utils/locale";
import Tooltip from "../Tooltip";
import Button, {ButtonStyle} from "../Button";
import {IconProps} from "../Icon";

type ContentBlockActionProps = {
    type: ContentBlockActionType;
    onClick: () => void;
    isDisabled?: boolean;
    label?: string;
}

const ContentBlockAction: FunctionComponent<ContentBlockActionProps> = ({type, onClick, isDisabled, label,}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    let actionLabel = "";
    switch (type.name) {
        case ContentBlockActionType.ADD.name:
            actionLabel = t(TranslationLibKey.ACTION_ADD);
            break;
        case ContentBlockActionType.EXPORT.name:
            actionLabel = t(TranslationLibKey.ACTION_EXPORT);
            break;

        case ContentBlockActionType.IMPORT.name:
            actionLabel = t(TranslationLibKey.ACTION_IMPORT);
            break;
        default:
            actionLabel = type.name;
            break;
    }

    return (
        <Tooltip text={clsx(actionLabel, label)}>
            <Button onClick={onClick}
                    style={type.style}
                    icon={type.icon}
                    disabled={isDisabled}
                    cssClass={"content-block__button"}
            />
        </Tooltip>
    );
}

export default ContentBlockAction;

export class ContentBlockActionType {
    static ADD: ContentBlockActionType = new ContentBlockActionType("ADD", {name: "add"}, ButtonStyle.PRIMARY_GREEN);
    static EXPORT: ContentBlockActionType = new ContentBlockActionType("EXPORT", {name: "download"});
    static IMPORT: ContentBlockActionType = new ContentBlockActionType("IMPORT", {name: "upload"});

    name: string;
    icon: IconProps;
    style: ButtonStyle;

    constructor(name: string, icon: IconProps, style: ButtonStyle = ButtonStyle.DEFAULT_MIDNIGHT_LIGHT) {
        this.name = name;
        this.icon = icon;
        this.style = style;
    }
}
