import React, { ChangeEventHandler, FunctionComponent } from 'react';
declare type UploadLogoProps = {
    name: string;
    fileName?: string;
    logoUrl?: string;
    onChange: ChangeEventHandler;
    onDelete: (e: React.MouseEvent) => void;
    cssClass?: string;
    small?: boolean;
};
declare const UploadLogo: FunctionComponent<UploadLogoProps>;
export default UploadLogo;
