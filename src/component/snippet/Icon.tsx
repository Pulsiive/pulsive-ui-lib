import React, {FunctionComponent} from 'react';
import clsx from "clsx";

export type IconProps = {
    name: string;
    outlined?: boolean;
    colorIcon?: string;
    onClick?: (e: React.MouseEvent) => void;
    cssClass?: string;
};

const Icon: FunctionComponent<IconProps> = ({name, cssClass, outlined, onClick, colorIcon}) => {
    return (
        <i
            style={{color: colorIcon}}
            className={clsx(
                "material-icons" + (outlined ? "-outlined": ""),
                {"clickable": onClick},
                cssClass
            )}
            onClick={onClick}
        >
                {name}
        </i>
    );
};

export default Icon;
