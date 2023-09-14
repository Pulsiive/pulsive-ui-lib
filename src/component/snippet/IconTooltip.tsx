import React, {FunctionComponent} from "react";
import clsx from "clsx";
import Icon, {IconProps} from "./Icon";
import Tooltip from "./Tooltip";

export type IconTooltipProps = {
    icon: IconProps;
    text: string;
    cssClass?: string;
    onClick?: (e: React.MouseEvent) => void;
}

const IconTooltip: FunctionComponent<IconTooltipProps> = ({icon, text, cssClass, onClick}) => {
    return (
        <Tooltip text={text} onClick={onClick} cssClass={clsx("tooltip__icon", cssClass)}>
            <Icon {...icon} />
        </Tooltip>
    );
};

export default IconTooltip;
