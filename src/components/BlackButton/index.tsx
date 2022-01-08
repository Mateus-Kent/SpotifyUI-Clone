import React from "react"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { styles } from "./styles"

type ButtonProps = {
  children: String
  marginBottom?: number
  height?: number
  width?: number
  fontSize?: number
} & TouchableOpacityProps

export function BlackButton({
  children,
  marginBottom,
  height,
  width,
  fontSize,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { marginBottom }, { height }, { width }]}
      {...rest}
    >
      <Text style={[styles.textButton, { fontSize }]}> {children} </Text>
    </TouchableOpacity>
  )
}
