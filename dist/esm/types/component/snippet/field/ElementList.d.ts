import React, { FunctionComponent } from 'react';
export declare enum ElementListSize {
    SMALL = "element-list--small",
    MEDIUM = "element-list--medium",
    BIG = "element-list--big"
}
declare type ElementListProps = {
    placeholder?: string;
    size?: ElementListSize;
    inline?: boolean;
    children?: React.ReactNode[];
};
declare const ElementList: FunctionComponent<ElementListProps>;
export default ElementList;
