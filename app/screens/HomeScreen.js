import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import LottieView from "lottie-react-native";
import PhoneInput from "react-native-phone-number-input";
import { COLORS, FONTS } from "../constants/theme";
import AppHeader from "../components/AppHeader";
import AppButton from "../components/AppButton";
import { i18n } from "../../App";
import CountryPicker from "react-native-country-picker-modal";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { languageCheck } from "../helpers/locale";

const dataNumbers = [
  // "1234567890",
  // "1234567890",
  // "1234567890",
  // "1234567890",
  // "1234567890",
  {
    id: 1,
    number: "1234567890",
    date: "2021-09-01",
  },
  {
    id: 2,
    number: "1234567890",
    date: "2021-09-01",
  },
  {
    id: 3,
    number: "1234567890",
    date: "2021-09-01",
  },
];
const HomeScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [country, setCountry] = useState({});
  const [countryCode, setCountryCode] = useState("US"); // Use initialCountryCode
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);
  const [callingCode, setCallingCode] = useState("1");

  const onSelect = (country) => {
    setIsVisible(false);
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode);
    setCountry(country);
  };

  const textStyle = {
    textAlign: languageCheck() === "ar" ? "right" : "left",
  };

  const inputStyle = {
    //the input style must be right to left when the language check ==='ar'
    textAlign: languageCheck() === "ar" ? "right" : "left",
    writingDirection: languageCheck() === "ar" ? "rtl" : "ltr",
  };

  const style =
    languageCheck === "ar"
      ? { flexDirection: "row-reverse" }
      : { flexDirection: "row" };

  const onSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("resultnp");
    }, 2000);
  };

  useLayoutEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <View style={styles.mainContainer}>
        <AppHeader />
        <View style={[styles.numberContainer, style]}>
          <View style={[styles.countryInfoContainer, style]}>
            <CountryPicker
              {...{
                countryCode,
                withFilter,
                withFlag,
                withCountryNameButton,
                withAlphaFilter,
                withCallingCode,
                withEmoji,
                onOpen: () => setIsVisible(true),
                onSelect,
              }}
              visible={isVisible}
            />
            <Text style={[styles.callingCode, textStyle]}>+{callingCode}</Text>
          </View>
          <TextInput
            placeholder={i18n.t("phoneNumber")}
            style={[styles.input, inputStyle]}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            placeholderTextColor={COLORS.grey}
          />
        </View>

        {dataNumbers.length > 0 && (
          <View style={styles.listContainer}>
            <Text
              style={[
                styles.heading,
                languageCheck() === "ar"
                  ? { textAlign: "left" }
                  : { textAlign: "left" },
              ]}
            >
              {i18n.t("recentSearches")}
            </Text>
            <FlatList
              data={dataNumbers}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <View style={styles.numberContainer}>
                  <View>
                    <Text style={styles.number}>{item.number}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                  </View>
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={24}
                    color={COLORS.primary}
                  />
                </View>
              )}
            />
          </View>
        )}
        {dataNumbers.length === 0 && (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{
                fontFamily: FONTS.bold,
                color: COLORS.secondary,
                fontSize: 18,
                marginTop: 20,
              }}
            >
              {i18n.t("haveNotSearched")}
            </Text>
          </View>
        )}

        <View style={styles.btnContainer}>
          <AppButton
            title={i18n.t("search")}
            onPress={() => onSearch()}
            style={{ borderRadius: 7, marginHorizontal: 40 }}
          />
        </View>
      </View>
      <Modal visible={loading}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <LottieView
            source={require("../../assets/animations/animation.json")}
            loop
            autoPlay
            style={{ width: 200, height: 200, alignSelf: "center" }}
          />
        </View>
      </Modal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 15,
    marginTop: 35,
    alignSelf: "center",
    borderRadius: 12,
    overflow: "hidden",
  },
  mainContainer: {
    flex: 1,
  },
  input: {
    flex: 1,
    fontFamily: FONTS.regular,
    color: COLORS.font,
    writingDirection: "ltr",
  },
  btnContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  number: {
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
    fontSize: 16,
  },
  date: {
    fontFamily: FONTS.regular,
    color: COLORS.font,
    fontSize: 12,
  },

  numberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    marginHorizontal: 30,
    borderRadius: 12,
    marginTop: 10,
  },
  countryInfoContainer: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 20,
    gap: 10,
    backgroundColor: COLORS.white,
  },

  heading: {
    marginLeft: 40,
    marginVertical: 10,
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
    fontSize: 18,
  },
});
