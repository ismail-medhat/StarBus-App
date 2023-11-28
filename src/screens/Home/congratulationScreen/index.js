import React from "react";
import { View, Image, ScrollView, Text } from "react-native";
import styles from "./styles";
import { AppButton, ScreenContainer, } from "components";
import { translate } from "utils";
import { Colors, Images, ScaleHeight, ScaleWidth, } from "common";
import { SVGError } from "assets/Svg";
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useCurrentLangSelector } from "store/slices/authSlice";

const CongratulationScreen = () => {
  const lang = useCurrentLangSelector();
  return (
    <>
      <ScreenContainer >

        <View style={ styles.container }>
          <Text style={ styles.maintxt }>
            { translate("Congratulation, You") }
          </Text>

          <Text style={ styles.txt }>
            { translate("reserve trip places with us.") }
          </Text>

          <Image
            source={ Images.congratulationpic }
            style={ styles.img }
          />


          <View style={ { flexDirection: 'row', marginHorizontal: ScaleWidth(20), } }>
            <SVGError style={ { marginTop: 2 } } />
            <Text style={ styles.errorText }>
              { translate("You can get your tickets from the bus station .") }
            </Text>

          </View>



          <AppButton
            btnStyle={ styles.viewticketBtn }
            title={ translate("View Ticket") }
            icon={ < AntDesign name="eyeo" size={ ScaleHeight(25) } color={ Colors.whiteColor } style={ {} } ></AntDesign> }
            onPress={ () => {

            } }
          />
        </View >
      </ScreenContainer>



    </>

  );

};
export default CongratulationScreen;