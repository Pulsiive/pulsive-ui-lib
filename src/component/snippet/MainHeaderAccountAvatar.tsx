import React, {FunctionComponent} from 'react';
import Tooltip from "./Tooltip";
import Icon from "./Icon";

type MainHeaderAccountAvatarProps = {
    initials: string;
    tooltip: string;
    children: React.ReactNode;
    onOpen: (e: React.MouseEvent) => void;
}

const MainHeaderAccountAvatar: FunctionComponent<MainHeaderAccountAvatarProps> = ({children, initials, tooltip, onOpen}) => {
    return (
        <div className="main-header-account__avatar" onClick={onOpen}>
            <Tooltip text={tooltip}>
                <span className="main-header-account__avatar__content">{initials || <Icon name="person"/>}</span>
            </Tooltip>
            {children}
        </div>
    );
}

export default MainHeaderAccountAvatar;
