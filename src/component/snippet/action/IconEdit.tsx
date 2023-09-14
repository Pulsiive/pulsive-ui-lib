import React, {FunctionComponent} from 'react';
import IconTooltip from "../IconTooltip";
import {TranslationLibFile, TranslationLibKey} from '../../../utils/locale';
import {useTranslation} from "react-i18next";

type IconEditProps = {
    onClick: (e: React.MouseEvent) => void;
    cssClass?: string;
};

const IconEdit: FunctionComponent<IconEditProps> = ({onClick, cssClass}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    return (
        <IconTooltip
            cssClass={cssClass}
            icon={{name: "edit"}}
            text={t(TranslationLibKey.ACTION_EDIT)}
            onClick={onClick}
        />
    );
};

export default IconEdit;
