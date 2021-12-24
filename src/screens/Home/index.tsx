import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { RecommendedContainer } from "../../components/RecommendedContainer";

import { songs } from "../../local-json/songs.json";

import { styles } from "./styles";

export function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <Ionicons name="settings-outline" size={24} color="white" />
      </View>

      <View style={styles.presentation}>
        <Text style={styles.welcomeMessage}>Boa Tarde</Text>
      </View>

      <RecommendedContainer song={songs} />
    </ScrollView>
  );
}
