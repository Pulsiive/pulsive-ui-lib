import React, { FunctionComponent } from "react";
export declare type ModalNotificationContent = {
    image: string;
    call_to_action: string;
    title?: string;
    subtitle?: string;
    text?: string;
};
declare type ModalNotificationProps = {
    content: ModalNotificationContent;
    active: boolean;
    onClose: (e: React.MouseEvent) => void;
    onCallToAction: (e: React.MouseEvent) => void;
    subLink: {
        onClick: (e: React.MouseEvent) => void;
        label: string;
    };
};
declare const ModalNotification: FunctionComponent<ModalNotificationProps>;
export default ModalNotification;
