import React from "react";
import { Text, StatusBar, Image } from "react-native";
import styles from "./styles";
import ScreenNames from "navigation/ScreenNames";
import { ScreenContainer } from "components";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { setIsSkip } from "store/slices/authSlice";
import i18n from "language/i18n";
import { Images } from "common";

const SplashScreen = ({ navigation }) => {
  const { isSkip, token, appLang } = useSelector((state) => state.auth);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  React.useEffect(() => {
    // dispatch(setIsSkip(false));
    if (appLang == "en") {
      i18n.changeLanguage("en");
      console.log("EN");
    } else {
      i18n.changeLanguage("ar");
      console.log("AR");
    }

    setTimeout(() => {
      console.log("isSkip :: ", isSkip);
      if (token) {
        navigation.navigate(ScreenNames.BottomTabs);
      } else {
        if (isSkip) {
          navigation.navigate(ScreenNames.Login);
        } else {
          navigation.navigate(ScreenNames.Onboarding);
        }
      }
    }, 1000);
  }, []);

  return (
    <ScreenContainer style={ styles.container } isDarkStatusBar={ false }>
      <Image source={ Images.logo } style={ styles.logo } />
    </ScreenContainer>
  );
};

export default SplashScreen;
