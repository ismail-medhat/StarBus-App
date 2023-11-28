import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { SVGDownArrow, SVGArFlag } from "assets/Svg";
import { ScaleWidth } from "common";

const Input = ({
  value,
  onChangeText = (text) => {},
  placeholderTxt = "",
  isHaveError = false,
  errorTxt = "",
  secureTextEntry = false,
  editable = true,
  leftIcon = null,
  rightIcon = null,
  onRightIconPress = () => {},
  label,
  containerStyle,
}) => {
  return (
    <View style={[{ marginHorizontal: ScaleWidth(20) }, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {leftIcon && leftIcon}
        <TouchableOpacity style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholderTextColor={"#787878"}
            placeholder={placeholderTxt}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
          />
          {rightIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.rightIcon}
              onPress={onRightIconPress}
            >
              {rightIcon}
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </View>

      {isHaveError && <Text style={styles.errorText}>{errorTxt}</Text>}
    </View>
  );
};

export default Input;
