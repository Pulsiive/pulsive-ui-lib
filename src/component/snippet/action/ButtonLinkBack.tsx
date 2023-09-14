import React, {FunctionComponent} from 'react';
import ButtonLink, {ButtonLinkStyle} from "../ButtonLink";
import {TranslationLibFile, TranslationLibKey} from '../../../utils/locale';
import {useTranslation} from "react-i18next";

type ButtonLinkBackProps = {
    onClick: (e: React.MouseEvent) => void;
    style?: ButtonLinkStyle;
    cssClass?: string;
};

const ButtonLinkBack: FunctionComponent<ButtonLinkBackProps> = ({onClick, style, cssClass}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    return (
        <ButtonLink
            onClick={onClick}
            style={style}
            cssClass={cssClass}>
            {t(TranslationLibKey.ACTION_BACK)}
        </ButtonLink>
    );
};

export default ButtonLinkBack;
