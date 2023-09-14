import React, {FunctionComponent} from "react";
import {useTranslation} from "react-i18next";
import Tooltip from "./Tooltip";
import {TranslationLibFile, TranslationLibKey} from "../../utils/locale";

type MainHeaderLogoProps = {
    link: string;
    logo: React.FunctionComponent;
    onClick: (path: string, e: React.MouseEvent) => void;
    usePreprod?: boolean;
};

const MainHeaderLogo: FunctionComponent<MainHeaderLogoProps> = ({link, logo, onClick, usePreprod}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    return (
        <span className="main-header__logo">
            <Tooltip text={t(TranslationLibKey.HEADER_HOME)}>
                <a onClick={(e) => onClick(link, e)}>
                    {React.createElement(logo)}
                </a>
            </Tooltip>
            {usePreprod && <span className="main-header__logo--preprod">{t(TranslationLibKey.HEADER_PREPROD)}</span>}
        </span>
    )
};

export default MainHeaderLogo;
