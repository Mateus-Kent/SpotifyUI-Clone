import { StyleSheet } from "react-native";

import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    backgroundColor: '#0a0a0a',
    borderRadius: 26,
    width: 270,
    borderColor: theme.COLORS.white,
    borderWidth: 0.5,
    borderStyle: 'solid',
  },
  textButton: {
   fontFamily: theme.FONTS.title700,
   fontSize: 13,
   color: theme.COLORS.white,
   marginBottom: 2
  }
});
