import React, { useState } from "react";
import { View, TouchableOpacity, Image, Dimensions, Text } from "react-native";
import styles from "./styles";
import {
  AppHeader,
  ScreenContainer,
} from "components";

import { SVGNotificationicon, SVGTime } from "assets/Svg";
import { translate } from "utils";
import { Colors, Fonts, Images, ScaleHeight, ScaleWidth } from "common";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "navigation/ScreenNames";
import { useCurrentLangSelector } from "store/slices/authSlice";
import { FlatList } from 'react-native-gesture-handler';

const NotificationScreen = () => {
  const lang = useCurrentLangSelector()

  const number = 12
  const notfication_arr = [
    {
      text: 'Mostafa Kamel is an Egyption thinker author, scientist.',
      date: '10:30 AM'
    }, {
      text: 'Mostafa Kamel is an Egyption thinker author, scientist.',
      date: '10:30 AM'
    }, {
      text: 'Mostafa Kamel is an Egyption thinker author, scientist.',
      date: '10:30 AM'
    }, {
      text: 'Mostafa Kamel is an Egyption thinker author, scientist.',
      date: '10:30 AM'
    }, {
      text: 'Mostafa Kamel is an Egyption thinker author, scientist.',
      date: '10:30 AM'
    }, {
      text: 'Mostafa Kamel is an Egyption thinker author, scientist.',
      date: '10:30 AM'
    }
  ]
  return (
    <ScreenContainer style={ styles.container }>

      <AppHeader
        hideBack
        title={ translate("Notifications") }
        withRightIcon
        rightIcon={
          <TouchableOpacity>
            <Image source={ Images.profilePic } style={ styles.profileImg } />
          </TouchableOpacity>
        }
      />
      <View style={ { flexDirection: 'row', marginHorizontal: ScaleWidth(20), justifyContent: 'space-between', alignItems: 'center' } }>
        <Text style={ styles.all }>{ translate(`All (${number})`) }</Text>
        <TouchableOpacity>
          <Text style={ styles.deleteall }> { translate("Delete All")}</Text>
        </TouchableOpacity>
      </View>


      < FlatList
        data={ notfication_arr }
        contentContainerStyle={ {
          marginTop: ScaleHeight(20),
          marginHorizontal: ScaleWidth(20)
        } }
        showsVerticalScrollIndicator={ false }
        keyExtractor={ (item, index) => `pro-${index}` }
        renderItem={ ({ item, index }) => {
          return (
            <View style={ styles.notcard }>
              <View style={ { flexDirection: 'row', flex: 1 } }>

                <SVGNotificationicon />

                <View style={ { marginStart: 10 } }>
                  <Text style={ [ styles.txt, ] }> {item.text }</Text>
                  <View style={ { flexDirection: 'row', alignItems: 'center', marginTop: ScaleHeight(5) } }>
                    <SVGTime />
                    <Text style={ { fontSize: ScaleWidth(14), marginStart: 10, color: Colors.extraGreyColor } }>{ item.date }</Text>
                  </View>
                </View>
              </View>
            </View>
          )

        } }>
      </FlatList>



    </ScreenContainer>
  );
};

export default NotificationScreen;
