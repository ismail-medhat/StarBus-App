import { StyleSheet } from "react-native";
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
import { fontSize, height, width } from "utils";

export const styles = StyleSheet.create({
  container: {
    // height: height(80),
    backgroundColor: "#fff",
    paddingHorizontal: width(20),
    paddingTop: ScaleHeight(5),
    paddingBottom: ScaleHeight(12),
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  txt: {
    color: "#333",
    fontSize: fontSize(24),
    textAlign: "center",
    flex: 1,
    fontFamily: Fonts.semi_bold,
  },
  btn: {
    height: width(32),
    width: width(32),
    borderRadius: width(8),
    backgroundColor: "#5A248D10",
    alignItems: "center",
    justifyContent: "center",
  },
  defaultArea: {
    height: width(32),
    width: width(32),
  },
});
