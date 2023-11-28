import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import moment from 'moment'
import Date from './date'
import styles from './styles'
import { ScaleWidth } from 'common'
import { fontSize } from 'utils'

const Calendar = ({ onSelectDate, selected }) => {
    const [ dates, setDates ] = useState([])

    // get the dates from today to 10 days from now, format them as strings and store them in state
    const getDates = () => {
        const _dates = []
        // const remainingDays = moment().daysInMonth() - moment().get('D') + 1 // get from today to end of the month 

        for (let i = 0; i < 10; i++) {
            const date = moment().add(i, 'days')
            _dates.push(date)
        }
        setDates(_dates)
    }

    useEffect(() => {
        getDates()
    }, [])

    return (
        <ScrollView
            scrollEnabled
            style={ { flexGrow: 0 } }
            horizontal
            contentContainerStyle={ { paddingHorizontal: ScaleWidth(20), alignSelf: 'flex-start', marginTop: 10 } }
            showsHorizontalScrollIndicator={ false }
        >
            { dates?.map((date, index) => (
                <Date
                    key={ index }
                    date={ date }
                    onSelectDate={ onSelectDate }
                    selected={ selected }
                    index={ index }
                    length={ dates?.length }
                />
            )) }
        </ScrollView>
    )
}

export default Calendar
