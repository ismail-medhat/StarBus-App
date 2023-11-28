import React, { useEffect, useMemo, useState } from 'react'
import styles from './styles';
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { AppButton, AppHeader, Calendar, FilterTripModal, Loader, ScreenContainer, TripCard } from 'components';
import { SvgFromXml, } from 'react-native-svg';
import { translate } from 'utils';
import { ScaleHeight } from 'common';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from 'navigation/ScreenNames';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrips } from 'store/slices/tripsSlice';
import Toast from 'react-native-toast-message';


const TripScreen = ({ route: { params } }) => {

  const [ selectedDate, setSelectedDate ] = useState(params?.date);
  const [ selectedTrip, setSelectedTrip ] = useState(null);
  const [ isVisibleFilter, setIsVisibleFilter ] = useState(false);

  const { navigate, reset } = useNavigation();

  const dispatch = useDispatch();

  const { tripsLoading, allTrips } = useSelector((state) => state.trips);

  let trips = useMemo(() => allTrips ? allTrips[ selectedDate ] : [], [ allTrips, selectedDate ])


  useEffect(() => {
    if (params) {
      const values = { from: params?.from, to: params?.to, date: selectedDate }
      const formData = new FormData();
      for (const [ key, value ] of Object.entries(values)) {
        formData.append(key, value);
      }
      dispatch(getAllTrips({ formData, date: selectedDate }));
    }
  }, [ params ])


  const _handleChangeDate = (date) => {
    const values = { from: params?.from, to: params?.to, date }
    const formData = new FormData();
    for (const [ key, value ] of Object.entries(values)) {
      formData.append(key, value);
    }
    !allTrips[ date ] &&
      dispatch(getAllTrips({ formData, date }));

  }

  const _onSelectFilter = (data) => {
    console.log(data)
  }

  return (
    <ScreenContainer>
      <View style={ styles.container }>
        <AppHeader withRightIcon title={ translate('All Trips') }
          rightIcon={
            <TouchableOpacity style={ styles.svgBtn }
              onPress={ () => {
                reset({
                  index: 0,
                  routes: [ { name: ScreenNames.BottomTabs } ],
                })
              } }>
              <SvgFromXml xml={ penSvg } />
            </TouchableOpacity>
          }
        />

        <Calendar onSelectDate={ (date) => {
          setSelectedDate(date);
          _handleChangeDate(date)
        } }
          selected={ selectedDate }
        />

        <View style={ styles.rowStyle }>
          <Text style={ styles.listTitle } >
            { tripsLoading ? `${translate('All Trips')} ... ` :
              !trips?.length ? `${translate('All Trips')} ` :
                `${translate('All Trips')} (${(trips?.length).toFixed()}) `
            }
          </Text>
          <TouchableOpacity style={ styles.svgBtn }>
            <SvgFromXml xml={ editSvg } onPress={ () => { } } />
          </TouchableOpacity>
        </View>


        { tripsLoading ?

          <Loader />
          : <FlatList
            data={ trips }
            keyExtractor={ (item) => item.Schedule_id.toString() }
            style={ { flex: 1, marginBottom: ScaleHeight(20) } }
            contentContainerStyle={ { flexGrow: 1, } }
            showsVerticalScrollIndicator={ false }
            ItemSeparatorComponent={ <View style={ { height: ScaleHeight(16) } } /> }
            renderItem={ ({ index, item }) => {
              return (
                <TripCard
                  key={ index.toString() }
                  item={ item }
                  isSelected={ !!(selectedTrip?.Schedule_id == item?.Schedule_id) }
                  onSelect={ () => {
                    setSelectedTrip(item);
                  } }
                />
              )
            } }
          /> }

        <AppButton onPress={ () => {
          if (!selectedTrip) {
            Toast.show({
              type: "error",
              text1: i18n.t('select trip first '),
            });
          } else {

            navigate(ScreenNames.ChooseStationScreen, { selectedTrip })
          }
        }
        } title={ translate('Select') } icon={ <SvgFromXml xml={ buttonSvg } /> } />

      </View>



      <FilterTripModal isVisible={ isVisibleFilter } onSelect={ _onSelectFilter } />
    </ScreenContainer>
  );
}
/**
 *
 * filter:{
 * Bus type
 * routes
 * scadual
 * }
 */

export default TripScreen



const buttonSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="white"/>
  <path d="M15.5 10.5C14.26 10.5 13.25 9.49 13.25 8.25C13.25 7.01 14.26 6 15.5 6C16.74 6 17.75 7.01 17.75 8.25C17.75 9.49 16.74 10.5 15.5 10.5ZM15.5 7.5C15.09 7.5 14.75 7.84 14.75 8.25C14.75 8.66 15.09 9 15.5 9C15.91 9 16.25 8.66 16.25 8.25C16.25 7.84 15.91 7.5 15.5 7.5Z" fill="white"/>
  <path d="M8.5 10.5C7.26 10.5 6.25 9.49 6.25 8.25C6.25 7.01 7.26 6 8.5 6C9.74 6 10.75 7.01 10.75 8.25C10.75 9.49 9.74 10.5 8.5 10.5ZM8.5 7.5C8.09 7.5 7.75 7.84 7.75 8.25C7.75 8.66 8.09 9 8.5 9C8.91 9 9.25 8.66 9.25 8.25C9.25 7.84 8.91 7.5 8.5 7.5Z" fill="white"/>
  <path d="M12 19.45C9.1 19.45 6.75 17.09 6.75 14.2C6.75 13.29 7.49 12.55 8.4 12.55H15.6C16.51 12.55 17.25 13.29 17.25 14.2C17.25 17.09 14.9 19.45 12 19.45ZM8.4 14.05C8.32 14.05 8.25 14.12 8.25 14.2C8.25 16.27 9.93 17.95 12 17.95C14.07 17.95 15.75 16.27 15.75 14.2C15.75 14.12 15.68 14.05 15.6 14.05H8.4Z" fill="white"/>
</svg>
`
const penSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5.54 19.52C4.93 19.52 4.36 19.31 3.95 18.92C3.43 18.43 3.18 17.69 3.27 16.89L3.64 13.65C3.71 13.04 4.08 12.23 4.51 11.79L12.72 3.09999C14.77 0.929988 16.91 0.869988 19.08 2.91999C21.25 4.96999 21.31 7.10999 19.26 9.27999L11.05 17.97C10.63 18.42 9.85 18.84 9.24 18.94L6.02 19.49C5.85 19.5 5.7 19.52 5.54 19.52ZM15.93 2.90999C15.16 2.90999 14.49 3.38999 13.81 4.10999L5.6 12.81C5.4 13.02 5.17 13.52 5.13 13.81L4.76 17.05C4.72 17.38 4.8 17.65 4.98 17.82C5.16 17.99 5.43 18.05 5.76 18L8.98 17.45C9.27 17.4 9.75 17.14 9.95 16.93L18.16 8.23999C19.4 6.91999 19.85 5.69999 18.04 3.99999C17.24 3.22999 16.55 2.90999 15.93 2.90999Z" fill="#787878"/>
  <path d="M17.34 10.95C17.32 10.95 17.29 10.95 17.27 10.95C14.15 10.64 11.64 8.26997 11.16 5.16997C11.1 4.75997 11.38 4.37997 11.79 4.30997C12.2 4.24997 12.58 4.52997 12.65 4.93997C13.03 7.35997 14.99 9.21997 17.43 9.45997C17.84 9.49997 18.14 9.86997 18.1 10.28C18.05 10.66 17.72 10.95 17.34 10.95Z" fill="#787878"/>
  <path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill="#787878"/>
</svg>
`
const editSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 22.75C18.59 22.75 18.25 22.41 18.25 22V11C18.25 10.59 18.59 10.25 19 10.25C19.41 10.25 19.75 10.59 19.75 11V22C19.75 22.41 19.41 22.75 19 22.75Z" fill="#787878"/>
  <path d="M19 7.75C18.59 7.75 18.25 7.41 18.25 7V2C18.25 1.59 18.59 1.25 19 1.25C19.41 1.25 19.75 1.59 19.75 2V7C19.75 7.41 19.41 7.75 19 7.75Z" fill="#787878"/>
  <path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V17C11.25 16.59 11.59 16.25 12 16.25C12.41 16.25 12.75 16.59 12.75 17V22C12.75 22.41 12.41 22.75 12 22.75Z" fill="#787878"/>
  <path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#787878"/>
  <path d="M5 22.75C4.59 22.75 4.25 22.41 4.25 22V11C4.25 10.59 4.59 10.25 5 10.25C5.41 10.25 5.75 10.59 5.75 11V22C5.75 22.41 5.41 22.75 5 22.75Z" fill="#787878"/>
  <path d="M5 7.75C4.59 7.75 4.25 7.41 4.25 7V2C4.25 1.59 4.59 1.25 5 1.25C5.41 1.25 5.75 1.59 5.75 2V7C5.75 7.41 5.41 7.75 5 7.75Z" fill="#787878"/>
  <path d="M7 11.75H3C2.59 11.75 2.25 11.41 2.25 11C2.25 10.59 2.59 10.25 3 10.25H7C7.41 10.25 7.75 10.59 7.75 11C7.75 11.41 7.41 11.75 7 11.75Z" fill="#787878"/>
  <path d="M21 11.75H17C16.59 11.75 16.25 11.41 16.25 11C16.25 10.59 16.59 10.25 17 10.25H21C21.41 10.25 21.75 10.59 21.75 11C21.75 11.41 21.41 11.75 21 11.75Z" fill="#787878"/>
  <path d="M14 13.75H10C9.59 13.75 9.25 13.41 9.25 13C9.25 12.59 9.59 12.25 10 12.25H14C14.41 12.25 14.75 12.59 14.75 13C14.75 13.41 14.41 13.75 14 13.75Z" fill="#787878"/>
</svg>
`

