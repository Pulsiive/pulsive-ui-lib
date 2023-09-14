import React, {FunctionComponent} from 'react';
import Button, {ButtonSize, ButtonStyle} from "../Button";
import {TranslationLibFile, TranslationLibKey} from '../../../utils/locale';
import {useTranslation} from "react-i18next";

type ButtonDeleteProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    disabled?: boolean;
    loading?: boolean;
};

const ButtonDelete: FunctionComponent<ButtonDeleteProps> = ({onClick, cssClass, size, style, disabled, loading }) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    return (
        <Button
            cssClass={cssClass}
            size={size || ButtonSize.SMALL}
            style={style || ButtonStyle.PRIMARY_GREEN}
            onClick={onClick}
            disabled={disabled}
            loading={loading}>
            {t(TranslationLibKey.ACTION_DELETE)}
        </Button>
    );
};

export default ButtonDelete;
