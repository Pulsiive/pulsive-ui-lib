import React, {FunctionComponent} from 'react';
import clsx from "clsx";

type ToggleOptionProps = {
    firstOption: string;
    secondOption: string;
    isFirstOption: boolean;
    onClick: (value: boolean, e: React.MouseEvent) => void;
    slim?: boolean;
};

const ToggleOption: FunctionComponent<ToggleOptionProps> = ({firstOption, isFirstOption, secondOption, onClick, slim}) => {
    return (
        <div className={clsx("toggle-option", {"toggle-option-slim": slim})}>
            <button type="button"
                    className={clsx("toggle-option-button", {"selected": isFirstOption})}
                    onClick={(e) => onClick(true, e)}>
                <span>{firstOption}</span>
            </button>
            <button type="button"
                    className={clsx("toggle-option-button", {"selected": !isFirstOption})}
                    onClick={(e) => onClick(false, e)}>
                <span>{secondOption}</span>
            </button>
        </div>
    );
};

export default ToggleOption;
