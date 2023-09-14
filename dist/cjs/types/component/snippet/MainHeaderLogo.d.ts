import React, { FunctionComponent } from "react";
declare type MainHeaderLogoProps = {
    link: string;
    logo: React.FunctionComponent;
    onClick: (path: string, e: React.MouseEvent) => void;
    usePreprod?: boolean;
};
declare const MainHeaderLogo: FunctionComponent<MainHeaderLogoProps>;
export default MainHeaderLogo;
