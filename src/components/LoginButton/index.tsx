import React from "react";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";

type ButtonProps = {
  children: String;
  marginBottom?: number;
};

export function LoginButton({ children, ...rest }: ButtonProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.textButton}> {children} </Text>
    </RectButton>
  );
}
