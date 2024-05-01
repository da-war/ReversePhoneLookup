import i18n from "i18n-js";
import * as Localization from "expo-localization";

// Set the initial language (optional)
i18n.locale = Localization.locale;

// Define translations
const translations = {
  en: require("./locales/en.json"),
  ar: require("./locales/ar"),
};

// Set translations
i18n.translations = translations;

export default i18n;
