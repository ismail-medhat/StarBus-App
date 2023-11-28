import React, { useState } from "react";
import { View, Image } from "react-native";
import { useCurrentLangSelector } from "../../../store/slices/authSlice";
import { AppHeader, ScreenContainer } from "components";
import { translate } from "utils";
import { PhoneNumberInput, UnderlineButton, AppButton } from "components";
import ScreenNames from "navigation/ScreenNames";
import styles from "./styles";
import { SVGKeySquare } from "assets/Svg";

const ForgetPasswordScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");

  return (
    <ScreenContainer>
      <AppHeader title={translate("Forget Password")} />

      <Image
        source={require("../../../assets/images/forgetPass.png")}
        style={styles.img}
      />
      <PhoneNumberInput value={phone} onChangeText={(val) => setPhone(val)} />

      <AppButton
        btnStyle={{}}
        title={translate("Recovery Password")}
        icon={<SVGKeySquare />}
        onPress={() => {}}
      />

      <UnderlineButton
        title={translate("Login")}
        btnStyle={{ marginTop: 50 }}
        onPress={() => navigation.navigate(ScreenNames.Login)}
      />
    </ScreenContainer>
  );
};

export default ForgetPasswordScreen;
