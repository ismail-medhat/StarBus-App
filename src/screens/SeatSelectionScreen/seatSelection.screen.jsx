import React, { useMemo, useState } from 'react'
import styles from './styles';
import { View, Text, TouchableOpacity, FlatList, Dimensions, ScrollView, Image, Alert } from 'react-native'
import { AppButton, AppHeader, BusSelector, Calendar, ScreenContainer, TripCard } from 'components';
import { SvgFromXml, } from 'react-native-svg';
import { height, translate } from 'utils';
import { Colors, Fonts, Images, ScaleHeight, ScaleWidth } from 'common';
import { useCurrentLangSelector } from 'store/slices/authSlice';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from 'navigation/ScreenNames';

const buss =
{
  id: 1, busName: 'BusName', busNum: 'busNum', busType: '2x1',
  bookedSeats: [ 1, 2, 7, 13 ],
  seats: [ 1, 2, 3, 4, 5, 6, 4, 8, 9, 10, 11, 12, 13, 14 ]
}


const SeatsScreen = () => {
  const lang = useCurrentLangSelector()
  const { navigate } = useNavigation();

  const [ selectedSeats, setSelectedSeats ] = useState([]);

  const type = "2x1";
  const doorMarginSeats = [ 4 ];
  const columnsLeft = parseFloat(type.substring(0, type.indexOf('x')))
  const columnsRight = parseFloat(type.substring(type.indexOf('x') + 1, type.length))

  const frontSeatCount = 1
  const backSeatCount = 4
  const innerSeatCount = buss.seats.length - backSeatCount - frontSeatCount

  const columnCountArr = Array.from(Array((columnsLeft + columnsRight)))
  const rowsCountArr = Array.from(Array(innerSeatCount / (columnsLeft + columnsRight)))


  return (
    <>

      <ScreenContainer style={ styles.container }>
        <AppHeader withRightIcon title={ translate('Select Seat') }
          rightIcon={
            <Text style={ [ styles.timeTitle, { marginStart: -ScaleWidth(30) } ] }>{ '04m 10s' }</Text>
          }
        />

        {/* <BusSelector data={ buss } selectedBus={ selectedBus } setSelectedBus={ setSelectedBus } /> */ }

        <View style={ styles.rowStyle }>

          <View style={ { flexDirection: 'row', gap: 8, alignItems: 'center' } }>
            <View style={ [ styles.typesSquare, { backgroundColor: Colors.primaryColor } ] } />
            <Text style={ styles.typesTxt }>{ translate('Selected') }</Text>
          </View>

          <View style={ { flexDirection: 'row', gap: 8, alignItems: 'center' } }>
            <View style={ [ styles.typesSquare, { backgroundColor: "#787878" } ] } />
            <Text style={ styles.typesTxt }>{ translate('Booked') }</Text>
          </View>

          <View style={ { flexDirection: 'row', gap: 8, alignItems: 'center' } }>
            <View style={ [ styles.typesSquare, { borderColer: '#787878', borderWidth: 1 } ] } />
            <Text style={ styles.typesTxt }>{ translate('Available') }</Text>
          </View>

        </View>

        <ScrollView style={ { flex: 1 } } contentContainerStyle={ styles.seatsContainer }>


          <View style={ styles.seatsRowsContainer }>
            { Array.from(Array(frontSeatCount)).map((column, columnIndex) => {
              const number = columnIndex + 1;
              const isSelected = !!selectedSeats.find((val) => val == number)
              const isBooked = !!buss.bookedSeats.find((val) => val == number)
              return (
                <View style={ { flexDirection: 'row', flex: 1, justifyContent: 'space-between' } }>
                  <DriveWeal />

                  <Seat
                    key={ columnIndex }
                    num={ number }
                    onPress={ () =>
                      isSelected ?
                        setSelectedSeats(selectedSeats.filter((val => val != number)))
                        :
                        setSelectedSeats([ ...selectedSeats, number ])
                    }
                    isSelected={ isSelected }
                    isBooked={ isBooked }
                  />
                </View>
              )
            }
            ) }
          </View>


          {
            rowsCountArr.map((row, rowIndex) =>
              <View key={ rowIndex } style={ styles.seatsRowsContainer }>
                { columnCountArr.map((column, columnIndex) => {
                  const number = rowIndex * columnCountArr.length + columnIndex + 2;
                  const isSelected = !!selectedSeats.find((val) => val == number)
                  const isBooked = !!buss.bookedSeats.find((val) => val == number)

                  return (
                    <>
                      <Seat
                        key={ columnIndex }
                        num={ number }
                        onPress={ () =>
                          isSelected ?
                            setSelectedSeats(selectedSeats.filter((val => val != number)))
                            :
                            setSelectedSeats([ ...selectedSeats, number ])
                        }
                        isSelected={ isSelected }
                        isBooked={ isBooked }
                      />

                      { columnIndex == columnsLeft - 1 && !doorMarginSeats.includes(number + 1) &&
                        Array.from(Array(backSeatCount - columnsRight - columnsLeft)).map(() =>
                          < View style={ { width: ScaleWidth(37) } } />
                        ) }


                      { doorMarginSeats.includes(number) &&
                        Array.from(Array(1)).map(() =>
                          < View style={ { width: ScaleWidth(37) } } />
                        ) }

                    </>
                  )
                }

                ) }
              </View>



            )
          }

          <View style={ styles.seatsRowsContainer }>
            { Array.from(Array(backSeatCount)).map((column, columnIndex) => {
              const number = rowsCountArr.length * columnCountArr.length + columnIndex + 2;
              const isSelected = !!selectedSeats.find((val) => val == number)
              const isBooked = !!buss.bookedSeats.find((val) => val == number)

              return (
                <Seat
                  key={ columnIndex }
                  num={ number }
                  onPress={ () =>
                    isSelected ?
                      setSelectedSeats(selectedSeats.filter((val => val != number)))
                      :
                      setSelectedSeats([ ...selectedSeats, number ])
                  }
                  isSelected={ isSelected }
                  isBooked={ isBooked }
                />
              )
            }
            ) }
          </View>

        </ScrollView>

        <View View style={ styles.btnContainer } >
          <View style={ { flexShrink: 1, paddingEnd: 10 } }>
            <Text style={ styles.seatsTxt }>{ translate("Seats") }</Text>

            <Text numberOfLines={ 1 } style={ styles.selectedSeatsTxt }>
              { selectedSeats?.length ? selectedSeats.map((item, i) => i + 1 >= selectedSeats.length ? item : item + ',') : ' ' }
            </Text>
          </View>

          <TouchableOpacity
            style={ [ styles.btn,
            { flexDirection: lang == "en" ? "row" : "row-reverse" },
            ] }
            onPress={ () => {
              navigate(ScreenNames.payment)
              console.log('Selected ===> ', selectedSeats.toString())
            } }
          >
            <Text style={ styles.btnText }>{ translate("Continue") }</Text>
            <SvgFromXml xml={ buttonSvg } height={ ScaleWidth(24) } width={ ScaleWidth(24) } />
          </TouchableOpacity>
        </View >

      </ScreenContainer >
    </ >
  );
}

