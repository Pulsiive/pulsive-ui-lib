import React, {ChangeEventHandler, FunctionComponent} from 'react';
import {useTranslation} from "react-i18next";
import Button, {ButtonSize, ButtonStyle} from "../Button";
import {TranslationLibFile, TranslationLibKey} from "../../../utils/locale";

type UploadPanelProps = {
    name: string;
    onChange: ChangeEventHandler;
    onDelete: (e: React.MouseEvent) => void;
    placeholder?: string;
    acceptType?: string[];
    image?: string | FunctionComponent;
};

const UploadPanel: FunctionComponent<UploadPanelProps> = ({name, onChange, onDelete, placeholder, acceptType, image}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    return (
        <div className="upload-panel">
            <div className="upload-panel-content">
                {image &&
                <div className="upload-panel-img">
                    {typeof image === "string" ?
                        <img src={image} style={{maxWidth: "100%"}} alt=""/> :
                        React.createElement(image)
                    }
                </div>
                }
                {!!name ?
                    <div className="upload-panel-text">
                        <span className="upload-panel-name">{name}</span>
                        <Button
                            size={ButtonSize.SMALL}
                            style={ButtonStyle.PRIMARY_MIDNIGHT}
                            cssClass="upload-panel-button"
                            onClick={onDelete}>
                            {t(TranslationLibKey.ACTION_DELETE)}
                        </Button>
                    </div> :
                    <div className="upload-panel-text">
                        <span>{placeholder || t(TranslationLibKey.PLACEHOLDER_UPLOAD_PANEL)}</span>
                        <input type="file" accept={acceptType?.join(',') || '.csv,.xlsx,.xls'} onChange={onChange}/>
                    </div>
                }
            </div>
        </div>
    );
};

export default UploadPanel;
