import React, {FunctionComponent} from 'react';
import clsx from "clsx";

type MainHeaderLayoutProps = {
    children: React.ReactNode;
    themeWhite?: boolean;
}

const MainHeaderLayout: FunctionComponent<MainHeaderLayoutProps> = ({children, themeWhite}) => {
    return (
        <div className={clsx("main-header", {"main-header--white": themeWhite})}>
            <div className="main-header__content">
                {children}
            </div>
        </div>
    );
}

export default MainHeaderLayout;
