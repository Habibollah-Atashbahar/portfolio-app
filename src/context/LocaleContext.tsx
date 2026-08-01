"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dictionary, type Locale, type Dictionary } from "./dictionary";

type LocaleContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: Dictionary;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "maka-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  // پیش‌فرض انگلیسی است تا با HTML سمت سرور یکی باشد و صفحه لرزش نداشته باشد.
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "fa" || stored === "en") {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const toggleLocale = () =>
    setLocale((prev) => (prev === "en" ? "fa" : "en"));

  return (
    <LocaleContext.Provider
      value={{
        locale,
        dir: locale === "fa" ? "rtl" : "ltr",
        t: dictionary[locale],
        toggleLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside <LocaleProvider>");
  }
  return ctx;
}
