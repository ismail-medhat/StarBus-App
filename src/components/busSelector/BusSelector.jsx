import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Colors, Fonts, ScaleWidth } from 'common'
import { fontSize, translate } from 'utils'

const BusSelector = ({ data, setSelectedBus, selectedBus: selected }) => {

    return (
        <ScrollView
            scrollEnabled
            style={ { flexGrow: 0 } }
            horizontal
            contentContainerStyle={ { paddingHorizontal: ScaleWidth(20), alignSelf: 'flex-start', marginTop: 10 } }
            showsHorizontalScrollIndicator={ false }
        >
            { data?.map((item, index) => (
                <TouchableOpacity onPress={ () => setSelectedBus(item) }
                    style={ {
                        marginEnd: ScaleWidth(30),
                        borderBottomColor: Colors.primaryColor,
                        borderBottomWidth: selected?.id == item?.id ? 2 : 0
                    } }>

                    <Text style={ {
                        fontSize: fontSize(14),
                        fontFamily: Fonts.semi_bold,
                        color: selected?.id == item?.id ? Colors.primaryColor : '#787878',
                    } }>
                        { item.busName }
                    </Text>

                    <Text style={ {
                        fontSize: fontSize(14),
                        fontFamily: Fonts.semi_bold,
                        color: selected?.id == item?.id ? Colors.primaryColor : '#333',
                    } }>
                        { `${translate('Num')}: ${item.busNum}` }
                    </Text>

                </TouchableOpacity>
            )) }
        </ScrollView>
    )
}

export default BusSelector
