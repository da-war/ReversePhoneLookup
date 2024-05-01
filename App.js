import { StatusBar } from "expo-status-bar";
import AppNavigator from "./app/navigations/AppNavigator";

import { useFonts } from "expo-font";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { COLORS } from "./app/constants/theme";
import Onboarding from "./app/navigations/Onboarding";
import { I18nManager, Platform } from "react-native";
import * as Updates from "expo-updates";

import { I18n } from "i18n-js";
import { en } from "./app/localization/locales/en";
import { ar } from "./app/localization/locales/ar";

import * as Localization from "expo-localization";

const translations = {
  ar: ar,
  en: en,
};
export const i18n = new I18n(translations);

export default function App() {
  const [fontsLoaded] = useFonts({
    EncodeSansBold: require("./assets/fonts/Urbanist-Bold.ttf"),
    EncodeSansBoldItalic: require("./assets/fonts/Urbanist-BoldItalic.ttf"),
    EncodeSansSemiBold: require("./assets/fonts/Urbanist-SemiBold.ttf"),
    EncodeSansSemiBoldItalic: require("./assets/fonts/Urbanist-SemiBoldItalic.ttf"),
    EncodeSansMedium: require("./assets/fonts/Urbanist-Medium.ttf"),
    EncodeSansMediumItalic: require("./assets/fonts/Urbanist-MediumItalic.ttf"),
    EncodeSansRegular: require("./assets/fonts/Urbanist-Regular.ttf"),
    EncodeSansRegularItalic: require("./assets/fonts/Urbanist-Italic.ttf"),
    EncodeSansLight: require("./assets/fonts/Urbanist-Light.ttf"),
    EncodeSansLightItalic: require("./assets/fonts/Urbanist-LightItalic.ttf"),
  });

  if (!fontsLoaded) return null;

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.white,
    },
  };

  //get the device language
  const locale = Localization.getLocales()[0].languageCode;
  console.log("locale", locale);
  //set the device language
  i18n.locale = locale;

  // Set the layout direction based on the locale

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {/* <AppNavigator /> */}
      <Onboarding />
    </NavigationContainer>
  );
}
