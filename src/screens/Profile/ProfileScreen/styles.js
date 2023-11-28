import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImg: {
    width: ScaleWidth(28),
    height: ScaleWidth(28),
    borderRadius: ScaleWidth(15),
  },
  settingBox: {
    width: ScaleWidth(30),
    height: ScaleWidth(30),
    borderRadius: ScaleWidth(8),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.greyColor,
  },
  profileInfoBox: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: ScaleHeight(12),
    paddingBottom: ScaleHeight(25),
  },
  bigProfileImg: {
    width: ScaleWidth(80),
    height: ScaleWidth(80),
    borderRadius: ScaleWidth(40),
  },
  profileNameTxt: {
    fontSize: ScaleWidth(16),
    fontFamily: Fonts.regular,
    paddingTop: ScaleHeight(10),
    color: Colors.blackColor,
  },
  rowStart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileLocTxt: {
    fontSize: ScaleWidth(14),
    fontFamily: Fonts.regular,
    color: Colors.extraGreyColor,
    paddingStart: ScaleWidth(6),
    paddingVertical: ScaleHeight(5),
  },
  btnCardBox: {
    width: ScaleWidth("90%"),
    padding: ScaleWidth(11),
    backgroundColor: Colors.cardBackgroundColor,
    borderRadius: ScaleWidth(7),
    shadowColor: Colors.blackColor,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.14,
    shadowRadius: 1,
    elevation: 10,
    marginBottom: ScaleHeight(20),
  },
  btnCardTxt: {
    fontSize: ScaleWidth(14),
    fontFamily: Fonts.regular,
    color: Colors.blackColor,
    paddingStart: ScaleWidth(6),
  },
});

export default styles;
