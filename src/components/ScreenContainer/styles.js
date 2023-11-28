import { StyleSheet, Platform } from "react-native";
import { Colors, ScaleHeight } from "common";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
    paddingTop: Platform.OS === "android" ? ScaleHeight(40) : 0,
  },
});
