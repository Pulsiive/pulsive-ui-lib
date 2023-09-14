import React, {FunctionComponent} from 'react';
import Button, {ButtonSize, ButtonStyle} from "../Button";
import {TranslationLibFile, TranslationLibKey} from '../../../utils/locale';
import {useTranslation} from "react-i18next";

type ButtonNewProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
};

const ButtonNew: FunctionComponent<ButtonNewProps> = ({onClick, cssClass, size, style, disabled}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    return (
        <Button
            onClick={onClick}
            cssClass={cssClass}
            size={size || ButtonSize.BIG}
            style={style || ButtonStyle.PRIMARY_GREEN}
            disabled={disabled}
            icon={{name: "add_circle"}}>
            {t(TranslationLibKey.ACTION_NEW)}
        </Button>
    );
};

export default ButtonNew;
