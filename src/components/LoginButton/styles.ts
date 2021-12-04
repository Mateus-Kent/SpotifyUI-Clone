import { StyleSheet } from "react-native";

import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 132,
    backgroundColor: "#c4c4c4",
    borderRadius: 26,
  },
  textButton: {
    fontFamily: theme.FONTS.title600,
    fontSize: 12,
    color: theme.COLORS.black,
  },
});
