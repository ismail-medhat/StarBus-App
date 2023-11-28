import { Dimensions, StyleSheet } from "react-native";
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.whiteColor,
  },
  logo: {
    height: ScaleHeight(96),
    // width: ScaleWidth("80%"), fix issue image not show responsive 
    aspectRatio: 3
  },
});

export default styles;
