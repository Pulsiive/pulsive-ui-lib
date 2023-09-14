import React, {FunctionComponent} from 'react';
import clsx from "clsx";

type HeroHeaderProps = {
    title: string;
    cssClass?: string;
};

const HeroHeader: FunctionComponent<HeroHeaderProps> = ({title, cssClass}) => {
    return (
        <header
            className={clsx(
                "hero-header",
                cssClass
            )}
        >
            <span className="hero-header__content" dangerouslySetInnerHTML={{ __html: title }} />
        </header> 
    );
};

export default HeroHeader;
