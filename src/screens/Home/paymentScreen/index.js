import React, { useState } from "react";
import { View, TouchableOpacity, Image, Dimensions, Text } from "react-native";
import styles from "./styles";
import {
  AppButton,
  AppHeader,
  ScreenContainer,
} from "components";
import { translate } from "utils";
import { Colors, Fonts, Images, ScaleHeight, ScaleWidth } from "common";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "navigation/ScreenNames";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Line, Path, Svg } from "react-native-svg";
import { useCurrentLangSelector } from "store/slices/authSlice";
const user_data = {
  name: 'Mostafa Kamel',
  total: '640 LE',
  from_city: 'Cairo',
  to_city: 'Asyut',
  date: '20 Oct, Wen',
  time: '03:45 PM',
  Bus_no: 1564,
  passengers: 3,
  ticket_no: 3265,
  seats: 'A1,B2,B3',
}

const PaymentScreen = () => {

  const [ isPayMob, setIsPayMob ] = useState()
  const navigation = useNavigation();
  const lang = useCurrentLangSelector();
  return (
    <>
      <ScreenContainer >
        <AppHeader
          title={ translate("Payment") }
          withRightIcon
          rightIcon={
            <View style={ { width: ScaleWidth(32) } } />
          }
        />

        <Text style={ styles.txt }>{ translate("Ticket Details") }</Text>

        <MainViewSvg >

          <View style={ { flexDirection: 'row', paddingTop: ScaleHeight(5) } }>
            <Image
              style={ styles.profilepic }
              source={ Images.profilePic }>
            </Image>
            <View>
              <Text style={ styles.passtxt }>{ translate("Passenger Name:") }</Text>
              <Text style={ styles.name }>Mostafa Kamel</Text>
            </View>

            <View style={ { marginStart: ScaleWidth(52) } }>
              <Text style={ styles.passtxt }>{ translate("Total:") }</Text>
              <Text style={ styles.total }>640 LE</Text>
            </View>
          </View>


          <View style={ { flexDirection: 'row', marginTop: ScaleHeight(20), justifyContent: 'space-between', } }>
            <View>
              <Text style={ styles.key }>{ translate("From") }</Text>
              <Text style={ styles.value }>{ user_data.from_city }</Text>
            </View>
            <View>
              <Text style={ styles.key }>{ translate("To") }</Text>
              <Text style={ styles.value }>{ user_data.to_city }</Text>
            </View>
            <View>
              <Text style={ styles.key }>{ translate("Date") }</Text>
              <Text style={ styles.value }>{ user_data.date }</Text>
            </View>
          </View>

          <View style={ { flexDirection: 'row', marginTop: ScaleHeight(20), justifyContent: 'space-between', } }>
            <View>
              <Text style={ styles.key }>{ translate("Time") }</Text>
              <Text style={ styles.value }>{ user_data.time }</Text>
            </View>
            <View>
              <Text style={ styles.key }>{ translate("Bus No") }</Text>
              <Text style={ styles.value }>{ user_data.Bus_no }</Text>
            </View>
            <View>
              <Text style={ styles.key }>{ translate("Passengers") }</Text>
              <Text style={ styles.value }>{ user_data.passengers }</Text>
            </View>
          </View>

          <View style={ { flexDirection: 'row', marginTop: ScaleHeight(20), justifyContent: 'space-between', } }>

            <View>
              <Text style={ styles.key }>{ translate("Ticket No") }</Text>
              <Text style={ styles.value }>{ user_data.ticket_no }</Text>
            </View>


            <View>
              <Text style={ styles.key }>{ translate("Seats") }</Text>
              <Text style={ styles.value }>{ user_data.seats }</Text>
            </View>

            <View>
              <TouchableOpacity>
                <Text style={ styles.key }> </Text>
                <Text style={ styles.viewDetails }>{ translate("View Details") }</Text>
                <View style={ { borderBottomColor: Colors.primaryColor, borderBottomWidth: 1, width: 95, marginTop: -1.5 } }></View>
              </TouchableOpacity>
            </View>
          </View>

        </MainViewSvg>

        <Text style={ styles.pm_txt }>{ translate("Payment Methods") }</Text>

        <View style={ {
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: ScaleWidth(20),
          gap: ScaleWidth(20)
        } }>
          <TouchableOpacity onPress={ () => setIsPayMob(true) } style={ [ styles.cash, { borderWidth: isPayMob ? 1 : 0 } ] }>
            <Image
              resizeMode="contain"
              source={ Images.paymob }
              style={ { height: ScaleHeight(50), width: ScaleWidth(90) } }
            />
          </TouchableOpacity>


          <TouchableOpacity onPress={ () => setIsPayMob(false) } style={ [ styles.cash, { borderWidth: isPayMob ? 0 : 1 } ] }>
            <Image
              source={ Images.fawry }
              style={ { height: ScaleHeight(50), width: ScaleWidth(110) } }
            />
          </TouchableOpacity>

        </View>

        <View style={ { flex: 1 } } />

        <AppButton
          title={ translate("Checkout : ") + user_data.total }
          icon={ < AntDesign name="creditcard" size={ ScaleHeight(20) } color={ Colors.whiteColor } style={ { marginHorizontal: ScaleWidth(5), marginBottom: 2 } } /> }
          onPress={ () => {
            navigation.navigate(ScreenNames.congratulation);
          } }
        />

        <View style={ { height: 20 } } />
      </ScreenContainer>
    </>

  );

};
export default PaymentScreen;


