import React, {FunctionComponent} from 'react';
import clsx from "clsx";

export enum ElementListSize {
    SMALL = "element-list--small",
    MEDIUM = "element-list--medium",
    BIG = "element-list--big"
}

type ElementListProps = {
    placeholder?: string;
    size?: ElementListSize;
    inline?: boolean;
    children?: React.ReactNode[];
};

const ElementList: FunctionComponent<ElementListProps> = ({placeholder, size = ElementListSize.MEDIUM, inline, children}) => {
    return (
        <div className={clsx("element-list", {"element-list--inline": inline}, size)}>
            {children?.length ?
                children :
                <span className="element-list__placeholder">
                    {placeholder}
                </span>
            }
        </div>
    );
};

export default ElementList;
