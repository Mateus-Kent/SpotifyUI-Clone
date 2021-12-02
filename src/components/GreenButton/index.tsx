import React from "react";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";

type ButtonProps = {
  children: String;
  width: number;
  marginBottom?: number;
};

export function GreenButton({
  children,
  width,
  marginBottom,
  ...rest
}: ButtonProps) {
  return (
    <RectButton
      style={[styles.container, { width }, { marginBottom }]}
      {...rest}
    >
      <Text style={styles.textButton}> {children} </Text>
    </RectButton>
  );
}
