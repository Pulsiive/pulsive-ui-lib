import React, {FunctionComponent} from "react";
import clsx from "clsx";

export enum MainContentStyle {
    FULL_WIDTH = "main-content--full-width",
    NARROW_WIDTH = "main-content--narrow-width",
}

type MainContentProps = {
    children: React.ReactNode;
    style?: MainContentStyle;
    cssClass?: string;
};

const MainContent: FunctionComponent<MainContentProps> = ({children, style, cssClass}) => {
    return (
        <div className={clsx("main-content", style, cssClass)}>
            {children}
        </div>
    );
};

export default MainContent;
