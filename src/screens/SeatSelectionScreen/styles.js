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
        marginHorizontal: ScaleWidth(20),
        marginTop: ScaleHeight(24),
        marginBottom: ScaleHeight(20),
        paddingVertical: 1
    },
    timeTitle: {
        fontSize: ScaleWidth(16),
        fontFamily: Fonts.bold,
        color: '#FF583B'
    },
    typesTxt: {
        fontSize: fontSize(14),
        fontFamily: Fonts.semi_bold,
        color: '#333'
    },
    typesSquare: {
        height: ScaleHeight(20),
        width: ScaleHeight(20),
        borderRadius: ScaleHeight(4),
        backgroundColor: '#fff',
    },
    btn: {
        height: ScaleHeight(51),
        width: ScaleWidth(170),
        borderRadius: 8,
        backgroundColor: Colors.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7
    },
    btnContainer:
    {
        marginHorizontal: ScaleWidth(20),
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnText: {
        color: Colors.whiteColor,
        fontSize: ScaleWidth(16),
        fontFamily: Fonts.semi_bold,
        textAlign: 'center'
    },
    seatsTxt: {
        color: Colors.extraGreyColor,
        fontSize: ScaleWidth(14),
        fontFamily: Fonts.semi_bold,
    },
    selectedSeatsTxt: {
        color: "#333",
        fontSize: ScaleWidth(14),
        fontFamily: Fonts.semi_bold,
    },
    driverSection: {
        flexDirection: 'row'
    },
    backSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    seatsContainer: {
        marginHorizontal: ScaleWidth(20),
        marginVertical: ScaleHeight(20),
        paddingHorizontal: ScaleWidth(5),
        justifyContent: 'space-between',
    },
    seatsRowsContainer: {
        flex: 1,
        marginBottom: ScaleHeight(20),
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    rowContainer: {
        flexDirection: 'row', alignItems: 'center'
    }
});

export default styles;
