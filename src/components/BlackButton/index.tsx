import React from "react";
import { Text } from 'react-native'
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";

type ButtonProps = {
  children: String;
};

export function BlackButton({ children }: ButtonProps) {
  return (
    <RectButton>
      <Text style={styles.textButton}> {children} </Text>
    </RectButton>
  );
}
