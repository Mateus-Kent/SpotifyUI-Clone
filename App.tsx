import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import {
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

import { Landing } from "./src/screens/Landing";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />;
    return <AppLoading />;
  }
  return (
    <Landing />
  );
}
