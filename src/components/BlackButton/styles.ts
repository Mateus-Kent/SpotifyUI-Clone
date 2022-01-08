import { StyleSheet } from "react-native"

import { theme } from "../../global/styles"

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a0a0a",
    borderRadius: 26,
    borderColor: theme.COLORS.white,
    borderWidth: 0.5,
    borderStyle: "solid",
  },
  textButton: {
    fontFamily: theme.FONTS.title700,
    fontSize: 13,
    color: theme.COLORS.white,
    marginBottom: 2,
  },
})
