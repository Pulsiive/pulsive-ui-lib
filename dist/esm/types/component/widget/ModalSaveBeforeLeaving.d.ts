import React, { FunctionComponent } from 'react';
declare type ModalSaveBeforeLeavingProps = {
    active: boolean;
    onSave: (e: React.MouseEvent) => void;
    onLeave: (e: React.MouseEvent) => void;
    onCancel: (e: React.MouseEvent) => void;
};
declare const ModalSaveBeforeLeaving: FunctionComponent<ModalSaveBeforeLeavingProps>;
export default ModalSaveBeforeLeaving;
