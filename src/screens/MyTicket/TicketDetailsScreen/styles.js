import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    // paddingBottom: Platform.OS === "android" ? ScaleHeight("9%") : 0,
  },
  busBox: {
    backgroundColor: "#FFF",
    borderRadius: ScaleWidth(8),
    padding: ScaleWidth(20),
    width: ScaleWidth("100%"),
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowStart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  busTitleTxt: {
    fontSize: ScaleWidth(15),
    color: Colors.extraGreyColor,
    fontFamily: Fonts.semi_bold,
    alignSelf: "flex-start",
    textAlign: "left",
  },
  busvalTxt: {
    fontSize: ScaleWidth(15),
    color: Colors.blackColor,
    fontFamily: Fonts.semi_bold,
    paddingTop: ScaleHeight(10),
    paddingBottom: ScaleHeight(25),
  },
  errorText: {
    fontSize: ScaleHeight(16),
    fontFamily: Fonts.medium,
    color: Colors.redColor,
    marginStart: ScaleWidth(5),
    marginBottom: ScaleHeight(20),
    alignSelf: "flex-start",
  },
  busImgStyle: {
    width: ScaleWidth("60%"),
    height: ScaleWidth("35%"),
  },
  ticketBox: {
    width: ScaleWidth("90%"),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.greyColor,
    backgroundColor: "#FFF",
    padding: ScaleWidth(20),
    marginBottom: ScaleHeight(20),
    alignSelf: "center",
  },
  passengerImg: {
    width: ScaleWidth(50),
    height: ScaleWidth(50),
    borderRadius: ScaleWidth(25),
    marginEnd: ScaleWidth(6),
  },
  ticketSTitle: {
    fontSize: ScaleWidth(14),
    color: Colors.extraGreyColor,
    fontFamily: Fonts.regular,
    alignSelf: "flex-start",
    textAlign: "left",
    paddingBottom: ScaleHeight(5),
  },
  ticketGreyTxt: {
    fontSize: ScaleWidth(16),
    color: Colors.extraGreyColor,
    fontFamily: Fonts.regular,
    alignSelf: "flex-start",
    textAlign: "left",
    paddingVertical: ScaleHeight(5),
  },
  ticketBlackTxt: {
    fontSize: ScaleWidth(15),
    color: Colors.blackColor,
    fontFamily: Fonts.regular,
    alignSelf: "flex-start",
    textAlign: "left",
  },
  ticketBlackSTxt: {
    fontSize: ScaleWidth(11),
    color: Colors.blackColor,
    fontFamily: Fonts.regular,
    alignSelf: "flex-start",
    textAlign: "left",
    paddingHorizontal: ScaleWidth(5),
  },
  ticketOrangeTxt: {
    fontSize: ScaleWidth(15),
    color: Colors.primaryColor,
    fontFamily: Fonts.semi_bold,
    alignSelf: "flex-start",
    textAlign: "left",
  },
  seperateLine: {
    width: ScaleWidth("78%"),
    height: ScaleHeight(2),
    backgroundColor: Colors.greyColor,
    marginVertical: ScaleHeight(20),
  },
  ticketNoTxt: {
    fontSize: ScaleWidth(16),
    color: Colors.blackColor,
    fontFamily: Fonts.semi_bold,
    alignSelf: "center",
    textAlign: "center",
  },
  ticketNoValueTxt: {
    fontSize: ScaleWidth(60),
    color: Colors.blackColor,
    fontFamily: Fonts.bold,
    alignSelf: "center",
    textAlign: "center",
  },
});

export default styles;
