
import { StyleSheet } from "react-native";
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  maintxt: {
    fontSize: ScaleHeight(27),
    fontFamily: Fonts.semi_bold,
    color: Colors.blackColor,
    paddingHorizontal: ScaleWidth(20),
    marginTop: ScaleHeight(27),
    width: ScaleWidth(350),
    textAlign: 'center',
    alignSelf: 'center'
  },
  txt: {
    fontSize: ScaleHeight(27),
    fontFamily: Fonts.semi_bold,
    color: Colors.blackColor,
    paddingHorizontal: ScaleWidth(25),
    width: ScaleWidth(400),
    textAlign: 'center',
    alignSelf: 'center'
  },
  img: {
    height: ScaleHeight(375),
    aspectRatio: 1,
    alignSelf: 'center',
  },
  errorText: {
    fontSize: ScaleHeight(16),
    fontFamily: Fonts.medium,
    color: Colors.redColor,
    marginStart: ScaleWidth(5),
    marginBottom: ScaleHeight(20),
  },
  viewticketBtn: {
    // marginVertical: ScaleHeight(13),
  },

});

export default styles;
