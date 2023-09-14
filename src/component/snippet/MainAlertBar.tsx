import React, {FunctionComponent} from "react";
import clsx from "clsx";
import Icon, {IconProps} from "./Icon";
import {AlertSeverity} from "./Alert";

type MainAlertBarProps = {
    icon?: IconProps;
    text: string;
    severity?: AlertSeverity;
    colors?: { backgroundColor?: string, color?: string, borderColor?: string };
}

const MainAlertBar: FunctionComponent<MainAlertBarProps> = ({icon, text, severity, colors}) => {
    if (!text) return <></>;

    return (
        <div className={clsx("main-alert-bar", severity && `main-alert-bar--severity--${severity}`)} style={{...colors}}>
            {icon && <Icon {...icon} cssClass="main-alert-bar__icon"/>}
            <span dangerouslySetInnerHTML={{__html: text}} className="main-alert-bar__text"/>
        </div>
    );
};

export default MainAlertBar;
