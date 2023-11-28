import React, { useState } from "react";
import { View, TouchableOpacity, Image, Dimensions, Text } from "react-native";
import styles from "./styles";
import { AppButton, AppHeader, ScreenContainer } from "components";
import {
  SVGSave,
  SVGArabic,
  SVGEnglish,
  SVGTrue,
  SVGChecked,
  SVGUnchecked,
} from "assets/Svg";
import { translate } from "utils";
import { Colors, Fonts, Images, ScaleHeight, ScaleWidth } from "common";
import { useForm } from "react-hook-form";
import { useCurrentLangSelector } from "store/slices/authSlice";
import useChangeLang from "hooks/useChangeLang";

const LanguageScreen = () => {
  const currentLang = useCurrentLangSelector();
  const { onChangeLangPress } = useChangeLang();
  const [lang, setLang] = useState(currentLang);

  return (
    <ScreenContainer style={styles.container}>
      <AppHeader title={translate("Language")} />

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.rowBetween}
        onPress={() => setLang("en")}
      >
        <View style={styles.rowStart}>
          {lang == "en" ? <SVGChecked /> : <SVGUnchecked />}
          <View style={{ marginLeft: 15 }}>
            <SVGEnglish />
          </View>
          <Text style={styles.entxt}>{translate("English")}</Text>
        </View>
        {lang == "en" && <SVGTrue />}
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.rowBetween}
        onPress={() => setLang("ar")}
      >
        <View style={styles.rowStart}>
          {lang == "ar" ? <SVGChecked /> : <SVGUnchecked />}
          <View style={{ marginLeft: 15 }}>
            <SVGArabic />
          </View>
          <Text style={styles.entxt}>{translate("Arabic")}</Text>
        </View>
        {lang == "ar" && <SVGTrue />}
      </TouchableOpacity>

      <View style={{ flex: 1 }} />
      <AppButton
        title={translate("Save Changes")}
        icon={<SVGSave />}
        onPress={() => (currentLang != lang ? onChangeLangPress(lang) : {})}
      />
      <View style={{ height: 20 }} />
    </ScreenContainer>
  );
};

export default LanguageScreen;
