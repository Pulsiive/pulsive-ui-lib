import React, { FunctionComponent } from 'react';
import { IconProps } from "./Icon";
declare type MainHeaderItemProps = {
    icon: IconProps;
    label: string;
    active: boolean;
    onOpen: (e: React.MouseEvent) => void;
    onClose?: (e: React.MouseEvent) => void;
    children?: React.ReactNode;
    mobileOnly?: boolean;
    withChip?: boolean;
    showLabel?: boolean;
};
declare const MainHeaderItem: FunctionComponent<MainHeaderItemProps>;
export default MainHeaderItem;
