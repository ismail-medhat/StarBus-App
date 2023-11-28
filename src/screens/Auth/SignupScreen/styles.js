import { StyleSheet } from "react-native";
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
import { fontSize, height, width } from "utils";
const styles = StyleSheet.create({
  logo: {
    height: height(96),
    aspectRatio: 3,
    alignSelf: "center",
    marginTop: 8,
    marginBottom: height(55),
  },
  label: {
    marginHorizontal: ScaleWidth(20),
    fontSize: fontSize(14),
    fontFamily: Fonts.semi_bold,
    color: Colors.blackColor,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  rowStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: ScaleWidth(10),
    paddingTop: ScaleHeight(5),
    paddingBottom: ScaleHeight(10),
  },
  genderValTxt: {
    fontSize: fontSize(14),
    paddingHorizontal: 10,
    fontFamily: Fonts.semi_bold,
  },
});

export default styles;
