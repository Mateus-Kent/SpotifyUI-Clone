import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

import { GreenButton } from "../../components/GreenButton";
import { BlackButton } from "../../components/BlackButton";

import SpotifyWhite from "../../assets/spotifyWhite.svg";

type LadingProps = {
  navigation: any;
};

export function Landing({ navigation }: LadingProps) {
  return (
    <View style={styles.container}>
      <View style={styles.Presentation}>
        <SpotifyWhite height={50} width={50} />
        <Text style={styles.textPresentation}>
          Milhões de musicas à sua escolha. {"\n"}
          Grátis no Spotify
        </Text>
      </View>

      <View style={styles.authenticationView}>
        <GreenButton
          onPress={() => navigation.navigate("RegisterMail")}
          color={"#000"}
          width={270}
          marginBottom={10}
        >
          Inscreva-se grátis
        </GreenButton>

        <BlackButton marginBottom={10}> Continuar com número de telefone </BlackButton>

        <BlackButton marginBottom={10}> Continuar com o Google </BlackButton>

        <BlackButton marginBottom={10}> Continuar com o Facebook </BlackButton>

        <Text style={styles.enter}>Entrar</Text>
      </View>
    </View>
  );
}
