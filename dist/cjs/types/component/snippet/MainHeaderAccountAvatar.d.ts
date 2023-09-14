import React, { FunctionComponent } from 'react';
declare type MainHeaderAccountAvatarProps = {
    initials: string;
    tooltip: string;
    children: React.ReactNode;
    onOpen: (e: React.MouseEvent) => void;
};
declare const MainHeaderAccountAvatar: FunctionComponent<MainHeaderAccountAvatarProps>;
export default MainHeaderAccountAvatar;
