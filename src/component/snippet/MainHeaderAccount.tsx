import React, {FunctionComponent} from 'react';
import clsx from "clsx";

type MainHeaderAccountProps = {
    children: React.ReactNode;
    themeWhite?: boolean;
}

const MainHeaderAccount: FunctionComponent<MainHeaderAccountProps> = ({children, themeWhite}) => {
    return (
        <div className={clsx("main-header-account", {"main-header-account--white": themeWhite})}>
            {children}
        </div>
    );
}

export default MainHeaderAccount;
