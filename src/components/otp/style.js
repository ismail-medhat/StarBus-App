import { Colors, Fonts, ScaleWidth } from "common"
import { fontSize, height, width } from "../../utils"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  title: {
    color: "#333",
    fontSize: fontSize(14),
    textAlign: "center",
    fontFamily: Fonts.regular,
    marginTop: height(32),
    marginBottom: height(10),
  },
  hint: {
    color: "#333",
    fontSize: fontSize(14),
    textAlign: "center",
    fontFamily: Fonts.semi_bold,
    marginBottom: height(24),
  },
  changeNumber: {
    color: "#333",
    fontSize: ScaleWidth(14),
    textAlign: "center",
    fontFamily: Fonts.regular,
    marginBottom: height(32),
    textDecorationLine: "underline",
  },
  resend: {
    fontSize: fontSize(14),
    color: "#333",
    fontFamily: Fonts.regular,
  },
  button: {
    flexDirection: "row",
    backgroundColor: Colors.primaryColor,
    height: height(51),
    marginHorizontal: width(20),
    borderRadius: width(8),
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    alignSelf: "stretch",
  },
  next: {
    alignSelf: "stretch",
  },
  seperator: { flex: 1, alignSelf: "stretch" },
  textContainer: {
    justifyContent: "center",
    marginHorizontal: 10,
  },
  timerContainer: {
    flexDirection: "row-reverse",
    marginHorizontal: 5,
  },
  textSeperator: { marginHorizontal: 3 },
  cell: {
    width: width(72),
    height: width(72),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width(15),
    borderColor: Colors.redColor,
    backgroundColor: "#5A248D10",
  },
  error: {
    alignSelf: "center",
    fontSize: fontSize(14),
    paddingTop: 10,
  },
  root: { padding: 20, minHeight: 300 },
  // title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: width(20),
  },
  cellText: {
    fontSize: fontSize(25),
    fontFamily: Fonts.bold,
  },
})
