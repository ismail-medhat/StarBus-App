
import { StyleSheet } from "react-native";
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  txt: {
    fontSize: ScaleWidth(20),
    fontFamily: Fonts.semi_bold,
    color: Colors.blackColor,
    marginHorizontal: ScaleWidth(20),
    marginTop: ScaleHeight(8),
    marginBottom: ScaleHeight(15),
  }, mainview: {
    alignSelf: 'center',
    width: ScaleWidth('90%'),
    height: ScaleHeight(365),
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.greyColor,
    marginTop: 10
  },
  profilepic: {
    width: ScaleWidth(45),
    height: ScaleHeight(45),
    borderRadius: ScaleHeight(25),
    marginEnd: ScaleWidth(10),
  },
  passtxt: {
    fontSize: ScaleHeight(12),
    marginBottom: ScaleHeight(4),
    color: Colors.extraGreyColor,
    fontFamily: Fonts.regular
  },
  name: {
    fontSize: ScaleHeight(14),
    color: Colors.blackColor,
    fontFamily: Fonts.medium,
  },
  total: {
    fontSize: ScaleHeight(16),
    color: Colors.primaryColor,
    fontFamily: Fonts.semi_bold,
  },
  key: {
    fontSize: ScaleHeight(14),
    color: Colors.extraGreyColor,
    fontFamily: Fonts.semi_bold

  },
  value: {
    fontSize: ScaleHeight(14),
    color: Colors.blackColor,
    fontFamily: Fonts.semi_bold,
  },
  viewDetails: {
    fontSize: ScaleHeight(14),
    color: Colors.primaryColor,
    fontFamily: Fonts.semi_bold,
  },
  pm_txt: {
    fontSize: ScaleHeight(18),
    fontFamily: Fonts.semi_bold,
    color: Colors.blackColor,
    paddingHorizontal: ScaleWidth(20),
    marginVertical: ScaleHeight(20)
  },
  cash: {
    width: ScaleWidth(110),
    height: ScaleHeight(51),
    borderRadius: ScaleHeight(8),
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default styles;
