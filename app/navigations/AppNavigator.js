import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { i18n } from "../../App";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import { COLORS } from "../constants/theme";

import { MaterialCommunityIcons as MaterialCommunitIcons } from "@expo/vector-icons";
import AppStackNavigation from "./AppStackNavigation";
import { languageCheck } from "../helpers/locale";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const isArabic = languageCheck === "ar";

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarStyle: styles.tabBar,
      }}
      tabBar={(props) => <CustomTabBar {...props} isArabic={isArabic} />}
    >
      <Tab.Screen
        name="Search"
        component={AppStackNavigation}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/csearch.png")
                  : require("../../assets/icons/search.png")
              }
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/csetting.png")
                  : require("../../assets/icons/setting.png")
              }
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const CustomTabBar = ({ state, descriptors, navigation, isArabic }) => {
  return (
    <View
      style={[
        styles.tabBar,
        { flexDirection: isArabic ? "row-reverse" : "row" },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
            <MaterialCommunitIcons
              name={label === "Search" ? "magnify" : "cog"}
              size={24}
              color={isFocused ? COLORS.primary : "#222"}
            />
            <Text style={{ color: isFocused ? COLORS.primary : "#222" }}>
              {label === "Search" ? i18n.t("search") : i18n.t("setting")}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderTopColor: "#ccc",
    gap: 10,
    paddingBottom: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
  },
});

export default AppNavigator;
