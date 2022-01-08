import { StyleSheet } from "react-native"

import { theme } from "../../global/styles"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  jusBack: {
    width: "100%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 60,
  },
  back: {
    right: "87%",
  },
  login: {
    paddingLeft: 25,
  },
  loginText: {
    fontSize: 23,
    fontFamily: theme.FONTS.title700,
    color: theme.COLORS.white,
    paddingBottom: 10,
  },
  enter: {
    alignItems: "center",
  },
})
