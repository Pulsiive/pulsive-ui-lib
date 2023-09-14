import React, { FunctionComponent } from 'react';
declare type ToggleOptionProps = {
    firstOption: string;
    secondOption: string;
    isFirstOption: boolean;
    onClick: (value: boolean, e: React.MouseEvent) => void;
    slim?: boolean;
};
declare const ToggleOption: FunctionComponent<ToggleOptionProps>;
export default ToggleOption;
