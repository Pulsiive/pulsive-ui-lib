import { FunctionComponent } from "react";
export declare enum AlertSeverity {
    DANGER = "danger",
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning"
}
export declare type AlertItem = {
    text: string;
    severity?: AlertSeverity;
    fullWidth?: boolean;
};
declare const Alert: FunctionComponent<AlertItem>;
export default Alert;