export default SeatsScreen


const Seat = ({ isBooked, isSelected, onPress, num }) => {
  if (isBooked) {
    return (
      <TouchableOpacity activeOpacity={ 1 }>
        <View style={ { alignItems: 'center', } }>
          <Image
            source={ Images.bookedSeat }
            style={ { height: ScaleHeight(60), width: ScaleWidth(34), marginHorizontal: ScaleWidth(3) } }
          />
          <Text style={ { fontFamily: Fonts.medium, color: '#fff', fontSize: ScaleHeight(17), textAlign: 'center', position: 'absolute', top: ScaleHeight(20) } }>{ num }</Text>
        </View>
      </TouchableOpacity>
    )
  } if (isSelected) {
    return (
      <TouchableOpacity onPress={ onPress }>
        <View style={ { alignItems: 'center', } }>
          <Image
            source={ Images.selectedSeat }
            style={ { height: ScaleHeight(60), width: ScaleWidth(34), marginHorizontal: ScaleWidth(3) } }
          />
          <Text style={ { fontFamily: Fonts.medium, color: '#fff', fontSize: ScaleHeight(17), textAlign: 'center', position: 'absolute', top: ScaleHeight(20) } }>{ num }</Text>
        </View>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity onPress={ onPress }>
        <View style={ { alignItems: 'center', } }>
          <Image
            source={ Images.seat }
            style={ { height: ScaleHeight(60), width: ScaleWidth(34), marginHorizontal: ScaleWidth(3) } }
          />
          <Text style={ { fontFamily: Fonts.medium, color: Colors.extraGreyColor, fontSize: ScaleHeight(16), textAlign: 'center', position: 'absolute', top: ScaleHeight(20) } }>{ num }</Text>

        </View>
      </TouchableOpacity>
    )
  }
}

const DriveWeal = () => {
  return (
    <Image source={ Images.driveWeal } style={ { height: ScaleHeight(40), aspectRatio: 1 } } />
  )
}

const buttonSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M14.43 18.82C14.24 18.82 14.05 18.75 13.9 18.6C13.61 18.31 13.61 17.83 13.9 17.54L19.44 12L13.9 6.46C13.61 6.17 13.61 5.69 13.9 5.4C14.19 5.11 14.67 5.11 14.96 5.4L21.03 11.47C21.32 11.76 21.32 12.24 21.03 12.53L14.96 18.6C14.81 18.75 14.62 18.82 14.43 18.82Z" fill="white"/>
  <path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z" fill="white"/>
</svg>
`
