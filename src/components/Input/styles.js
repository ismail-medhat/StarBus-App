import { StyleSheet } from "react-native";
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
import { fontSize, height, width } from "utils";

export const styles = StyleSheet.create({
  img: {
    height: ScaleHeight(375),
    aspectRatio: 1,
    alignSelf: "center",
  },
  button: {
    flexDirection: "row",
    backgroundColor: Colors.primaryColor,
    height: ScaleHeight(51),
    marginStart: ScaleWidth(20),
    borderRadius: ScaleWidth(8),
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    alignSelf: "stretch",
  },
  btnText: {
    fontSize: fontSize(14),
    color: "#fff",
    fontFamily: Fonts.regular,
  },
  loginText: {
    marginTop: ScaleHeight(50),
    fontSize: fontSize(14),
    color: "#009FE3",
    fontFamily: Fonts.medium,
    textAlign: "center",
    alignSelf: "center",
  },
  inputBox: {
    backgroundColor: "#eee",
    flex: 1,
    height: ScaleHeight(51),
    justifyContent: "space-between",
    paddingStart: ScaleWidth(10),
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  rightIcon: {
    height: ScaleHeight(51),
    justifyContent: "center",
    paddingHorizontal: ScaleWidth(8),
  },
  input: {
    fontSize: fontSize(12),
    fontFamily: Fonts.semi_bold,
    color: "#333",
    flex: 1,
    height: ScaleHeight(51),
    borderRadius: 8,
  },
  inputContainer: {
    height: ScaleHeight(51),
    backgroundColor: "#eee",
    marginTop: 10,
    marginBottom: 20,
    paddingStart: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: fontSize(14),
    fontFamily: Fonts.semi_bold,
    color: "#333",
  },
  codeText: {
    fontSize: fontSize(14),
    fontFamily: Fonts.semi_bold,
    color: "#333",
    marginEnd: ScaleWidth(5),
  },
  errorText: {
    fontSize: fontSize(12),
    fontFamily: Fonts.medium,
    color: Colors.redColor,
    alignSelf: "stretch",
    marginHorizontal: ScaleWidth(22),
    marginTop: -ScaleHeight(14),
    marginBottom: ScaleHeight(20),
  },
});
