import { StyleSheet } from "react-native";

import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Presentation:{
    alignItems: "center",
    justifyContent: "flex-end",
    width: '100%',
    height: '50%',
    backgroundColor: '#0a0a0a',    
  },
  textPresentation: {
    fontSize: 16,
    fontFamily: theme.FONTS.title600,
    color: theme.COLORS.white,
    textAlign: 'center',
    marginBottom: 10
  },
  authenticationView: {
    flex: 3,
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: '#0a0a0a',
    paddingTop: 50
  },
  enter: {
    fontSize: 14,
    fontFamily: theme.FONTS.title600,
    color: theme.COLORS.white,
  },
});
