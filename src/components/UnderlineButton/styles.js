import { StyleSheet } from "react-native";
import { Colors, Fonts, ScaleWidth } from "common";

export const styles = StyleSheet.create({
  btnContainer: {
    width: ScaleWidth("90%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ScaleWidth(10),
    alignSelf: "center",
    padding: ScaleWidth(12),
  },
  btnTxt: {
    color: Colors.blueColor,
    fontSize: ScaleWidth(14),
    fontFamily: Fonts.semi_bold,
    textDecorationLine: "underline",
  },
});
