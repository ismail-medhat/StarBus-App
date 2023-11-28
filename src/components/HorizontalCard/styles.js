import { StyleSheet } from "react-native";
import { Colors, Fonts, ScaleWidth, ScaleHeight } from "common";

export const styles = StyleSheet.create({
  rowHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: ScaleWidth("88%"),
    marginVertical: ScaleHeight(15),
    alignSelf: "center",
  },
  headerTitle: {
    fontFamily: Fonts.semi_bold,
    fontSize: ScaleWidth(18),
    color: Colors.blackColor,
  },
  headerSeemoreTxt: {
    fontFamily: Fonts.regular,
    fontSize: ScaleWidth(12),
    color: Colors.primaryColor,
  },
  cardContainer: {
    width: ScaleWidth("77%"),
    height: ScaleHeight("20%"),
    marginEnd: ScaleWidth(20),
  },
  cardImg: {
    width: "100%",
    height: "100%",
    borderRadius: ScaleWidth(10),
  },
});
