import { FunctionComponent } from 'react';
declare global {
    interface Window {
        Sddan: any;
    }
}
declare type FooterProps = {
    legalNotice?: boolean;
    cookiesSettings?: boolean;
    items?: {
        label: string;
        path: string;
    }[];
};
declare const Footer: FunctionComponent<FooterProps>;
export default Footer;
