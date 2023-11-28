import { StyleSheet } from "react-native";
import { Colors, Fonts, ScaleWidth, ScaleHeight } from "common";

export const styles = StyleSheet.create({
  globalContainer: {},
  titleTxt: {
    fontFamily: Fonts.semi_bold,
    fontSize: ScaleWidth(12),
    alignSelf: "flex-start",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: ScaleWidth("90%"),
    paddingHorizontal: ScaleWidth(15),
    height: ScaleHeight(52),
    backgroundColor: Colors.greyColor,
    marginVertical: ScaleHeight(10),
    borderRadius: ScaleWidth(10),
  },
  rowStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inputValtxt: {
    fontFamily: Fonts.semi_bold,
    marginStart: ScaleWidth(10),
    color: Colors.primaryColor,
  },
  placeholderTxt: {
    fontFamily: Fonts.regular,
    marginStart: ScaleWidth(10),
    color: Colors.extraGreyColor,
  },
});
