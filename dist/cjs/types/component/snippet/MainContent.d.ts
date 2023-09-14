import React, { FunctionComponent } from "react";
export declare enum MainContentStyle {
    FULL_WIDTH = "main-content--full-width",
    NARROW_WIDTH = "main-content--narrow-width"
}
declare type MainContentProps = {
    children: React.ReactNode;
    style?: MainContentStyle;
    cssClass?: string;
};
declare const MainContent: FunctionComponent<MainContentProps>;
export default MainContent;
