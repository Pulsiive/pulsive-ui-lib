import React, {FunctionComponent} from 'react';
import ButtonLink, {ButtonLinkStyle} from "../ButtonLink";
import {TranslationLibFile, TranslationLibKey} from '../../../utils/locale';
import {useTranslation} from "react-i18next";

type ButtonLinkCancelProps = {
    onClick: (e: React.MouseEvent) => void;
    style?: ButtonLinkStyle;
    cssClass?: string;
}

const ButtonLinkCancel: FunctionComponent<ButtonLinkCancelProps> = ({onClick, style, cssClass}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    return (
        <ButtonLink
            onClick={onClick}
            style={style}
            cssClass={cssClass}>
            {t(TranslationLibKey.ACTION_CANCEL)}
        </ButtonLink>
    );
};

export default ButtonLinkCancel;
