import React, { createContext, useContext, useEffect } from "react";
import create from "zustand";
import { I18nManager } from "react-native";
import { I18n } from "i18n-js";

const useLanguageStore = create((set) => ({
  currentLanguage: "en",
  setLanguage: (language) => set({ currentLanguage: language }),
}));

const LanguageContext = createContext();

export const LanguageProvider = ({ children, i18n }) => {
  const { currentLanguage, setLanguage } = useLanguageStore();

  const changeLanguage = (language) => {
    setLanguage(language);
    i18n.locale = language;
    I18nManager.forceRTL(language === "ar");
  };

  useEffect(() => {
    i18n.locale = currentLanguage;
    I18nManager.forceRTL(currentLanguage === "ar");
  }, [currentLanguage, i18n]);

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        changeLanguage,
        t: (key) => i18n.t(key),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
