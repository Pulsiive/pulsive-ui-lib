import React, {FunctionComponent} from 'react';
import clsx from "clsx";
import IconTooltip from "../IconTooltip";

export type SearchFieldProps = {
    children: React.ReactElement;
    label: string;
    tooltip?: string;
    name?: string;
    fixedWidth?: boolean;
};

const SearchField: FunctionComponent<SearchFieldProps> = ({children, label, tooltip, name, fixedWidth}) => {
    const props = name ? {name: name, small: true} : {small: true};

    return (
        <div className={clsx("search-field", {'search-field--fixed-width': fixedWidth})}>
            <label htmlFor={name}>
                {label}
                {tooltip && <IconTooltip icon={{name: "help"}} text={tooltip} cssClass="search-field-tooltip"/>}
            </label>
            {React.cloneElement(children as React.ReactElement, props)}
        </div>
    )
};

export default SearchField;
