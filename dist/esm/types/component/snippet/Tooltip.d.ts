import React, { FunctionComponent } from "react";
declare type TooltipProps = {
    children: React.ReactNode;
    text: string;
    cssClass?: string;
    onClick?: (e: React.MouseEvent) => void;
};
declare const Tooltip: FunctionComponent<TooltipProps>;
export default Tooltip;
