import React, {FunctionComponent} from 'react';
import ButtonLink, {ButtonLinkStyle} from "../ButtonLink";
import {TranslationLibFile, TranslationLibKey} from '../../../utils/locale';
import {useTranslation} from "react-i18next";

type ButtonLinkCloseProps = {
    onClick: (e: React.MouseEvent) => void;
    style?: ButtonLinkStyle;
    cssClass?: string;
};

const ButtonLinkClose: FunctionComponent<ButtonLinkCloseProps> = ({onClick, style, cssClass}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    return (
        <ButtonLink
            onClick={onClick}
            style={style}
            cssClass={cssClass}>
            {t(TranslationLibKey.ACTION_CLOSE)}
        </ButtonLink>
    );
};

export default ButtonLinkClose;
