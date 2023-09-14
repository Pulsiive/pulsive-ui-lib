import React, {FunctionComponent} from 'react';
import Icon, {IconProps} from '../Icon';

export type ContentBlockRowTitleProps = {
    label: string;
    icon?: IconProps;
    link?: string;
};

const ContentBlockRowTitle: FunctionComponent<ContentBlockRowTitleProps> = ({label, icon, link}) => {
    if (!label) return <></>;

    const buildTitle = () => (
        <div className="h2 content-block__title">
            {icon && <Icon {...icon}/>}
            <span dangerouslySetInnerHTML={{__html: label}}/>
        </div>
    );

    return link ? (
        <a href={link} className="content-block__header__link">
            {buildTitle()}
        </a>
    ) : buildTitle();
};

export default ContentBlockRowTitle;
