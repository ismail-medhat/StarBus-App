
import { Platform, StyleSheet } from "react-native";
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  topSection: {
    flexDirection: 'row',
    backgroundColor: Colors.primaryColor,
    paddingBottom: ScaleHeight(20),
    justifyContent: 'center',
    alignItems: 'center'
  },
  pickupText: {
    color: Colors.blackColor,
    fontFamily: Fonts.semi_bold,
    fontSize: ScaleHeight(18),
    paddingHorizontal: ScaleWidth(20),
    marginTop: ScaleHeight(20),
    marginBottom: 15

  },

});

export default styles;
