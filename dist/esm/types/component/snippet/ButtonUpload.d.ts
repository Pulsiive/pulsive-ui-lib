import { ChangeEventHandler, FunctionComponent } from 'react';
import { ButtonSize, ButtonStyle } from './Button';
declare type ButtonUploadProps = {
    cssClass?: string;
    label: string;
    onChange: ChangeEventHandler;
    size?: ButtonSize;
    style?: ButtonStyle;
    acceptType?: string;
    disabled?: boolean;
    loading?: boolean;
};
declare const ButtonUpload: FunctionComponent<ButtonUploadProps>;
export default ButtonUpload;
