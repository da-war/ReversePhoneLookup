import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { create } from "zustand";
import HomeScreen from "../screens/HomeScreen";
import Result from "../screens/Result";
import ResultPro from "../screens/ResultPro";

const Stack = createNativeStackNavigator();

const AppStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="resultnp" component={Result} />
      <Stack.Screen name="resultpro" component={ResultPro} />
    </Stack.Navigator>
  );
};

export default AppStackNavigation;

const styles = StyleSheet.create({});
