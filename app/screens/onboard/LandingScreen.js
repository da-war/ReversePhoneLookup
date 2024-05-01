import {
  Alert,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";
import SwiperFlatList from "react-native-swiper-flatlist";
import { width } from "../../constants/gConstants";
import { COLORS, FONTS } from "../../constants/theme";
import { Image } from "expo-image";
import { Entypo } from "@expo/vector-icons";

import AppButton from "../../components/AppButton";
import { i18n } from "../../../App";
import { horizontal } from "react-native-swiper-flatlist/src/themes";

const LandingScreen = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const swiperRef = useRef(null);

  const dataOriginal = [
    {
      id: 1,
      title: i18n.t("welcome"),
      description: i18n.t("welcomeText"),
      image: require("../../../assets/images/one1.png"),
      btnTitle: i18n.t("getstarted"),
    },
    {
      id: 2,
      title: i18n.t("power"),
      description: i18n.t("powerText"),
      image: require("../../../assets/images/two2.png"),
      btnTitle: i18n.t("continue"),
    },
    {
      id: 3,
      title: i18n.t("unlock"),
      description: i18n.t("unlockText"),
      image: require("../../../assets/images/three3.png"),
      btnTitle: i18n.t("premiumAccess"),
    },
  ];

  const handleNext = (item) => {
    if (index < dataOriginal.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
      swiperRef.current.scrollToIndex({ index: index + 1 });
    }
    if (item === i18n.t("premiumAccess")) {
      Alert.alert("Premium Access");
      navigation.navigate("app");
    }
  };

  return (
    <View style={styles.container}>
      <SwiperFlatList
        ref={swiperRef}
        index={index}
        showPagination
        paginationActiveColor={COLORS.primary}
        paginationDefaultColor={COLORS.grey}
        scrollEnabled={false}
        //scroll direction
        style={{ height: Dimensions.get("window").height }}
        paginationStyle={{
          bottom: Dimensions.get("window").height / 2 - 130,
        }}
        data={dataOriginal}
        paginationStyleItemActive={{ width: 30, height: 10 }}
        initialScrollIndex={0}
        paginationStyleItemInactive={{ width: 10, height: 10 }}
        renderItem={({ item }) => (
          <View style={[styles.child, { backgroundColor: item }]}>
            <Image
              source={item.image}
              style={{ width: 300, height: 300, marginTop: 50 }}
              contentFit="contain"
            />

            <View style={styles.textContainer}>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.btnContainer}>
              <AppButton
                title={item.btnTitle}
                onPress={() => handleNext(item.btnTitle)}
              />
              {index > 1 && (
                <View style={styles.horizontal}>
                  <Text style={styles.horizontalText}>
                    {i18n.t("termsOfUse")}
                  </Text>
                  <Text style={styles.horizontalText}>
                    {i18n.t("privacyPolicy")}
                  </Text>
                  <Text style={styles.horizontalText}>{i18n.t("restore")}</Text>
                </View>
              )}
            </View>
          </View>
        )}
      />

      {index === 2 && (
        <View style={styles.absolute}>
          <Entypo name="cross" size={28} color={COLORS.primary} />
        </View>
      )}
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", paddingTop: 50 },
  child: {
    width,

    height: Dimensions.get("window").height,
    alignItems: "center",
  },
  absolute: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 20,
    right: 20,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: COLORS.black,
    fontFamily: FONTS.bold,
  },
  textContainer: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  description: {
    fontSize: 12,
    textAlign: "center",
    color: COLORS.font,
    marginTop: 10,
  },
  btnContainer: {
    position: "absolute",
    bottom: 120,
    left: 20,
    right: 20,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 20,
  },
  horizontalText: {
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
  },
});
