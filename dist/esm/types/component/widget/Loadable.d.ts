import React, { FunctionComponent } from "react";
declare type LoadableProps = {
    loading: boolean;
    children: React.ReactNode;
    loaderOptions?: {
        cssClass?: string;
        small?: boolean;
    };
};
declare const Loadable: FunctionComponent<LoadableProps>;
export default Loadable;
