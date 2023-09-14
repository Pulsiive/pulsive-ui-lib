import React, {FunctionComponent} from "react";
import Icon, {IconProps} from "./Icon";

type MainPageHeaderProps = {
    title: string;
    icon?: IconProps;
};

const MainPageHeader: FunctionComponent<MainPageHeaderProps> = ({title, icon}) => {
    return (
        <div className="main-content__header">
            <div className="main-content__header__item">
                {icon && (
                    <span className="main-content__header__icon">
                        <Icon {...icon} />
                    </span>
                )}
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default MainPageHeader;
