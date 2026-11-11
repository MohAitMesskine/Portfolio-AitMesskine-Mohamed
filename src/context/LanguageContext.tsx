import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  tr: (english: string, french: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    return localStorage.getItem('language') === 'fr' ? 'fr' : 'en';
  });

  const toggleLanguage = () => {
    setLanguage((current) => {
      const next = current === 'en' ? 'fr' : 'en';
      localStorage.setItem('language', next);
      document.documentElement.lang = next;
      return next;
    });
  };

  const tr = (english: string, french: string) => language === 'fr' ? french : english;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, tr }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
