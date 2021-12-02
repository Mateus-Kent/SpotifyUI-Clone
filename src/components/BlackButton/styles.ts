import { StyleSheet } from "react-native";

import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    backgroundColor: theme.COLORS.black,
    borderRadius: 26,
    width: 270,
    borderColor: '#fff',
    borderWidth: 0.5,
    borderStyle: 'solid',
  },
  textButton: {
   fontFamily: theme.FONTS.title600,
   fontSize: 12,
   color: theme.COLORS.white,
   marginBottom: 2
  }
});
