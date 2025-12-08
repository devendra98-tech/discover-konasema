"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Locale, defaultLocale, getTranslations } from "@/src/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale && (savedLocale === "en" || savedLocale === "te")) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
    }
  };

  const t = (path: string): string => {
    const translations = getTranslations(locale);
    const keys = path.split(".");
    let value: any = translations;

    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) {
        // Fallback to English
        const enTranslations = getTranslations("en");
        let enValue: any = enTranslations;
        for (const k of keys) {
          enValue = enValue?.[k];
        }
        return enValue || path;
      }
    }

    return typeof value === "string" ? value : path;
  };

  // Always provide the context, even during SSR
  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

