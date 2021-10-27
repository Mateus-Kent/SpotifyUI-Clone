import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

import { GreenButton } from "../../components/GreenButton";
import { BlackButton } from "../../components/BlackButton";

import SpotifyWhite from "../../assets/spotifyWhite.svg";

export function Landing() {
  return (
    <View style={styles.container}>
      <SpotifyWhite />
      <Text>Milhões de musicas à sua escolha</Text>
      <Text>Grátis no Spotify</Text>
      <View style={styles.authenticationView}>
        <GreenButton width={300} marginBottom={2}>
          Inscreva-se Gratis
        </GreenButton>

        <BlackButton>Continuar com um numero de telefone</BlackButton>

        <BlackButton>Continuar com o Google</BlackButton>

        <BlackButton>Continuar com o facebook</BlackButton>

        <Text style={styles.enter}>Entrar</Text>
      </View>
    </View>
  );
}
