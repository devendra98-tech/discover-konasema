import en from "./en.json";
import te from "./te.json";

export type Locale = "en" | "te";

export const locales: Locale[] = ["en", "te"];
export const defaultLocale: Locale = "en";

export const translations = {
  en,
  te,
} as const;

export function getTranslations(locale: Locale = defaultLocale) {
  return translations[locale] || translations[defaultLocale];
}

export function getNestedTranslation(
  locale: Locale,
  path: string
): string {
  const keys = path.split(".");
  let value: any = translations[locale] || translations[defaultLocale];

  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) {
      // Fallback to English if translation missing
      value = translations[defaultLocale];
      for (const k of keys) {
        value = value?.[k];
      }
      break;
    }
  }

  return value || path;
}

