// BottomTabNavigator.tsx

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  MyTicketScreen,
  NotificationScreen,
  ProfileScreen,
} from "../screens";
import ScreenNames from "./ScreenNames";
import { StyleSheet, View, Text, Platform } from "react-native";
import { Colors, ScaleHeight, ScaleWidth } from "common";
import {
  SVGActiveHome,
  SVGActiveNotify,
  SVGActiveProfile,
  SVGActiveTicket,
  SVGInactiveHome,
  SVGInactiveNotify,
  SVGInactiveProfile,
  SVGInactiveTicket,
} from "assets/Svg";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={ ({ route }) => ({
        tabBarLabel: ({ focused }) => {
          return (
            <View>
              <Text
                style={ [
                  styles.tabBarName,
                  {
                    color: focused
                      ? Colors.primaryColor
                      : Colors.extraGreyColor,
                  },
                ] }
              >
                { route.name }
              </Text>
            </View>
          );
        },
        tabBarIcon: ({ focused }) => {
          let IconName;
          if (route.name === ScreenNames.Home) {
            IconName = focused ? <SVGActiveHome /> : <SVGInactiveHome />;
          } else if (route.name === ScreenNames.MyTickets) {
            IconName = focused ? <SVGActiveTicket /> : <SVGInactiveTicket />;
          } else if (route.name === ScreenNames.Notification) {
            IconName = focused ? <SVGActiveNotify /> : <SVGInactiveNotify />;
          } else if (route.name === ScreenNames.Profile) {
            IconName = focused ? <SVGActiveProfile /> : <SVGInactiveProfile />;
          }
          return IconName;
        },
        headerShown: false,
        tabBarStyle: styles.tapStyles,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }) }
    >
      <Tab.Screen name={ ScreenNames.Home } component={ HomeScreen } />
      <Tab.Screen name={ ScreenNames.MyTickets } component={ MyTicketScreen } />
      <Tab.Screen
        name={ ScreenNames.Notification }
        component={ NotificationScreen }
      />
      <Tab.Screen name={ ScreenNames.Profile } component={ ProfileScreen } />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tapStyles: {
    justifyContent: "center",
    alignItems: "center",
    height: ScaleHeight(80),
    width: ScaleWidth("100%"),
    borderTopWidth: 0,
    backgroundColor: Colors.whiteColor,
    borderTopWidth: 0,
    shadowColor: Colors.blackColor,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderTopRightRadius: ScaleWidth(15),
    borderTopLeftRadius: ScaleWidth(15),
  },
  tabBarItemStyle: {
    top: 15,
    height: 45,
  },
  tabBarLabelStyle: {
    bottom: 10,
  },
  tabBarName: {
    fontSize: 12,
    paddingTop: Platform.OS === "ios" ? ScaleHeight(2) : 0,
    marginBottom: Platform.OS === "android" ? ScaleHeight(14) : 0,
  },
});
