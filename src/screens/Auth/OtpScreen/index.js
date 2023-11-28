import React from "react";
import { OtpForm } from "components/otp";
import { View, Text, TouchableOpacity } from "react-native";
import { AppHeader, ScreenContainer } from "components";
import { translate } from "utils";

const OtpScreen = ({ route, navigation }) => {

  return (
    <ScreenContainer>
      <View style={ { backgroundColor: '#fff', flex: 1 } }>
        <AppHeader title={ translate('verification') } />
        <OtpForm phone={ route.params.phone } />
      </View>
    </ScreenContainer>
  );
};

export default OtpScreen;
