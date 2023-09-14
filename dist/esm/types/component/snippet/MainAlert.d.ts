import { FunctionComponent } from "react";
import { AlertItem } from "./Alert";
export declare type MainAlertProps = {
    content: AlertItem | undefined;
    cssClass?: string;
};
declare const MainAlert: FunctionComponent<MainAlertProps>;
export default MainAlert;
