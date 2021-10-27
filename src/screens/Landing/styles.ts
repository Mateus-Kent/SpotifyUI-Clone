import { StyleSheet } from "react-native";

import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    height: "40%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.gray,
  },
  authenticationView: {
    height: "60%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.black,
  },
  enter: {
    fontSize: 12,
    fontFamily: theme.FONTS.title600,
    color: theme.COLORS.white,
  },
});
