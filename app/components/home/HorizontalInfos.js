import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { FONTS } from "../../constants/theme";
import { i18n } from "../../../App";
import { languageCheck } from "../../helpers/locale";

const HorizontalInfos = ({ title, icon, description }) => {
  const style =
    languageCheck === "ar"
      ? { flexDirection: "row-reverse" }
      : { flexDirection: "row" };

  const textStyle =
    languageCheck === "ar" ? { textAlign: "right" } : { textAlign: "left" };
  return (
    <View style={[styles.mainContainer, style]}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
      {icon && <Image source={icon} style={{ width: 25, height: 25 }} />}
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default HorizontalInfos;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    paddingHorizontal: 20,
    gap: 10,
  },
  title: {
    width: Dimensions.get("window").width / 3.5,
    fontSize: 14,
    fontFamily: FONTS.semiBold,
  },
  description: {
    fontSize: 18,
    color: "black",
    fontFamily: FONTS.medium,
  },
});
