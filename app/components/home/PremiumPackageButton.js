import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";
import { languageCheck } from "../../helpers/locale";

const PremiumPackageButton = ({
  title,
  per,
  price,
  off,
  id,
  selectedItem,
  onSelection,
}) => {
  const isSelected = selectedItem === id;
  console.log("selectedItem", selectedItem);
  console.log("id", id);

  const style =
    languageCheck === "ar"
      ? { flexDirection: "row-reverse" }
      : { flexDirection: "row" };

  const textStyle =
    languageCheck === "ar" ? { textAlign: "right" } : { textAlign: "left" };

  return (
    <TouchableOpacity
      style={[styles.item, isSelected && styles.selectedItem]}
      onPress={() => onSelection(id)}
    >
      <Text style={[styles.title, textStyle]}>{title}</Text>
      <View style={[styles.horizontal, style]}>
        <Text style={styles.price}>{price} USD</Text>
        <Text style={styles.per}>
          {languageCheck === "ar" ? "لكل" : "/per"} {per}
        </Text>
        {off && (
          <Text style={styles.off}>
            {"("}
            {off}
            {"%)"}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PremiumPackageButton;

const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 4,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    height: 90,
    justifyContent: "center",
  },
  selectedItem: {
    borderColor: COLORS.secondary,
    borderWidth: 2,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    color: "black",
  },
  selectedText: {
    fontSize: 16,
    color: "blue",
    fontWeight: "bold",
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 3,
  },
  title: {
    fontSize: 16,
    color: "black",
  },
  per: {
    fontSize: 12,
    color: "gray",
  },
  price: {
    fontSize: 16,
    color: "black",
    fontFamily: FONTS.bold,
  },
  off: {
    fontSize: 12,
    color: COLORS.secondary,
    fontFamily: FONTS.bold,
  },
});
