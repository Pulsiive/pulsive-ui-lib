import React, {FunctionComponent} from "react";
import Loader from "../snippet/Loader";

type LoadableProps = {
    loading: boolean;
    children: React.ReactNode;
    loaderOptions?: {
        cssClass?: string;
        small?: boolean;
    }
};

const Loadable: FunctionComponent<LoadableProps> = ({loading, children, loaderOptions}) => {
    return (
        <>{loading ? <Loader {...loaderOptions} /> : children}</>
    );
};

export default Loadable;
