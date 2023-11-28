import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  datePassengerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: ScaleWidth("90%"),
    marginTop: ScaleHeight(5),
  },
  searchBtn: {
    marginVertical: ScaleHeight(13),
  },
  categoryContainer: {
    width: ScaleWidth("100%"),
    paddingVertical: ScaleHeight(10),
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginBottom: ScaleHeight(10),
  },
  categoryImgBox: {
    width: ScaleWidth(50),
    height: ScaleWidth(50),
    borderRadius: ScaleWidth(25),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.whiteColor,
    shadowColor: Colors.blackColor,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  cardTitleTxt: {
    fontFamily: Fonts.semi_bold,
    fontSize: ScaleWidth(12),
    color: Colors.blackColor,
    textAlign: "center",
    paddingHorizontal: ScaleWidth(10),
    paddingTop: ScaleHeight(5),
  },
  categoryItemBox: {
    alignItems: "center",
    width: ScaleWidth("25%"),
  },
  profileImg: {
    width: ScaleWidth(30),
    height: ScaleWidth(30),
    borderRadius: ScaleWidth(15),
  },
});

export default styles;
