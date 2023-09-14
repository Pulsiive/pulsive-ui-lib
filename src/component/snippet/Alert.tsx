import React, { FunctionComponent } from "react";
import clsx from "clsx";
import Icon from "./Icon";

export enum AlertSeverity {
    DANGER = 'danger',
    INFO = 'info',
    SUCCESS = 'success',
    WARNING = 'warning'
}

export type AlertItem = {
    text: string;
    severity?: AlertSeverity;
    fullWidth?: boolean;
}

const Alert: FunctionComponent<AlertItem> = ({ text, severity = AlertSeverity.INFO, fullWidth }) => {
    let icon;

    switch (severity) {
        case AlertSeverity.DANGER:
            icon = <Icon name="report" outlined />
            break;
        case AlertSeverity.INFO:
            icon = <Icon name="lightbulb" outlined />
            break;
        case AlertSeverity.SUCCESS:
            icon = <Icon name="task_alt" outlined />
            break;
        case AlertSeverity.WARNING:
            icon = <Icon name="feedback" outlined />
            break;
        default:
            break;
    }

    return (
        <div className={clsx("alert", severity, {"alert--full-width": fullWidth})}>
            {icon} <span dangerouslySetInnerHTML={{__html: text}}/>
        </div>
    );
}

export default Alert;
