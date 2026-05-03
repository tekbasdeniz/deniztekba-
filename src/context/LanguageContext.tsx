'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { en } from '@/translations/en';
import { tr } from '@/translations/tr';

type Language = 'en' | 'tr';
type Translations = typeof en;

interface LanguageContextType {
  lang: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('tr'); // Default to Turkish or English?

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'tr' ? 'en' : 'tr'));
  };

  const t = lang === 'en' ? en : tr;

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
