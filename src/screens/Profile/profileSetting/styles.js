import { StyleSheet } from "react-native";
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
import { fontSize } from "utils";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profilePic: {
    width: ScaleWidth(100),
    height: ScaleHeight(100),
    borderRadius: 50,
    marginTop: 30,
    alignSelf: "center",
  },
  name: {
    marginTop: ScaleHeight(30),
    fontSize: 14,
    fontFamily: Fonts.semi_bold,
    color: "#333",
    paddingHorizontal: 20,
  },
  View: {
    height: ScaleHeight(51),
    backgroundColor: Colors.lightGreyColor,
    alignSelf: "stretch",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: ScaleWidth(20),
    marginHorizontal: ScaleWidth(20),
    marginTop: ScaleHeight(10),
  },
  nametxt: {
    fontSize: 14,
    fontFamily: Fonts.semi_bold,
    color: "#333",
  },
  gender: {
    fontSize: 14,
    fontFamily: Fonts.semi_bold,
    color: "#333",
    paddingHorizontal: 20,
    marginTop: ScaleHeight(20),
  },
  mobilenumber: {
    fontSize: 14,
    fontFamily: Fonts.semi_bold,
    color: "#333",
    paddingHorizontal: 20,
    marginTop: ScaleHeight(10),
  },
  password: {
    fontSize: 14,
    fontFamily: Fonts.semi_bold,
    color: "#333",
    paddingHorizontal: 20,
    marginTop: ScaleHeight(20),
  },
  passtxt: {
    fontSize: 14,
    fontFamily: Fonts.semi_bold,
    color: "#333",
    marginTop: ScaleHeight(10),
  },
  editpic: {
    left: ScaleWidth(45),
    bottom: ScaleWidth(10),
  },
  changename: {
    fontSize: 16,
    fontFamily: Fonts.semi_bold,
    color: "#333",
  },
  editname: {
    fontSize: 14,
    color: Colors.blackColor,
    fontFamily: Fonts.semi_bold,
    marginTop: 20,
  },
  Viewpass: {
    width: ScaleWidth("90%"),
    height: ScaleHeight(51),
    backgroundColor: "#eee",
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: ScaleHeight(10),
    marginBottom: ScaleHeight(20),
  },
  inputContainer: {
    height: ScaleHeight(51),
    backgroundColor: "#eee",
    marginTop: 10,
    marginBottom: 20,
    paddingStart: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    width: ScaleWidth("90%"),
  },
  inputBox: {
    backgroundColor: "#eee",
    flex: 1,
    height: ScaleHeight(51),
    justifyContent: "center",
    paddingHorizontal: ScaleWidth(10),
    borderRadius: 8,
  },
  codeText: {
    fontSize: fontSize(14),
    fontFamily: Fonts.semi_bold,
    color: "#333",
    marginEnd: ScaleWidth(5),
  },
});

export default styles;
