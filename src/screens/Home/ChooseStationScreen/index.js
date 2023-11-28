import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, ScrollView, Text } from "react-native";
import styles from "./styles";
import {
  AppButton,
  AppHeader,
  ClickableInput,
  HorizontalCard,
  Loader,
  ScreenContainer,
} from "components";
import { translate } from "utils";
import { Colors, Fonts, Images, ScaleHeight, ScaleWidth } from "common";
import { SVGLocation, SVGPassangers, SVGSearch } from "assets/Svg";
import SVGCalendar from "assets/Svg/SVGCalendar";
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Line, Svg, SvgFromXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "navigation/ScreenNames";
import { useDispatch, useSelector } from "react-redux";
import { useCurrentLangSelector } from "store/slices/authSlice";
import { getAllStations } from "store/slices";


const ChooseStatementScreen = ({ route: { params: { selectedTrip } } }) => {
  const [ pickUp, setPickup ] = useState()
  const [ dropOff, setDropOff ] = useState()

  const insets = useSafeAreaInsets();
  const isRtl = useCurrentLangSelector() == 'ar';
  const dispatch = useDispatch();


  const { navigate } = useNavigation();

  const { stationsLoading, allStations } = useSelector((state) => state.stations);

  useEffect(() => {
    // const values = { route_id: 2, fromCity: 1, toCity: 2 }
    const values = { route_id: selectedTrip?.Route_id, fromCity: selectedTrip?.from?.id, toCity: selectedTrip?.to?.id }
    const formData = new FormData();
    for (const [ key, value ] of Object.entries(values)) {
      formData.append(key, value);
    }

    dispatch(getAllStations({ formData }));
  }, [ params ])


  return (
    <>
      <ScreenContainer style={ styles.container } isDarkStatusBar={ false } statusBarBg={ Colors.primaryColor }>

        <View style={ {
          height: insets.top,
          right: 0,
          left: 0,
          top: insets.top,
          backgroundColor: Colors.primaryColor,
          position: 'absolute'
        } }
        />

        <AppHeader
          title={ translate("Choose Station") }
          backgroundColor={ Colors.primaryColor }
          titleColor={ Colors.whiteColor }
        />


        <View style={ styles.topSection }>
          <Text style={ { color: "#fff", fontFamily: Fonts.medium, fontSize: ScaleHeight(14) } }>
            Cairo
          </Text>
          <View>

            <View style={ { flexDirection: 'row', alignItems: 'center', marginHorizontal: ScaleWidth(20) } }>
              <View style={ {
                borderStyle: 'dashed',
                borderWidth: .8,
                borderColor: "#fff",
                width: ScaleWidth(28),
                height: 0,
              } }
              />

              <View style={ { marginHorizontal: ScaleWidth(15) } }>
                <Text style={ { color: "#fff", fontFamily: Fonts.medium, fontSize: ScaleHeight(12) } }>
                  { translate("start time") }
                </Text>

                <Text style={ { color: "#fff", fontFamily: Fonts.medium, fontSize: ScaleHeight(14) } }>
                  01:00 AM
                </Text>
              </View>

              <View style={ {
                borderStyle: 'dashed',
                borderWidth: .8,
                borderColor: "#fff",
                width: ScaleWidth(28),
                height: 0,
              } }
              />
            </View>


          </View>
          <Text style={ { color: "#fff", fontFamily: Fonts.medium, fontSize: ScaleHeight(14) } }>
            Luxor
          </Text>
        </View>

        <ScrollView contentContainerStyle={ { paddingBottom: 50 } }>
          <Text style={ styles.pickupText }>
            { translate("Pickup Location") }
          </Text>


          {
            !stationsLoading ?
              allStations[ 'from_city' ]?.map((item, i) =>
                <TouchableOpacity
                  onPress={ () => pickUp?.id == item?.id ? setPickup(undefined) : setPickup(item) }
                  style={ { flexDirection: 'row', paddingHorizontal: ScaleWidth(20), marginBottom: i < allStations[ 'from_city' ]?.length - 1 ? 15 : 0, } }
                >
                  <View style={ { flexDirection: 'row', } }>
                    <TouchableOpacity
                      onPress={ () => {
                        pickUp?.id == item?.id ? setPickup(undefined) : setPickup(item)
                      } }
                      style={ {
                        width: ScaleWidth(20),
                        height: ScaleHeight(20),
                        borderWidth: 1,
                        borderColor: Colors.extraGreyColor,
                        borderRadius: 5,
                        marginEnd: 15,
                        backgroundColor: item?.id == pickUp?.id ? Colors.primaryColor : '#fff'
                      } } />
                    <Text style={ { fontFamily: Fonts.medium } }>{ isRtl ? item.station_name_ar : item.station_name }</Text>
                  </View>
                </TouchableOpacity>)
              : <Loader />
          }



          <Text style={ styles.pickupText }>
            { translate("Drop off Location") }
          </Text>

          {
            !stationsLoading ?

              allStations[ 'to_city' ]?.map((item, i) =>
                <TouchableOpacity
                  onPress={ () => {
                    dropOff?.id == item?.id ? setDropOff(undefined) : setDropOff(item)
                  } } style={ { flexDirection: 'row', paddingHorizontal: ScaleWidth(20), marginBottom: i < allStations[ 'to_city' ]?.length - 1 ? 15 : 0, } }>
                  <View style={ { flexDirection: 'row', } }>
                    <View
                      onPress={ () => {
                        !!dropOff?.id == item?.id ? setDropOff(undefined) : setDropOff(item)
                      } }
                      style={ {
                        width: ScaleWidth(20),
                        height: ScaleHeight(20),
                        borderWidth: 1,
                        borderColor: Colors.extraGreyColor,
                        borderRadius: 5,
                        marginEnd: 15,
                        backgroundColor: item?.id == dropOff?.id ? Colors.primaryColor : '#fff'

                      } } />
                    <Text style={ { fontFamily: Fonts.medium } }>{ isRtl ? item.station_name_ar : item.station_name }</Text>
                  </View>
                </TouchableOpacity>)
              :
              <Loader />
          }

        </ScrollView>

        <AppButton onPress={ () => navigate(ScreenNames.SeatsScreen) } title={ translate('Select') } icon={ <SvgFromXml xml={ buttonSvg } /> } />

        <View style={ { height: 20 } } />
      </ScreenContainer>

    </>

  );

};
export default ChooseStatementScreen;



const buttonSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="white"/>
  <path d="M15.5 10.5C14.26 10.5 13.25 9.49 13.25 8.25C13.25 7.01 14.26 6 15.5 6C16.74 6 17.75 7.01 17.75 8.25C17.75 9.49 16.74 10.5 15.5 10.5ZM15.5 7.5C15.09 7.5 14.75 7.84 14.75 8.25C14.75 8.66 15.09 9 15.5 9C15.91 9 16.25 8.66 16.25 8.25C16.25 7.84 15.91 7.5 15.5 7.5Z" fill="white"/>
  <path d="M8.5 10.5C7.26 10.5 6.25 9.49 6.25 8.25C6.25 7.01 7.26 6 8.5 6C9.74 6 10.75 7.01 10.75 8.25C10.75 9.49 9.74 10.5 8.5 10.5ZM8.5 7.5C8.09 7.5 7.75 7.84 7.75 8.25C7.75 8.66 8.09 9 8.5 9C8.91 9 9.25 8.66 9.25 8.25C9.25 7.84 8.91 7.5 8.5 7.5Z" fill="white"/>
  <path d="M12 19.45C9.1 19.45 6.75 17.09 6.75 14.2C6.75 13.29 7.49 12.55 8.4 12.55H15.6C16.51 12.55 17.25 13.29 17.25 14.2C17.25 17.09 14.9 19.45 12 19.45ZM8.4 14.05C8.32 14.05 8.25 14.12 8.25 14.2C8.25 16.27 9.93 17.95 12 17.95C14.07 17.95 15.75 16.27 15.75 14.2C15.75 14.12 15.68 14.05 15.6 14.05H8.4Z" fill="white"/>
</svg>
`