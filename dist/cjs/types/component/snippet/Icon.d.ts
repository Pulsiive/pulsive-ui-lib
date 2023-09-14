import React, { FunctionComponent } from 'react';
export declare type IconProps = {
    name: string;
    outlined?: boolean;
    colorIcon?: string;
    onClick?: (e: React.MouseEvent) => void;
    cssClass?: string;
};
declare const Icon: FunctionComponent<IconProps>;
export default Icon;