const MainViewSvg = ({ children }) => {
  const screenWidth = Dimensions.get('screen').width;

  return (
    <Svg width={ screenWidth + 2 } height={ ScaleHeight(306) } viewBox={ `0 0 ${screenWidth + 2} ${ScaleHeight(306)}` } >
      <Path
        d={ [
          `M ${ScaleWidth(20) + ScaleWidth(14)} 1.2`, //start from left 20 :top 1.2 as strokeWidth
          `h ${screenWidth - ScaleWidth(40) - ScaleWidth(28 - 6)}`, // continue horizontal to screenWidth - 40 - 28 ========>  40 = ( the total marginHorizontal 20x2) , 28 = (the total border curve 14 * 2)
          `a 0 0 0 0 1 ${ScaleWidth(14)} ${ScaleWidth(14)} `, // make 14x14 corner ====>  دول ال 28 اللي طرحناهم في السطر اللي فات
          `v ${ScaleHeight(70) - ScaleWidth(14)}`, // continue down ( total card hight / 2  - one corner curve )  = 70 - 14
          `a 0 0 0 0 0 -${ScaleWidth(12)} ${ScaleWidth(12)} `, // make the middle circle curve go left 12 and down 12
          `a 0 0 0 0 0 ${ScaleWidth(12)} ${ScaleWidth(12)} `, // continue the middle circle curve go down 12 and right 12
          `v ${ScaleHeight(209) - ScaleWidth(14)}`, // continue down more  70 - 14 --->( total card hight / 2  - one corner curve)
          `a 0 0 0 0 1 -${ScaleWidth(14)} ${ScaleWidth(14)} `, // make 14x14 corner

          `h -${screenWidth - ScaleWidth(40) - ScaleWidth(28 - 10)}`, // continue horizontal to left screenWidth  -  - 40 - 28 ========>  عكس تاني سطر
          `a 0 0 0 0 1 -${ScaleWidth(14)} -${ScaleWidth(14)} `, //make 14x14 corner
          `v ${-ScaleHeight(209) + ScaleWidth(14)}`, //continue up 70 - 14  --->( total card hight / 2  - one corner curve  )
          `a 0 0 0 0 0 ${ScaleWidth(12)} -${ScaleWidth(12)} `, // make the middle circle curve go right 12 and up 12
          `a 0 0 0 0 0 -${ScaleWidth(12)} -${ScaleWidth(12)} `, // make the middle circle curve go left 12 and up 12
          `v ${-ScaleHeight(70) + ScaleWidth(14)}`, //continue up 70 - 14   --> ( total card hight / 2  - one corner curve  )
          `a 0 0 0 0 1 ${ScaleWidth(14)} -${ScaleWidth(14)} `, //make 14x14 corner
          `z`, // finish the line in the start pont
        ].join(' ') }
        fill={ '#FFF' }
        stroke={ '#E4E0E0' }
        strokeWidth={ 1.2 }
      />

      <Line
        strokeDasharray="4, 4"
        y1={ ScaleHeight(70 + 14) + 0.6 }
        x1={ screenWidth - ScaleWidth(12) - ScaleWidth(20) - 7 }
        y2={ ScaleHeight(70 + 14) + 0.6 }
        x2={ ScaleWidth(20) + ScaleWidth(12) + 7 }
        fill={ 'white' }
        stroke={ '#787878' }
        strokeWidth={ 1.2 }
      />

      <View style={ {
        position: 'absolute',
        // backgroundColor: '#12345640',
        top: ScaleHeight(20),
        right: ScaleWidth(37),
        left: ScaleWidth(37),
        height: ScaleHeight(306 - 40)
      } }>
        { children }
      </View>
    </Svg>
  )
}
