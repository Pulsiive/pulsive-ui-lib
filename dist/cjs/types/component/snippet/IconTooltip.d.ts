import React, { FunctionComponent } from "react";
import { IconProps } from "./Icon";
export declare type IconTooltipProps = {
    icon: IconProps;
    text: string;
    cssClass?: string;
    onClick?: (e: React.MouseEvent) => void;
};
declare const IconTooltip: FunctionComponent<IconTooltipProps>;
export default IconTooltip;
