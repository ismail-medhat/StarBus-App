import { StyleSheet } from 'react-native';
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
import { fontSize, height, width } from 'utils';

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  big: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  medium: {
    fontSize: 16,
  },
})

export default styles;
