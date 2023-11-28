import React, { useState } from 'react'
import styles from './styles';
import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import { Line, Path, Rect, Svg, SvgFromXml, } from 'react-native-svg';
import { translate } from 'utils';
import { ScaleHeight, ScaleWidth } from 'common';
import { useCurrentLangSelector } from 'store/slices/authSlice';


export const TripCard = ({ isSelected, item, onSelect }) => {

  const isRtl = useCurrentLangSelector() == 'ar';

  return (
    <TouchableOpacity onPress={ onSelect } style={ {} }>
      <TripCardSvg isSelected={ isSelected } />
      <View
        style={ styles.cardContentContainer }>
        { isSelected && <SvgFromXml style={ styles.selectedSvg } xml={ selectedSvg } height={ ScaleWidth(15) } width={ ScaleWidth(15) } /> }

        <View style={ styles.CardContent }>
          <View style={ styles.driverLogo }>
            <SvgFromXml xml={ driverSvg } />
          </View>
          <View style={ { flex: 1 } }>
            <View style={ [ styles.busNameLine ] }>
              <View>
                <Text style={ styles.busTxt }>{ item.bus_name }</Text>
                {/* <Text style={ styles.busTyp/Txt }>{ item.busType }</Text> */ }
              </View>
              <View>
                <Text style={ styles.priceTxt }>{ item.price }</Text>
                <Text style={ styles.seatsTxt }>{ `${item.Seat_Left} ${translate('Seat Left')}` }</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={ { flexGrow: 1 } } />

        <View style={ styles.CardContent }>
          <View style={ { flex: 1 } }>
            <View style={ styles.busNameLine }>
              <View>
                <Text style={ styles.bottomLabelTxt }>{ translate('Time') }</Text>
                <Text style={ styles.busTxt }>{ item.time }</Text>
              </View>

              <View style={ { width: ScaleWidth(12) } } />

              <View>
                <Text style={ styles.bottomLabelTxt }>{ translate('From') }</Text>
                <View style={ { flexDirection: 'row', alignItems: 'center' } }>
                  <Text style={ styles.busTxt }>{ item.from[ isRtl ? 'name_ar' : 'name' ] }</Text>
                  <SvgFromXml style={ { marginStart: ScaleWidth(12), marginEnd: ScaleWidth(3) } } xml={ clockSvg } height={ ScaleHeight(15) } width={ ScaleHeight(15) } />
                  <Text style={ styles.timeTxt }>{ 'item.schedule' }</Text>
                </View>
              </View>
              <View>
                <Text style={ styles.bottomLabelTxt }>{ translate('To') }</Text>
                <Text style={ styles.busTxt }>{ item.to[ isRtl ? 'name_ar' : 'name' ] }</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export const TripCardSvg = ({ isSelected }) => {
  const screenWidth = Dimensions.get('screen').width;

  return (
    <Svg width={ screenWidth } height={ ScaleHeight(170) } viewBox={ `0 0 ${screenWidth + 2.5} ${ScaleHeight(175)}` } >
      <Path
        d={ [
          `M ${ScaleWidth(20) + ScaleWidth(14)} 1.2`, //start from left 20 :top 1.2 as strokeWidth
          `h ${screenWidth - ScaleWidth(40) - ScaleWidth(28 - 6)}`, // continue horizontal to screenWidth - 40 - 28 ========>  40 = ( the total marginHorizontal 20x2) , 28 = (the total border curve 14 * 2)
          `a 0 0 0 0 1 ${ScaleWidth(14)} ${ScaleWidth(14)} `, // make 14x14 corner ====>  دول ال 28 اللي طرحناهم في السطر اللي فات
          `v ${ScaleHeight(70) - ScaleWidth(14)}`, // continue down ( total card hight / 2  - one corner curve )  = 70 - 14
          `a 0 0 0 0 0 -${ScaleWidth(12)} ${ScaleWidth(12)} `, // make the middle circle curve go left 12 and down 12
          `a 0 0 0 0 0 ${ScaleWidth(12)} ${ScaleWidth(12)} `, // continue the middle circle curve go down 12 and right 12
          `v ${ScaleHeight(70) - ScaleWidth(14)}`, // continue down more  70 - 14 --->( total card hight / 2  - one corner curve)
          `a 0 0 0 0 1 -${ScaleWidth(14)} ${ScaleWidth(14)} `, // make 14x14 corner

          `h -${screenWidth - ScaleWidth(40) - ScaleWidth(28 - 10)}`, // continue horizontal to left screenWidth  -  - 40 - 28 ========>  عكس تاني سطر
          `a 0 0 0 0 1 -${ScaleWidth(14)} -${ScaleWidth(14)} `, //make 14x14 corner
          `v ${-ScaleHeight(70) + ScaleWidth(14)}`, //continue up 70 - 14  --->( total card hight / 2  - one corner curve  )
          `a 0 0 0 0 0 ${ScaleWidth(12)} -${ScaleWidth(12)} `, // make the middle circle curve go right 12 and up 12
          `a 0 0 0 0 0 -${ScaleWidth(12)} -${ScaleWidth(12)} `, // make the middle circle curve go left 12 and up 12
          `v ${-ScaleHeight(70) + ScaleWidth(14)}`, //continue up 70 - 14   --> ( total card hight / 2  - one corner curve  )
          `a 0 0 0 0 1 ${ScaleWidth(14)} -${ScaleWidth(14)} `, //make 14x14 corner
          `z`, // finish the line in the start pont
        ].join(' ') }
        fill={ isSelected ? '#76329D10' : '#FFF' }
        stroke={ isSelected ? '#F29100' : '#E4E0E0' }
        strokeWidth={ 1.2 }
      />

      <Line
        strokeDasharray="4, 4"
        y1={ ScaleHeight(70 + 14) + 0.6 }
        x1={ screenWidth - ScaleWidth(12) - ScaleWidth(20) - 7 }
        y2={ ScaleHeight(70 + 14) + 0.6 }
        x2={ ScaleWidth(20) + ScaleWidth(12) + 7 }
        fill={ 'white' }
        stroke={ isSelected ? '#F29100' : '#787878' }
        strokeWidth={ 1.2 }
      />
    </Svg>
  )
}

const driverSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M17.4 22.75H7.60001C5.48001 22.75 3.75 21.02 3.75 18.9V5.10001C3.75 2.98001 5.48001 1.25 7.60001 1.25H17.4C19.52 1.25 21.25 2.98001 21.25 5.10001V18.9C21.25 21.02 19.52 22.75 17.4 22.75ZM7.60001 2.75C6.31001 2.75 5.25 3.80001 5.25 5.10001V18.9C5.25 20.19 6.30001 21.25 7.60001 21.25H17.4C18.69 21.25 19.75 20.2 19.75 18.9V5.10001C19.75 3.81001 18.7 2.75 17.4 2.75H7.60001Z" fill="#F29100"/>
  <path d="M19 13.75H6C4.76 13.75 3.75 12.74 3.75 11.5V9.5C3.75 8.26 4.76 7.25 6 7.25H19C20.24 7.25 21.25 8.26 21.25 9.5V11.5C21.25 12.74 20.24 13.75 19 13.75ZM6 8.75C5.59 8.75 5.25 9.09 5.25 9.5V11.5C5.25 11.91 5.59 12.25 6 12.25H19C19.41 12.25 19.75 11.91 19.75 11.5V9.5C19.75 9.09 19.41 8.75 19 8.75H6Z" fill="#F29100"/>
  <path d="M8.5 18.75C8.17 18.75 7.85 18.62 7.62 18.38C7.56 18.33 7.51001 18.26 7.46001 18.19C7.42001 18.13 7.38001 18.05 7.35001 17.98C7.31001 17.9 7.29 17.82 7.27 17.74C7.26 17.66 7.25 17.58 7.25 17.5C7.25 17.42 7.26 17.34 7.27 17.26C7.29 17.18 7.31001 17.0999 7.35001 17.0199C7.38001 16.9499 7.42001 16.87 7.46001 16.81C7.51001 16.74 7.56 16.67 7.62 16.62C8.08 16.15 8.91 16.15 9.38 16.62C9.44 16.67 9.48999 16.74 9.53999 16.81C9.57999 16.87 9.61999 16.9499 9.64999 17.0199C9.68999 17.0999 9.71 17.18 9.73 17.26C9.74 17.34 9.75 17.42 9.75 17.5C9.75 17.58 9.74 17.66 9.73 17.74C9.71 17.82 9.68999 17.9 9.64999 17.98C9.61999 18.05 9.57999 18.13 9.53999 18.19C9.48999 18.26 9.44 18.33 9.38 18.38C9.15 18.62 8.83 18.75 8.5 18.75Z" fill="#F29100"/>
  <path d="M16.5 18.75C16.17 18.75 15.85 18.62 15.62 18.38C15.38 18.15 15.25 17.83 15.25 17.5C15.25 17.17 15.38 16.85 15.62 16.62C16.08 16.15 16.92 16.15 17.38 16.62C17.62 16.85 17.75 17.17 17.75 17.5C17.75 17.83 17.62 18.15 17.38 18.38C17.15 18.62 16.83 18.75 16.5 18.75Z" fill="#F29100"/>
  <path d="M15 5.75H10C9.59 5.75 9.25 5.41 9.25 5C9.25 4.59 9.59 4.25 10 4.25H15C15.41 4.25 15.75 4.59 15.75 5C15.75 5.41 15.41 5.75 15 5.75Z" fill="#F29100"/>
</svg>
`
const clockSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <path d="M8 14.2188C4.725 14.2188 2.0625 11.5562 2.0625 8.28125C2.0625 5.00625 4.725 2.34375 8 2.34375C11.275 2.34375 13.9375 5.00625 13.9375 8.28125C13.9375 11.5562 11.275 14.2188 8 14.2188ZM8 3.28125C5.24375 3.28125 3 5.525 3 8.28125C3 11.0375 5.24375 13.2812 8 13.2812C10.7563 13.2812 13 11.0375 13 8.28125C13 5.525 10.7563 3.28125 8 3.28125Z" fill="#787878"/>
  <path d="M8 8.59375C7.74375 8.59375 7.53125 8.38125 7.53125 8.125V5C7.53125 4.74375 7.74375 4.53125 8 4.53125C8.25625 4.53125 8.46875 4.74375 8.46875 5V8.125C8.46875 8.38125 8.25625 8.59375 8 8.59375Z" fill="#787878"/>
  <path d="M9.875 1.71875H6.125C5.86875 1.71875 5.65625 1.50625 5.65625 1.25C5.65625 0.99375 5.86875 0.78125 6.125 0.78125H9.875C10.1312 0.78125 10.3438 0.99375 10.3438 1.25C10.3438 1.50625 10.1312 1.71875 9.875 1.71875Z" fill="#787878"/>
</svg>`

const selectedSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
  <path d="M6.178 0.000537024C4.56383 -0.020873 3.00703 0.598654 1.84893 1.72329C0.690823 2.84793 0.0259215 4.38589 0 6C0.0259215 7.61411 0.690823 9.15207 1.84893 10.2767C3.00703 11.4013 4.56383 12.0209 6.178 11.9995C7.79218 12.0209 9.34898 11.4013 10.5071 10.2767C11.6652 9.15207 12.3301 7.61411 12.356 6C12.3301 4.38589 11.6652 2.84793 10.5071 1.72329C9.34898 0.598654 7.79218 -0.020873 6.178 0.000537024ZM9.63097 4.42119L5.68268 8.22512C5.56946 8.33576 5.41821 8.39893 5.25993 8.40168C5.10165 8.40443 4.9483 8.34656 4.8313 8.23991L2.73983 6.39024C2.62221 6.28458 2.55127 6.1366 2.54257 5.97873C2.53387 5.82086 2.58811 5.66598 2.69341 5.54804C2.80598 5.43181 2.95923 5.36374 3.12094 5.35813C3.28265 5.35252 3.44024 5.4098 3.5606 5.51794L5.21746 6.99166L8.74847 3.5642C8.86626 3.44862 9.0247 3.38386 9.18972 3.38386C9.35475 3.38386 9.51319 3.44862 9.63097 3.5642C9.6896 3.61912 9.73633 3.68548 9.76828 3.75919C9.80023 3.83289 9.81671 3.91237 9.81671 3.9927C9.81671 4.07303 9.80023 4.1525 9.76828 4.22621C9.73633 4.29991 9.6896 4.36628 9.63097 4.42119Z" fill="#F29100"/>
</svg>
`