import React, {FunctionComponent} from 'react';
import PhoneInput, {Country, isSupportedCountry} from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import clsx from "clsx";

export enum InputPhoneLocale {
    FRENCH = "fr",
    ENGLISH = "en"
}

type InputPhoneProps = {
    name: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    locale?: InputPhoneLocale;
    country?: string;
    onCountryChange?: (value?: string) => void;
    small?: boolean;
};

const InputPhone: FunctionComponent<InputPhoneProps> = ({name, placeholder, value, onChange, locale = InputPhoneLocale.ENGLISH , country= "FR", onCountryChange, small}) => {
    const labels = require(`react-phone-number-input/locale/${locale}.json`);

    return (
        <PhoneInput className={clsx("input-phone", {"input--small": small})}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    labels={labels}
                    defaultCountry={"FR"}
                    value={value}
                    onChange={onChange}
                    country={isSupportedCountry(country as Country) ? country : "FR"}
                    onCountryChange={onCountryChange}
                    addInternationalOption={false}/>
    );
};

export default InputPhone;
