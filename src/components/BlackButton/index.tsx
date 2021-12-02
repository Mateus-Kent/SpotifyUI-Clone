import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type ButtonProps = {
  children: String;
  marginBottom?: number;
};

export function BlackButton({ children, marginBottom }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, { marginBottom }]}>
      <Text style={styles.textButton}> {children} </Text>
    </TouchableOpacity>
  );
}
