import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import moment from 'moment'
import styles from './styles'
import { Colors, Fonts, ScaleHeight } from 'common'
import { fontSize } from 'utils'

const Date = ({ date, onSelectDate, selected, index, length }) => {

    const dayNumber = moment(date).format('DD')
    const dayString = moment(date).format('dd')


    // get the full date e.g 2021-01-01 - we'll use this to compare the date to the selected date
    const fullDate = moment(date).format('YYYY-MM-DD')

    const isSelected = fullDate == selected

    return (
        <TouchableOpacity
            onPress={ () => onSelectDate(fullDate) }
            style={ [ styles.card, { marginEnd: index < length - 1 ? 30 : 0 } ] }>
            <Text style={ {
                fontFamily: Fonts.semi_bold, fontSize: fontSize(14),
                color: isSelected ? Colors.primaryColor : '#787878'
            } }>
                { dayString }
            </Text>
            <View style={ { height: 8 } } />
            <Text style={ {
                fontFamily: Fonts.semi_bold, fontSize: fontSize(14),
                color: isSelected ? Colors.primaryColor : '#333',
                textDecorationLine: isSelected ? 'underline' : 'none'
            } }>
                { dayNumber }
            </Text>
        </TouchableOpacity >
    )
}

export default Date

