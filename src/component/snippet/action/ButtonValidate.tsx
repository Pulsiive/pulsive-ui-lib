import React, {FunctionComponent} from 'react';
import Button, {ButtonSize, ButtonStyle} from "../Button";
import {TranslationLibFile, TranslationLibKey} from '../../../utils/locale';
import {useTranslation} from "react-i18next";

type ButtonValidateProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
    loading?: boolean;
};

const ButtonValidate: FunctionComponent<ButtonValidateProps> = ({onClick, cssClass, size, style, disabled, loading}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    return (
        <Button
            onClick={onClick}
            cssClass={cssClass}
            size={size || ButtonSize.BIG}
            style={style || ButtonStyle.PRIMARY_GREEN}
            disabled={disabled}
            loading={loading}>
            {t(TranslationLibKey.ACTION_VALIDATE)}
        </Button>
    );
};

export default ButtonValidate;