import {
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
import { useNavigation } from "@react-navigation/native";
import { languageCheck } from "../helpers/locale";

const Result = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      title: i18n.t("lifeTimeLookup"),
      per: i18n.t("lifetime"),
      price: "69.99",
      off: "80",
    },
    {
      id: 2,
      title: i18n.t("yearlyTimeLookup"),
      per: i18n.t("yearly"),
      price: "48.99",
    },
    {
      id: 3,
      title: i18n.t("monthlyTimeLookup"),
      per: i18n.t("monthly"),
      price: "9.99",
    },
  ];

  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1);

  const onSelectItem = (item) => {
    setSelectedItem(item);
    console.log(item);
  };

  const selectPackage = () => {
    setVisible(true);
  };
  const textStyle =
    languageCheck === "ar" ? { textAlign: "right" } : { textAlign: "left" };
  const icon = languageCheck() === "ar" ? "chevron-right" : "chevron-left";

  return (
    <>
      <View style={styles.mainContainer}>
        <ScrollView>
          <AppHeader
            title={i18n.t("result")}
            onPressLeft={() => navigation.goBack()}
            icon={icon}
          />

          <View style={styles.info}>
            <Image
              source={require("../../assets/icons/un.png")}
              style={{ width: 80, height: 80 }}
              contentFit="contain"
            />
            <Text style={styles.title}>{i18n.t("unlockToSee")}</Text>
          </View>
          <View style={styles.infoDetails}>
            <HorizontalInfos
              title={i18n.t("valid")}
              icon={require("../../assets/icons/tick.png")}
            />
            <HorizontalInfos
              title={i18n.t("name")}
              description="****** *****"
            />
            <HorizontalInfos
              title={i18n.t("country")}
              description="United States of America"
            />
            <HorizontalInfos
              title={i18n.t("location")}
              description="****** *****"
            />
            <HorizontalInfos
              title={i18n.t("localFormat")}
              description="123456789"
            />
            <HorizontalInfos
              title={i18n.t("internationalFormat")}
              description="+1-123456789"
            />
            <HorizontalInfos
              title={i18n.t("carrier")}
              description="AT&T Mobility LLC"
            />
            <HorizontalInfos title={i18n.t("lineType")} description="Mobile" />

            <TouchableOpacity
              onPress={() => selectPackage()}
              style={[styles.promo]}
            >
              <Text style={[styles.title1, textStyle]}>{i18n.t("goPro")}</Text>
              <Text style={[styles.title1, textStyle]}>
                {i18n.t("unlimited")}
              </Text>
              <Text style={[styles.title2, textStyle]}>
                {i18n.t("lifeTime")}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Modal animationType="slide" style={styles.mainModal} visible={visible}>
        <View style={styles.mainInner}>
          <View>
            <Text style={styles.titleM}>{i18n.t("getUnlimited")}</Text>

            <HorizontalPromo
              title={i18n.t("caller")}
              icon={require("../../assets/icons/caller.png")}
            />
            <HorizontalPromo
              title={i18n.t("locationTracker")}
              icon={require("../../assets/icons/location.png")}
            />
            <HorizontalPromo
              title={i18n.t("emailLookup")}
              icon={require("../../assets/icons/email.png")}
            />
            <HorizontalPromo
              title={i18n.t("spamBlocker")}
              icon={require("../../assets/icons/shield.png")}
            />
          </View>

          <View style={{ marginTop: 30 }}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <PremiumPackageButton
                  title={item.title}
                  price={item.price}
                  per={item.per}
                  off={item.off}
                  selectedItem={selectedItem}
                  onSelection={onSelectItem}
                  id={item.id}
                />
              )}
            />
          </View>

          <AppButton
            title={i18n.t("continue")}
            style={{ marginTop: 25 }}
            onPress={() => {
              setVisible(false);
              navigation.navigate("resultpro");
            }}
          />

          <View style={styles.absolute}>
            <MaterialCommunityIcons
              name="close"
              size={24}
              color={COLORS.primary}
              onPress={() => setVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Result;

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
    backgroundColor: COLORS.primary,
    marginTop: 30,
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

  titleM: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    textAlign: "center",
    color: COLORS.primary,
    marginTop: 30,
    marginBottom: 20,
  },
});
