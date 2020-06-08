import React, { createContext, useContext } from 'react';

import i18n from 'i18n-js';
import { en, jp } from '@i18n/index';

interface ILocalizeProvider {
  children: JSX.Element;
}

export interface LocalizeContextProps {
  readonly locale: string;
  readonly setLocale: (locale: string) => void;
  readonly t: (locale: i18n.Scope, options?: i18n.TranslateOptions) => string;
}

export const LocalizationContext = createContext<LocalizeContextProps>({
  locale: 'en',
  setLocale: () => null,
  t: () => '',
});

const LocalizeProvider: React.FC<ILocalizeProvider> = ({ children }) => {
  i18n.fallbacks = true;
  i18n.translations = { jp, en };

  const [locale, setLocale] = React.useState('en');
  const localizationContext = React.useMemo(
    () => ({
      t: (scope: i18n.Scope, options: i18n.TranslateOptions | undefined) =>
        i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale],
  );

  i18n.missingTranslation = (value) => value;
  i18n.missingPlaceholder = (value) => value;
  i18n.defaultLocale = 'jp';

  return (
    <LocalizationContext.Provider value={localizationContext}>
      {children}
    </LocalizationContext.Provider>
  );
};

export function withTranslate(Component: React.ElementType) {
  return (props: JSX.IntrinsicAttributes) => {
    const { t, locale, setLocale } = useContext(LocalizationContext);
    return <Component {...props} t={t} locale={locale} setLocale={setLocale} />;
  };
}

export function useTranslation() {
  const { t, locale, setLocale } = useContext(LocalizationContext);
  return { t, locale, setLocale };
}

export default LocalizeProvider;
