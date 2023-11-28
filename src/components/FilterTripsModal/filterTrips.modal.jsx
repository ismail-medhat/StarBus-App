import React, { useEffect, useRef, useMemo, useState } from 'react'
import styles from './styles';
import { View, Text, TouchableOpacity, FlatList, Dimensions, useWindowDimensions } from 'react-native'
import { translate } from 'utils';
import { Colors, ScaleHeight, ScaleWidth } from 'common';
import RBSheet from "react-native-raw-bottom-sheet";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppButton from 'components/AppButton';
import { ScrollView } from 'react-native-gesture-handler';
import AppHeader from 'components/AppHeader';

const routes_arr = [ "route 1", "route 2", "route 3", "route 4", "route 5", "route 6", "route 7", "route 8", "route 9" ]

export const FilterTripModal = ({ isVisible, onSelect }) => {

  const [ route, setRoute ] = useState()
  const [ schedule, setSchedule ] = useState(new Date())

  const screenHeight = useWindowDimensions().height
  const insets = useSafeAreaInsets()
  const rbRef = useRef()

  useEffect(() => {
    isVisible ?
      rbRef?.current?.open()
      :
      rbRef?.current?.close()
  }, [ isVisible ])

  return (
    <RBSheet
      ref={ rbRef }
      height={ screenHeight - insets.top }
      openDuration={ 500 }
      animationType='slide'
    >
      <AppHeader onPressBack={ () => rbRef?.current?.close() } title={ translate('Filter Trips') } />

      <View style={ { margin: ScaleWidth(20), flex: 1 } }>


        <Text style={ styles.label }>{ translate('schedule') }</Text>


        <ScrollView contentContainerStyle={ { flexGrow: 1, paddingBottom: 20 } }>


          <Text style={ styles.label }>{ translate('Routes') }</Text>

          {
            routes_arr.map((item, i) =>
              <TouchableOpacity
                onPress={ () => route == item ? setRoute(undefined) : setRoute(item) }
                style={ { flexDirection: 'row', marginBottom: i < routes_arr.length - 1 ? 15 : 0, } }
              >
                <View style={ { flexDirection: 'row', } }>
                  <TouchableOpacity
                    onPress={ () => route == item ? setRoute(undefined) : setRoute(item) }
                    style={ [ styles.card, { backgroundColor: item == route ? Colors.primaryColor : '#fff' } ] } />
                  <Text>{ item }</Text>
                </View>
              </TouchableOpacity>)
          }


        </ScrollView>

        <AppButton title={ translate('Search') } onPress={ () => {
          rbRef?.current?.close()
        } } />

      </View>

      <View style={ { height: insets.bottom + 20 } } />
    </RBSheet>
  );
}