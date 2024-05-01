import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { COLORS, FONTS } from "../constants/theme";

const AppButton = ({
  onPress,
  title = "Button",
  style,
  titleStyle,
  backgroundColor = COLORS.primary,
  titleColor = COLORS.white,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.mainContainer,
        style,
        { backgroundColor: backgroundColor },
      ]}
      onPress={onPress}
    >
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[styles.title, titleStyle, { color: titleColor }]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.semiBold,
  },
});
