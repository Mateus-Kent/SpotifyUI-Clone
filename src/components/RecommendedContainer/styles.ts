import { StyleSheet } from "react-native"
import { theme } from "../../global/styles"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 185,
    width: 380,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  songCard: {
    height: 56,
    width: 186,
    backgroundColor: theme.COLORS.graySecondary,
    paddingHorizontal: 8,
    paddingBottom: 8,
    flexDirection: "row",
  },
  containerImage: {
    width: 56,
    height: 56,
  },
  containerTitle: {
    fontFamily: theme.FONTS.title500,
    fontSize: 14,
    color: theme.COLORS.white,
  },
})
