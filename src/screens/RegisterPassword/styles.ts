import { StyleSheet } from "react-native";

import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  createAccount: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "relative",
    paddingTop: 30,
    paddingBottom: 30,
  },
  back: {
    position: "absolute",
    top: "120%",
    right: "87%",
  },
  createText: {
    fontSize: 14,
    color: theme.COLORS.white,
    fontFamily: theme.FONTS.title700,
  },
  mail: {
    paddingLeft: 25,
  },
  passwordText: {
    fontSize: 23,
    fontFamily: theme.FONTS.title700,
    color: theme.COLORS.white,
    paddingBottom: 10,
  },
  confirm: {
    fontSize: 11,
    fontFamily: theme.FONTS.title600,
    color: theme.COLORS.white,
    paddingBottom: 15,
  },
  advanced: {
    alignItems: "center",
  },
});
