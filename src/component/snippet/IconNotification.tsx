import React, {FunctionComponent} from "react";
import clsx from "clsx";
import Icon from "./Icon";
import Tooltip from "./Tooltip";

type IconNotificationProps = {
    hasNotifications: boolean;
    onClick: (e: React.MouseEvent) => void;
    tooltipText?: string;
    outlined?: boolean;
    cssClass?: string;
};

const IconNotification: FunctionComponent<IconNotificationProps> = ({hasNotifications, outlined, tooltipText, cssClass, onClick}) => {
    if (tooltipText) {
        return (
            <Tooltip text={tooltipText} onClick={onClick} cssClass={clsx("notification-icon", cssClass)}>
                <Icon name="notifications" outlined={outlined} />
                {hasNotifications && <div className="notification-icon__chip" />}
            </Tooltip>
        );
    }

    return (
        <div className="notification-icon">
            <Icon name="notifications" outlined={outlined} />
            {hasNotifications && <div className="notification-icon__chip" />}
        </div>
    );
};

export default IconNotification;
