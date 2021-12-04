import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type ButtonProps = {
  children: String;
  marginBottom?: number;
  height?: number;
  width?: number;
  fontSize?: number;
};

export function BlackButton({
  children,
  marginBottom,
  height,
  width,
  fontSize,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { marginBottom }, { height }, { width }]}
    >
      <Text style={[styles.textButton, { fontSize }]}> {children} </Text>
    </TouchableOpacity>
  );
}
