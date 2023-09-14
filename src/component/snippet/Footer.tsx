import React, {FunctionComponent} from 'react';
import {useTranslation} from "react-i18next";
import {pathLegalNotice} from "../../utils/constants";
import {TranslationLibFile, TranslationLibKey} from "../../utils/locale";

declare global {
    interface Window {
        Sddan: any;
    }
}

type FooterProps = {
    legalNotice?: boolean;
    cookiesSettings?: boolean;
    items?: {
        label: string;
        path: string;
    }[];
};

const Footer: FunctionComponent<FooterProps> = ({legalNotice, cookiesSettings, items}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);

    const hasFooter = legalNotice || cookiesSettings || !!items?.length;
    if (!hasFooter) {
        return <></>;
    }

    return (
        <div className="footer">
            {legalNotice &&
                <a className="footer__link" href={pathLegalNotice} target="_blank" rel="noopener noreferrer"><span>{t(TranslationLibKey.FOOTER_LEGAL_NOTICE)}</span></a>
            }
            {cookiesSettings &&
                <span className="footer__link" onClick={() => window.Sddan.cmp.displayUI()}><span>{t(TranslationLibKey.FOOTER_COOKIES_SETTINGS)}</span></span>
            }
            {items?.map(({label, path}, index) =>
                <a key={index} className="footer__link" href={path} target="_blank" rel="noopener noreferrer"><span>{label}</span></a>
            )}
        </div>
    );
};

export default Footer;
