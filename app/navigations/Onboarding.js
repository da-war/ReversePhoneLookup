import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../screens/onboard/LandingScreen";
import TermsOfUse from "../screens/onboard/TermsOfUse";
import PrivacyPolicy from "../screens/onboard/PrivacyPolicy";
import Restore from "../screens/onboard/Restore";
import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

const Onboarding = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" component={LandingScreen} />
      <Stack.Screen name="terms" component={TermsOfUse} />
      <Stack.Screen name="restore" component={Restore} />
      <Stack.Screen name="app" component={AppNavigator} />
    </Stack.Navigator>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
