import { StyleSheet } from 'react-native';
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  all: {
    fontSize: ScaleWidth(18),
    fontFamily: Fonts.medium,
    color: Colors.blackColor,
  },
  deleteall: {
    fontSize: ScaleWidth(12)
  },
  notcard: {
    height: ScaleHeight(110),
    backgroundColor: Colors.lightColor,
    marginBottom: ScaleHeight(20),
    borderRadius: 10,
    padding: ScaleWidth(16)
  },
  txt: {
    fontSize: ScaleWidth(14),
    fontFamily: Fonts.regular,
    color: Colors.blackColor
  },
  profileImg: {
    width: ScaleWidth(30),
    height: ScaleWidth(30),
    borderRadius: ScaleWidth(15),
  },
});

export default styles;
