import React, {FunctionComponent} from 'react';
import {useTranslation} from "react-i18next";
import Button, { ButtonSize, ButtonStyle } from "../Button";
import {TranslationLibFile, TranslationLibKey} from '../../../utils/locale';

type ButtonAddProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string,
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
};

const ButtonAdd: FunctionComponent<ButtonAddProps> = ({onClick, cssClass, size, style, disabled}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    return (
        <Button
            cssClass={cssClass}
            size={size || ButtonSize.SMALL}
            style={style || ButtonStyle.PRIMARY_GREEN}
            onClick={onClick}
            disabled={disabled}
            icon={{name: "add_circle"}}>
            {t(TranslationLibKey.ACTION_ADD)}
        </Button>
    );
};

export default ButtonAdd;
