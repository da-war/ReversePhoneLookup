import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { COLORS, FONTS } from "../../constants/theme";
import { i18n } from "../../../App";
import { languageCheck } from "../../helpers/locale";

const HorizontalPromo = ({ title, icon }) => {
  const style =
    languageCheck === "ar"
      ? { flexDirection: "row-reverse" }
      : { flexDirection: "row" };

  const textStyle =
    languageCheck === "ar" ? { textAlign: "right" } : { textAlign: "left" };
  return (
    <View style={[styles.mainContainer, style]}>
      <View style={{ width: "15%" }}>
        <Image
          source={icon}
          style={{ width: 24, height: 24 }}
          contentFit="contain"
        />
      </View>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </View>
  );
};

export default HorizontalPromo;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    paddingHorizontal: 20,
    gap: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.grayDark,
  },
});
