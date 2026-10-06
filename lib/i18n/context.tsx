'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from '@/locales/en/common.json';
import hiTranslations from '@/locales/hi/common.json';
import taTranslations from '@/locales/ta/common.json';

export type SupportedLanguage = 'en' | 'hi' | 'ta';

interface I18nContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string) => string;
}

const translationsMap = {
  en: enTranslations,
  hi: hiTranslations,
  ta: taTranslations,
};

const I18nContext = createContext<I18nContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('learndawn_lang') as SupportedLanguage;
      if (saved && ['en', 'hi', 'ta'].includes(saved)) {
        queueMicrotask(() => {
          setLanguageState(saved);
        });
      }
    } catch {
      // Storage unavailable
    }
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('learndawn_lang', lang);
    }
  };

  const t = (key: string): string => {
    const currentDict = translationsMap[language] || translationsMap.en;
    const parts = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let current: any = currentDict;
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        // Fallback to English
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let fallback: any = translationsMap.en;
        for (const p of parts) {
          if (fallback && typeof fallback === 'object' && p in fallback) {
            fallback = fallback[p];
          } else {
            return key;
          }
        }
        return typeof fallback === 'string' ? fallback : key;
      }
    }
    return typeof current === 'string' ? current : key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useLanguage = () => useContext(I18nContext);
