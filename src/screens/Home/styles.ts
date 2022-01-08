import { StyleSheet } from "react-native"
import { theme } from "../../global/styles"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.black,
    position: "relative",
  },
  topBar: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18.75,
    left: 150,
  },
  presentation: {
    marginTop: 10,
    marginHorizontal: 16,
  },
  welcomeMessage: {
    color: theme.COLORS.white,
    fontFamily: theme.FONTS.title600,
    fontSize: 20,
  },
})
