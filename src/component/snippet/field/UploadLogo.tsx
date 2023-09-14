import React, {ChangeEventHandler, FunctionComponent} from 'react';
import Icon from "../Icon";
import clsx from "clsx";
import {useTranslation} from "react-i18next";
import IconTooltip from "../IconTooltip";
import {TranslationLibFile, TranslationLibKey} from "../../../utils/locale";

type UploadLogoProps = {
    name: string;
    fileName?: string;
    logoUrl?: string;
    onChange: ChangeEventHandler;
    onDelete: (e: React.MouseEvent) => void;
    cssClass?: string;
    small?: boolean;
};

const UploadLogo: FunctionComponent<UploadLogoProps> = ({name, fileName, logoUrl, onChange, onDelete, cssClass, small}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    return (
        <div className={clsx("upload-logo", {'input--small': small}, cssClass)}>
            <input type="file" name={name} className="upload-logo__file" accept="image/*" onChange={onChange}/>
            <span className="upload-logo__content" style={{backgroundImage: logoUrl ? `url(${logoUrl})` : ''}}>
                {!logoUrl && (fileName || <Icon name="upload"/>)}
            </span>
            {(logoUrl || fileName) &&
                <span className="upload-logo__clear">
                    <IconTooltip icon={{name: "cancel", outlined: true}} text={t(TranslationLibKey.ACTION_DELETE)} onClick={onDelete}/>
                </span>
            }
        </div>
    );
};

export default UploadLogo;
