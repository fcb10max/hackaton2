import React, { PropsWithChildren, createContext, useState } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "../localeMessages/en.json";
import ruMessages from "../localeMessages/ru.json";
import tmMessages from "../localeMessages/tm.json";

export const LocaleContext = createContext({
    locale: "en",
    setLocale: (_newLocale: string) => { }
});

export const LOCALES = [
    {
        code: "en",
        label: "English"
    },
    {
        code: "ru",
        label: "Русский"
    },
    {
        code: "tm",
        label: "Türkmen"
    },
];

const messages = {
    [LOCALES[0].code]: enMessages,
    [LOCALES[1].code]: ruMessages,
    [LOCALES[2].code]: tmMessages,
}

const LocalizationProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const defaultLang = localStorage.getItem("lang") ?? "en"
    const [locale, setLocale] = useState(defaultLang);

    const onLocaleChange = (newLocale: string) => {
        setLocale(newLocale);
        localStorage.setItem("lang", newLocale);
    }

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <LocaleContext.Provider value={{ locale, setLocale: onLocaleChange }}>
                {children}
            </LocaleContext.Provider>
        </IntlProvider>
    )
}

export default LocalizationProvider;