import React, {FunctionComponent} from "react";
import clsx from "clsx";
import Alert, {AlertItem} from "./Alert";

export type MainAlertProps = {
    content: AlertItem | undefined;
    cssClass?: string;
}

const MainAlert: FunctionComponent<MainAlertProps> = ({content, cssClass}) => {
    if (!content || !content.text) return <></>;

    return (
        <div className={clsx("main-alert", cssClass)}>
            <Alert {...content}/>
        </div>
    )
};

export default MainAlert;
