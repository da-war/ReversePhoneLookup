import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import { COLORS, FONTS } from "../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { i18n } from "../../App";
import { languageCheck } from "../helpers/locale";
const AppHeader = ({
  image = require("../../assets/icons/iconish.png"),
  title = "Phone Book",
  imageRight = require("../../assets/icons/premium.png"),
  onPressLeft,
  onPressRight,
  icon,
}) => {
  const style =
    languageCheck === "ar"
      ? { flexDirection: "row-reverse" }
      : { flexDirection: "row" };
  return (
    <View style={[styles.mainContainer, style]}>
      <View style={[styles.horizontal, style]}>
        <TouchableOpacity onPress={onPressLeft}>
          {!icon ? (
            <Image
              source={image}
              style={{ width: 40, height: 40 }}
              contentFit="contain"
            />
          ) : (
            <MaterialCommunityIcons
              name={icon}
              size={35}
              color={COLORS.white}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      {imageRight && (
        <TouchableOpacity onPress={onPressRight}>
          <Image
            source={imageRight}
            style={{ width: 30, height: 30 }}
            contentFit="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.primary,
    paddingTop: Platform.OS === "ios" ? 50 : 0,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontFamily: FONTS.bold,
    marginLeft: 10,
  },
});
