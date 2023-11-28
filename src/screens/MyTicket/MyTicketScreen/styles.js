import { Colors, Fonts, ScaleHeight, ScaleWidth } from 'common';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listTitle: {
    fontSize: ScaleHeight(18),
    fontFamily: Fonts.bold,
    color: '#333'
  },
  seeMoreTxt: {
    fontSize: ScaleHeight(12),
    fontFamily: Fonts.medium,
    color: Colors.primaryColor
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingVertical: ScaleHeight(15),
    paddingHorizontal: ScaleWidth(20),
    backgroundColor: '#fff'
  },
  CardContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  driverLogo: {
    height: ScaleHeight(40),
    width: ScaleHeight(40),
    borderRadius: ScaleHeight(20),
    backgroundColor: '#76329D10',
    borderColor: '#F29100',
    borderWidth: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: ScaleWidth(10),
  },
  selectedSvg: {
    position: 'absolute',
    top: ScaleHeight(8),
    end: ScaleWidth(12)
  },
  busNameLine: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // justifyContent: 'space-between',
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
  svgBtn: {
    height: ScaleWidth(32),
    width: ScaleWidth(32),
    borderRadius: ScaleWidth(8),
    backgroundColor: "#5A248D10",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContentContainer: {
    position: 'absolute',
    flex: 1,
    right: ScaleWidth(20),
    left: ScaleWidth(20),
    top: 1,
    bottom: 1,
    padding: ScaleWidth(20),
    paddingTop: ScaleHeight(20),
  },
  busTxt: { fontSize: ScaleWidth(14), fontFamily: Fonts.semi_bold, color: '#333' },
  busTypTxt: { fontSize: ScaleWidth(12), fontFamily: Fonts.semi_bold, color: '#787878' },
  seatsTxt: { fontSize: ScaleWidth(12), fontFamily: Fonts.semi_bold, color: '#FF583B' },
  statusText: { fontSize: ScaleWidth(16), fontFamily: Fonts.bold, color: '#FF583B' },


});

export default styles;
