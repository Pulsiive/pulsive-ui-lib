import React, { ChangeEventHandler, FunctionComponent } from 'react';
declare type UploadPanelProps = {
    name: string;
    onChange: ChangeEventHandler;
    onDelete: (e: React.MouseEvent) => void;
    placeholder?: string;
    acceptType?: string[];
    image?: string | FunctionComponent;
};
declare const UploadPanel: FunctionComponent<UploadPanelProps>;
export default UploadPanel;
