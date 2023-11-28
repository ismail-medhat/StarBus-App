import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  customHeader: {
    paddingVertical: ScaleWidth(10),
  },
  monthAndArrows: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arrowButton: {
    padding: ScaleWidth(10),
  },
  logDateHeader: {
    marginBottom: ScaleWidth(20),
  },
  fromAndToWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: ScaleWidth(20),
    marginBottom: ScaleWidth(5),
  },
  selectedDateButton: {
    flex: 1,
    paddingVertical: ScaleWidth(12),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.greyColor,
    borderRadius: ScaleWidth(5),
  },
  toText: {
    fontSize: ScaleHeight(15),
    color: Colors.blackColor,
    fontFamily: Fonts.semi_bold,
    marginHorizontal: ScaleWidth(10),
  },
  customHeaderTitle: {
    fontSize: ScaleHeight(16),
    fontFamily: Fonts.semi_bold,
    color: Colors.blackColor,
  },
  dateText: {
    fontSize: ScaleHeight(15),
    fontFamily: Fonts.semi_bold,
    color: Colors.blackColor,
  },
  submitButton: {
    marginTop: ScaleHeight(20),
    marginBottom: ScaleHeight(35),
  },
  filterHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  filterHeaderText: {
    fontSize: ScaleHeight(20),
    fontWeight: "bold",
    color: Colors.blackColor,
  },
  selectBtn: {
    position: "absolute",
    bottom: ScaleHeight("7%"),
  },
});
