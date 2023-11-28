import { Colors, ScaleHeight, ScaleWidth } from "common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  optonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: ScaleHeight(1.5),
  },
  titleStyle: {
    fontSize: ScaleWidth(5),
    color: Colors.blackColor,
    paddingHorizontal: ScaleWidth(3),
    fontWeight: "600",
  },
  sheetView: {
    backgroundColor: Colors.whiteColor,
    marginHorizontal: ScaleWidth(20),
  },
});
