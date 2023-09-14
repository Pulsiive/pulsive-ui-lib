import { FunctionComponent } from "react";
import { IconProps } from "./Icon";
import { AlertSeverity } from "./Alert";
declare type MainAlertBarProps = {
    icon?: IconProps;
    text: string;
    severity?: AlertSeverity;
    colors?: {
        backgroundColor?: string;
        color?: string;
        borderColor?: string;
    };
};
declare const MainAlertBar: FunctionComponent<MainAlertBarProps>;
export default MainAlertBar;
