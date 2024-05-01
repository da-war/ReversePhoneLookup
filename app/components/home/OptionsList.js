import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS } from "../../constants/theme";

const OptionsList = ({ data, selectItem = () => {}, selectedItem }) => {
  const renderItem = ({ item }) => {
    const isSelected = selectedItem === item.id;
    return (
      <TouchableOpacity
        style={[styles.item, isSelected && styles.selectedItem]}
        onPress={() => selectItem(item)}
      >
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.horizontal}>
          <Text style={styles.price}>{item.price} USD</Text>
          <Text style={styles.per}>/per {item.per}</Text>
          {item.off && (
            <Text style={styles.off}>
              {"("}
              {item.off}
              {"%)"}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        extraData={selectedItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
  },
  selectedItem: {
    borderColor: COLORS.secondary,
    borderWidth: 1,
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
});

export default OptionsList;
