import { getLocales } from "expo-localization";

export const languageCheck = () => {
  const locale = getLocales()[0].languageCode;
  return locale;
};
