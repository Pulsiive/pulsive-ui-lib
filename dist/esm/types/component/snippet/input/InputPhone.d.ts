import { FunctionComponent } from 'react';
import 'react-phone-number-input/style.css';
export declare enum InputPhoneLocale {
    FRENCH = "fr",
    ENGLISH = "en"
}
declare type InputPhoneProps = {
    name: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    locale?: InputPhoneLocale;
    country?: string;
    onCountryChange?: (value?: string) => void;
    small?: boolean;
};
declare const InputPhone: FunctionComponent<InputPhoneProps>;
export default InputPhone;
