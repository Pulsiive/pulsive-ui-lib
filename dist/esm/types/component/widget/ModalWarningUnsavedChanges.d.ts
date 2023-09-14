import React, { FunctionComponent } from 'react';
declare type ModalWarningUnsavedChangesProps = {
    active: boolean;
    onCancel: (e: React.MouseEvent) => void;
    onConfirm: (e: React.MouseEvent) => void;
};
declare const ModalWarningUnsavedChanges: FunctionComponent<ModalWarningUnsavedChangesProps>;
export default ModalWarningUnsavedChanges;
