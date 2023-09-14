import React, {FunctionComponent} from 'react';
import clsx from "clsx";

type MainHeaderSubLayoutProps = {
    children: React.ReactNode;
    cssClass?: string;
}

const MainHeaderSubLayout: FunctionComponent<MainHeaderSubLayoutProps> = ({children, cssClass}) => {
    return (
        <div className={clsx("main-header-sub", cssClass)}>
            {children}
        </div>
    );
}

export default MainHeaderSubLayout;
