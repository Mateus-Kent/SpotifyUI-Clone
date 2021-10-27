import { StyleSheet } from "react-native";

import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    backgroundColor: theme.COLORS.green,
    borderRadius: 26,
  },
  textButton: {
    fontFamily: theme.FONTS.title600,
    fontSize: 12,
    color: theme.COLORS.white,
  },
});
