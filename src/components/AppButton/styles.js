import { StyleSheet } from "react-native";
import { Colors, Fonts, ScaleWidth } from "common";

export const styles = StyleSheet.create({
  btnContainer: {
    width: ScaleWidth("90%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ScaleWidth(10),
    backgroundColor: Colors.primaryColor,
    alignSelf: "center",
    padding: ScaleWidth(12),
  },
  rowBetween: {
    width: ScaleWidth("82%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  btnTxt: {
    color: Colors.whiteColor,
    fontSize: ScaleWidth(13),
    fontFamily: Fonts.semi_bold,
    paddingHorizontal: ScaleWidth(4),
  },
});
