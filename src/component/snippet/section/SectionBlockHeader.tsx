import React, {FunctionComponent} from 'react';
import Icon, {IconProps} from "../Icon";

export type SectionBlockHeaderProps = {
    title: string;
    icon?: IconProps;
    link?: string;
    action?: React.ReactNode;
};

const SectionBlockHeader: FunctionComponent<SectionBlockHeaderProps> = ({title, icon, link, action}) => {
    const buildTitle = () => {
        return (
            <div className="h2 section-block__header__title">
                {icon && <Icon {...icon}/>}
                {title}
            </div>
        );
    };

    return (
        <div className="section-block__header">
            {link ? <a href={link}>{buildTitle()}</a> : buildTitle()}
            {action}
        </div>
    )
};

export default SectionBlockHeader;
