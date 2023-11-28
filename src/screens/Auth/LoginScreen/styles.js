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

  loginbutton: {
    height: height(51),
    alignSelf: "center",
    marginHorizontal: width(20),
    marginTop: 20,
    borderRadius: 8,
    paddingHorizontal: 14,
    backgroundColor: Colors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    gap: 7,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  forgetPassTxt: {
    marginTop: 14,
    color: Colors.forgetColor,
    fontSize: fontSize(12),
    fontFamily: Fonts.medium,
  },
});

export default styles;
