import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { SVGBackArrow } from "assets/Svg";
import { useCurrentLangSelector } from "store/slices/authSlice";

const AppHeader = ({
  title,
  hideBack = false,
  withRightIcon = false,
  rightIcon,
  onPressBack,
  backgroundColor,
  titleColor,
  customLeftIcon,
}) => {
  const navigation = useNavigation();
  const lang = useCurrentLangSelector();

  return (
    <View
      style={[styles.container, { backgroundColor: backgroundColor || "#fff" }]}
    >
      {hideBack ? (
        <View style={styles.defaultArea} />
      ) : customLeftIcon ? (
        customLeftIcon
      ) : (
        <TouchableOpacity
          style={[
            styles.btn,
            {
              transform: [{ scaleX: lang == "ar" ? -1 : 1 }],
              backgroundColor: titleColor ? "#fff" : "#5A248D10",
            },
          ]}
          onPress={() => onPressBack || navigation.goBack()}
        >
          <SVGBackArrow />
        </TouchableOpacity>
      )}
      <Text style={[styles.txt, titleColor && { color: titleColor }]}>
        {title}
      </Text>
      {withRightIcon ? rightIcon : <View style={styles.defaultArea} />}
    </View>
  );
};

export default AppHeader;
