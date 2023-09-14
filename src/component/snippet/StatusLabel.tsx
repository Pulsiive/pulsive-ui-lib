import React, {FunctionComponent} from "react";
import Icon, {IconProps} from "./Icon";

export type StatusLabelProps = {
    icon: IconProps;
    label: string;
};

const StatusLabel: FunctionComponent<StatusLabelProps> = ({icon, label}) => {
    return (
        <span className="status-label">
            <span className="status-label__icon">
                {icon.name === "circle" ?
                    <i className="status-label__icon__bullet" style={{backgroundColor: icon.colorIcon}}/> :
                    <Icon {...icon} />
                }
            </span>
            <span className="status-label__text">{label}</span>
        </span>
    );
};

export default StatusLabel;
