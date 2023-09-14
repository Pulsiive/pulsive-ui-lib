import React, {ChangeEventHandler, FunctionComponent} from 'react';
import clsx from "clsx";
import Icon from "./Icon";
import { ButtonSize, ButtonStyle } from './Button';
import Loader from './Loader';

type ButtonUploadProps = {
    cssClass?: string;
    label: string;
    onChange: ChangeEventHandler;
    size?: ButtonSize;
    style?: ButtonStyle;
    acceptType?: string;
    disabled?: boolean;
    loading?: boolean;
};

const ButtonUpload: FunctionComponent<ButtonUploadProps> = ({cssClass, label, onChange, size = ButtonSize.MEDIUM, style = ButtonStyle.PRIMARY_GREEN, acceptType, disabled, loading}) => {
    return (
        <div className={clsx("btn-upload", size, style, {"btn-upload--disabled": disabled || loading}, cssClass)}>
            <input type="file" accept={acceptType || '.csv,.xlsx,.xls'} onChange={onChange} disabled={disabled || loading}/>
            <Icon name="file_upload" outlined/>
            <span>{label}</span>
            {loading && <Loader cssClass="btn__loader" small />}
        </div>
    );
};

export default ButtonUpload;
