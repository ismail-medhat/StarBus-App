import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
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
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  titleOption: {
    fontSize: ScaleWidth(18),
    color: Colors.blackColor,
    fontFamily: Fonts.semi_bold,
    marginBottom: ScaleHeight(15),
  },
  buttonFilter: {
    marginBottom: ScaleHeight(3),
  },
  rowOptionStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: ScaleHeight(10),
  },
  optionTxt: {
    fontSize: ScaleWidth(15),
    color: Colors.blackColor,
    fontFamily: Fonts.regular,
    marginBottom: ScaleHeight(15),
    alignSelf: "flex-start",
    textAlign: "left",
  },
  selectBtn: {
    position: "absolute",
    bottom: ScaleHeight("5%"),
  },
  searchInpBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: ScaleWidth("88%"),
    paddingHorizontal: ScaleWidth(15),
    height: ScaleHeight(45),
    backgroundColor: Colors.greyColor,
    marginBottom: ScaleHeight(20),
    borderRadius: ScaleWidth(10),
  },
  searchInpStyle: {
    paddingStart: 8,
    flex: 1,
    height: "100%",
  },
  emptyDataContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: ScaleWidth(15),
  },
  emptyImg: { width: ScaleWidth(200), height: ScaleHeight(300) },
  emptyDataTxt: {
    fontSize: ScaleWidth(16),
    color: Colors.blackColor,
    fontFamily: Fonts.semi_bold,
    textAlign: "center",
  },
});
