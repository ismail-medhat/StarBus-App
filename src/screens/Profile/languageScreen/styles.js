import { StyleSheet } from "react-native";
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  entxt: {
    fontSize: ScaleWidth(14),
    marginLeft: 10,
    fontFamily: Fonts.medium,
    color: Colors.blackColor,
  },
  rowBetween: {
    flexDirection: "row",
    paddingHorizontal: ScaleWidth(20),
    marginTop: ScaleHeight(20),
    justifyContent: "space-between",
    alignItems: "center",
    width: ScaleWidth("100%"),
  },
  rowStart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default styles;
