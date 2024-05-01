import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";
import { languageCheck } from "../../helpers/locale";

const SettingButton = ({ icon, title, style }) => {
  const theStyle =
    languageCheck === "ar"
      ? { flexDirection: "row-reverse" }
      : { flexDirection: "row" };
  return (
    <TouchableOpacity style={[styles.mainContainer, style, theStyle]}>
      <Image
        source={icon}
        style={{ width: 24, height: 24 }}
        resizeMode="contain"
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SettingButton;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    overflow: "hidden",
    gap: 10,
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
    color: COLORS.font,
  },
});
