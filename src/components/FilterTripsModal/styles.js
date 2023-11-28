import { StyleSheet } from 'react-native';
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
import { fontSize, width } from 'utils';

const styles = StyleSheet.create({
    label: { fontSize: ScaleWidth(16), marginBottom: 10, fontFamily: Fonts.bold, color: '#333' },
    txt: { fontSize: ScaleWidth(14), fontFamily: Fonts.medium, color: Colors.extraGreyColor },
    card: {
        width: ScaleWidth(20),
        height: ScaleHeight(20),
        borderWidth: 1,
        borderColor: Colors.extraGreyColor,
        borderRadius: 5,
        marginEnd: 10,

    },
});

export default styles;
