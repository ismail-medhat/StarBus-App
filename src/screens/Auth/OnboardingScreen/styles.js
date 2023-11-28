import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  btnContainer: {
    marginTop: ScaleHeight(10),
    alignSelf: "flex-end",
    marginEnd: ScaleWidth(15),
    height: ScaleHeight("5%"),
  },
  btnBox: {
    width: ScaleWidth("35%"),
    padding: ScaleWidth(8),
    borderRadius: ScaleWidth(7),
    backgroundColor: Colors.greyColor,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnTxt: {
    fontFamily: Fonts.semi_bold,
    color: Colors.blackColor,
    fontSize: ScaleWidth(14),
    paddingStart: ScaleWidth(5),
  },
  slideContainer: {
    width: ScaleWidth("100%"),
    height: ScaleHeight("50%"),
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: ScaleHeight("3%"),
  },
  imgSlider: {
    width: ScaleWidth("80%"),
    height: ScaleHeight("43%"),
  },
  sliderTitle: {
    fontFamily: Fonts.semi_bold,
    fontSize: ScaleWidth(20),
    color: Colors.blackColor,
    textAlign: "center",
    marginTop: ScaleWidth(10),
    width: ScaleWidth("83%"),
  },
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: ScaleHeight(10),
  },
  paginationDot: {
    width: ScaleWidth(20),
    height: ScaleHeight(5),
    borderRadius: ScaleWidth(5),
    margin: ScaleWidth(3),
  },
  bottomContainer: {
    width: ScaleWidth("100%"),
    height: ScaleHeight("25%"),
    backgroundColor: Colors.whiteColor,
    borderTopLeftRadius: ScaleWidth(30),
    borderTopRightRadius: ScaleWidth(30),
    shadowColor: Colors.blackColor,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    position: "absolute",
    bottom: 0,
    padding: ScaleWidth(20),
  },
  accountBtnStyle: {
    marginVertical: ScaleHeight(15),
  },
  rowStart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  modalBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalContainer: {
    width: ScaleWidth("40%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.whiteColor,
    position: "absolute",
    right: ScaleWidth(10),
    top: ScaleHeight("14%"),
    shadowColor: Colors.blackColor,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: ScaleWidth(10),
  },
});

export default styles;
