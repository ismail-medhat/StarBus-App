import { StyleSheet } from 'react-native';
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
import { fontSize, width } from 'utils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: 20
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        margin: 20
    },
    listTitle: {
        fontSize: fontSize(18),
        fontFamily: Fonts.bold,
        color: '#333'
    },
    svgBtn: {
        height: width(32),
        width: width(32),
        borderRadius: width(8),
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
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    busTxt: { fontSize: ScaleWidth(14), fontFamily: Fonts.semi_bold, color: '#333' },
    priceTxt: { fontSize: ScaleWidth(16), fontFamily: Fonts.bold, color: Colors.primaryColor },
    busTypTxt: { fontSize: ScaleWidth(12), fontFamily: Fonts.semi_bold, color: '#787878' },
    seatsTxt: { fontSize: ScaleWidth(12), fontFamily: Fonts.semi_bold, color: '#FF583B' },
    bottomLabelTxt: { fontSize: ScaleWidth(14), fontFamily: Fonts.semi_bold, color: '#787878' },
    timeTxt: { fontSize: ScaleWidth(10), fontFamily: Fonts.medium, color: '#333' },

});

export default styles;
