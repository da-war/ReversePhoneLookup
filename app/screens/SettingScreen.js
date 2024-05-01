import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import SettingButton from "../components/settings/SettingButton";
import { i18n } from "../../App";
import { languageCheck } from "../helpers/locale";

const SettingScreen = () => {
  const style =
    i18n.locale === "ar"
      ? { flexDirection: "row-reverse" }
      : { flexDirection: "row" };

  const textStyle =
    languageCheck === "ar" ? { textAlign: "right" } : { textAlign: "left" };
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="light" />
      <View style={styles.topContainer}>
        <Text style={[styles.title, textStyle]}>{i18n.t("setting")}</Text>
      </View>

      <View style={{ marginTop: 15 }}>
        <SettingButton
          icon={require("../../assets/icons/money.png")}
          title={i18n.t("profile")}
          style={{ borderRadius: 20 }}
        />
        <View style={{ marginTop: 10, borderRadius: 10, overflow: "hidden" }}>
          <SettingButton
            icon={require("../../assets/icons/privacy.png")}
            title={i18n.t("notifications")}
            style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          />
          <SettingButton
            icon={require("../../assets/icons/terms.png")}
            title={i18n.t("privacy")}
          />
          <SettingButton
            icon={require("../../assets/icons/chat.png")}
            title={i18n.t("security")}
            style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: COLORS.primary,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F6F6F6",
    paddingTop: 55,
  },
  title: {
    fontSize: 24,
    color: COLORS.white,
    fontWeight: "bold",
  },
});
