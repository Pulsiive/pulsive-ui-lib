import React, {FunctionComponent, useEffect, useState} from 'react';
import clsx from "clsx";
import Button, {ButtonSize, ButtonStyle} from "./Button";

export type SplitButtonAction = {
    label: string;
    onClick: (e: React.MouseEvent) => void;
};

type SplitButtonProps = {
    size?: ButtonSize,
    style?: ButtonStyle,
    actions: SplitButtonAction[],
};

const SplitButton: FunctionComponent<SplitButtonProps> = ({ size, style, actions}) => {
    const [showSplitButtonMenu, toggleShowSplitButtonMenu] = useState(false);
    const [mainAction, setMainAction] = useState<SplitButtonAction>();
    const [subActions, setSubActions] = useState<SplitButtonAction[]>([]);

    useEffect(() => {
        setMainAction(actions[0]);
        const subActions = [...actions];
        subActions.splice(0,1);
        setSubActions(subActions);
    }, [actions]);

    if (!mainAction) return <></>;

    return (
        <div className={clsx("split-button", {"active": showSplitButtonMenu})}>
            <Button
                cssClass={clsx({"split-button-main": !!subActions.length})}
                size={size}
                style={style}
                onClick={mainAction.onClick}>
                {mainAction.label}
            </Button>
            {!!subActions.length &&
                <>
                    <Button
                        cssClass="split-button-more"
                        size={size}
                        style={style}
                        onClick={() => toggleShowSplitButtonMenu(prev => !prev)}
                        icon={{name: `keyboard_arrow_${showSplitButtonMenu ? 'up' : 'down'}`}}>
                        &nbsp;
                    </Button>
                    <ul className="split-button-menu">
                        {subActions.map(({label, onClick}, index) =>
                            <li key={index} onClick={onClick}><span>{label}</span></li>
                        )}
                    </ul>
                </>
            }
        </div>
    );
};

export default SplitButton;
