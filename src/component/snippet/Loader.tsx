import React, {FunctionComponent} from "react";
import clsx from "clsx";

type LoaderProps = {
    cssClass?: string;
    small?: boolean;
};

const Loader: FunctionComponent<LoaderProps> = ({cssClass, small}) => {
    return (
        <div className={clsx("loader", cssClass, {"loader-small": small})}>
            <span />
        </div>
    );
};

export default Loader;
