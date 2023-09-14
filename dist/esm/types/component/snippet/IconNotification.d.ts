import React, { FunctionComponent } from "react";
declare type IconNotificationProps = {
    hasNotifications: boolean;
    onClick: (e: React.MouseEvent) => void;
    tooltipText?: string;
    outlined?: boolean;
    cssClass?: string;
};
declare const IconNotification: FunctionComponent<IconNotificationProps>;
export default IconNotification;
