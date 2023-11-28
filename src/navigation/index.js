import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';

import ScreenNames from "./ScreenNames";
import {
  LoginScreen,
  OnboardingScreen,
  SplashScreen,
  OtpScreen,
  ForgetPasswordScreen,
  TripScreen,
  PaymentScreen,
  SignUpScreen,
  CongratulationScreen,
  SeatsScreen,
  ChooseStationScreen,
  TicketDetailsScreen,
  MyTicketScreen,
  ProfileSetting,
  LanguageScreen,
  NotificationScreen,
} from "screens";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <>
      <StatusBar translucent backgroundColor={ 'transparent' } barStyle={ 'dark-content' } />
      <NavigationContainer >
        <Stack.Navigator
          initialRouteName={ ScreenNames.Splash }
          screenOptions={ { headerShown: false } }
        >
          <Stack.Screen name={ ScreenNames.Splash } component={ SplashScreen } />
          <Stack.Screen name={ ScreenNames.Onboarding } component={ OnboardingScreen } />
          <Stack.Screen name={ ScreenNames.Login } component={ LoginScreen } />
          <Stack.Screen name={ ScreenNames.Signup } component={ SignUpScreen } />
          <Stack.Screen name={ ScreenNames.Otp } component={ OtpScreen } />
          <Stack.Screen name={ ScreenNames.ForgetPassword } component={ ForgetPasswordScreen } />
          <Stack.Screen name={ ScreenNames.ChooseStationScreen } component={ ChooseStationScreen } />
          <Stack.Screen name={ ScreenNames.TripsScreen } component={ TripScreen } />
          <Stack.Screen name={ ScreenNames.payment } component={ PaymentScreen } />
          <Stack.Screen name={ ScreenNames.congratulation } component={ CongratulationScreen } />
          <Stack.Screen name={ ScreenNames.SeatsScreen } component={ SeatsScreen } />
          <Stack.Screen name={ ScreenNames.TicketDetailsScreen } component={ TicketDetailsScreen } />
          <Stack.Screen name={ ScreenNames.MyTickets } component={ MyTicketScreen } />
          <Stack.Screen name={ ScreenNames.ProfileSetting } component={ ProfileSetting } />
          <Stack.Screen name={ ScreenNames.LanguageScreen } component={ LanguageScreen } />
          <Stack.Screen name={ ScreenNames.Notification } component={ NotificationScreen } />
          <Stack.Screen
            name={ ScreenNames.BottomTabs }
            component={ BottomTabNavigator }
          />
        </Stack.Navigator>
      </NavigationContainer></>
  );
};

export default AppNavigator;
