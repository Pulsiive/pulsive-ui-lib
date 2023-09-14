import React, {FunctionComponent} from 'react';
import Button, {ButtonSize, ButtonStyle} from "../Button";
import {TranslationLibFile, TranslationLibKey} from '../../../utils/locale';
import {useTranslation} from "react-i18next";

type ButtonOkProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
};

const ButtonOk: FunctionComponent<ButtonOkProps> = ({onClick, cssClass, size, style, disabled}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    return (
        <Button onClick={onClick}
                cssClass={cssClass}
                size={size || ButtonSize.MEDIUM}
                style={style || ButtonStyle.PRIMARY_MIDNIGHT}
                disabled={disabled}>
            {t(TranslationLibKey.ACTION_OK)}
        </Button>

    );
};

export default ButtonOk;
