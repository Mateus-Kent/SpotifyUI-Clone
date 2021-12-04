import React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

type ButtonProps = {
  children: String;
  width: number;
  marginBottom?: number;
  color?: string;
} & RectButtonProps;

export function GreenButton({
  children,
  width,
  marginBottom,
  color,
  ...rest
}: ButtonProps) {
  return (
    <RectButton
      style={[styles.container, { width }, { marginBottom }]}
      {...rest}
    >
      <Text style={[styles.textButton, { color }]}> {children} </Text>
    </RectButton>
  );
}
