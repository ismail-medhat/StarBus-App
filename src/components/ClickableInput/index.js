import { TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { SVGDownArrow } from "assets/Svg";

const ClickableInput = ({
  outSideBoxStyle,
  titleTxtStyle,
  inputBoxStyle,
  title,
  placeholderTxt,
  inputval = "",
  withDropDownIcon = true,
  leftIcon,
  onPress,
  disabled = false,
}) => {
  return (
    <View style={[styles.globalContainer, outSideBoxStyle]}>
      <Text style={[styles.titleTxt, titleTxtStyle]}>{title}</Text>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        activeOpacity={0.8}
        style={[styles.inputBox, inputBoxStyle]}
      >
        <View style={styles.rowStart}>
          {leftIcon}
          {inputval.length > 0 ? (
            <Text style={styles.inputValtxt}>{inputval}</Text>
          ) : (
            <Text style={styles.placeholderTxt}>{placeholderTxt}</Text>
          )}
        </View>
        {withDropDownIcon && <SVGDownArrow />}
      </TouchableOpacity>
    </View>
  );
};

export default ClickableInput;
