import {
  Alert,
  FlatList,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import { Image } from "expo-image";
import { COLORS, FONTS } from "../constants/theme";
import { i18n } from "../../App";
import HorizontalInfos from "../components/home/HorizontalInfos";
import HorizontalPromo from "../components/home/HorizontalPromo";
import OptionsList from "../components/home/OptionsList";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import PremiumPackageButton from "../components/home/PremiumPackageButton";
import AppButton from "../components/AppButton";
import LottieView from "lottie-react-native";
import { languageCheck } from "../helpers/locale";

const ResultPro = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const name = "John Doe";
  const country = "United States";
  const location = "85 Al Falouga Street, El-Arish";
  const localFormat = "123456789";
  const internationalFormat = "+1-123456789";
  const carrier = "AT&T Mobility LLC";
  const lineType = "Mobile";

  const onRate = () => {
    const isEnglish = languageCheck === "en";

    if (isEnglish) {
      Alert.alert(
        " 😍 " + i18n.t("enjoyingOurApp"),
        i18n.t("rateUs"),
        [
          {
            text: i18n.t("notNow"),
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: i18n.t("rateNow"), onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        " 😍 " + i18n.t("enjoyingOurApp"),
        i18n.t("rateUs"),
        [
          { text: i18n.t("rateNow"), onPress: () => console.log("OK Pressed") },
          {
            text: i18n.t("notNow"),
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    }
  };

  React.useLayoutEffect(() => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }, []);

  const textStyle =
    languageCheck === "ar" ? { textAlign: "right" } : { textAlign: "left" };
  const style =
    languageCheck === "ar"
      ? { flexDirection: "row-reverse" }
      : { flexDirection: "row" };

  const icon = languageCheck === "ar" ? "chevron-right" : "chevron-left";
  console.log("languageCheck", languageCheck());
  return (
    <>
      <View style={styles.mainContainer}>
        <ScrollView>
          <AppHeader
            title={i18n.t("result")}
            onPressLeft={() => navigation.goBack()}
            icon={languageCheck() === "ar" ? "chevron-right" : "chevron-left"}
          />

          <View style={styles.info}>
            <Image
              source={require("../../assets/icons/low.png")}
              style={{ width: 80, height: 80 }}
              contentFit="contain"
            />
            <Text style={styles.title}>{i18n.t("lowRisk")}</Text>
          </View>
          <View style={styles.infoDetails}>
            <HorizontalInfos
              title={i18n.t("valid")}
              icon={require("../../assets/icons/tick.png")}
            />
            <HorizontalInfos title={i18n.t("name")} description={name} />
            <HorizontalInfos title={i18n.t("country")} description={country} />
            <HorizontalInfos
              title={i18n.t("location")}
              description={location}
            />
            <HorizontalInfos
              title={i18n.t("localFormat")}
              description={localFormat}
            />
            <HorizontalInfos
              title={i18n.t("internationalFormat")}
              description={internationalFormat}
            />
            <HorizontalInfos title={i18n.t("carrier")} description={carrier} />
            <HorizontalInfos
              title={i18n.t("lineType")}
              description={lineType}
            />

            <TouchableOpacity
              onPress={() => onRate()}
              style={[styles.promo, style]}
            >
              <View style={[styles.lefty, style]}>
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require("../../assets/icons/star.png")}
                />
                <Text style={styles.texto}>{i18n.t("rateApp")}</Text>
              </View>
              <MaterialCommunityIcons
                name={i18n.locale === "en" ? "chevron-right" : "chevron-left"}
                size={28}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Modal animationType="slide" style={styles.mainModal} visible={visible}>
        <View style={styles.mainInner}>
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

export default ResultPro;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 20,
    right: 20,
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    marginTop: 15,
  },
  promo: {
    paddingVertical: 20,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 14,
    backgroundColor: COLORS.white,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title1: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    fontSize: 18,
    marginVertical: 2,
  },
  title2: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    fontSize: 14,
    marginVertical: 2,
  },
  mainModal: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 40,
  },
  mainInner: {
    paddingTop: Platform.OS === "ios" ? 50 : 0,
    padding: 40,
  },
  texto: {
    color: COLORS.primary,
  },
  lefty: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  titleM: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    textAlign: "center",
    color: COLORS.primary,
    marginTop: 30,
    marginBottom: 20,
  },
});
