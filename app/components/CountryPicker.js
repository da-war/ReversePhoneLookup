import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CountryPicker from "react-native-country-picker-modal";

const CountryPicker = ({ visible = true, onSelect }) => {
  const handleSelect = (selectedCountry) => {
    setCountry(selectedCountry);
    if (onSelect) {
      onSelect(selectedCountry);
    }
  };

  return (
    <View style={styles.container}>
      <CountryPicker
        {...{
          countryCode,
          withFilter,
          withFlag,
          withCountryNameButton,
          withAlphaFilter,
          withCallingCode,
          withEmoji,
          onSelect,
        }}
        visible
      />
      {country && (
        <View style={styles.selectedCountry}>
          <Text style={styles.countryName}>{country.name}</Text>
          <Text style={styles.countryCode}>{`+${country.callingCode}`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedCountry: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  countryName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  countryCode: {
    fontSize: 16,
  },
});

export default CountryPicker;
