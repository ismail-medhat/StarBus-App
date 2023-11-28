import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { SVGDownArrow, SVGArFlag } from "assets/Svg";
import { translate } from "../../utils";

const PhoneNumberInput = ({
  value,
  onChangeText = (text) => {},
  isHaveError = false,
  errorTxt = "",
  containerStyle,
}) => {
  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{translate("Mobile Number")}</Text>
      <View style={styles.inputContainer}>
        <SVGArFlag />
        <View style={{ width: 8 }} />
        <Text style={styles.codeText}>+20</Text>
        <SVGDownArrow />
        <TouchableOpacity style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholderTextColor={"#787878"}
            placeholder={translate("Enter your number")}
            value={value}
            keyboardType="phone-pad"
            onChangeText={onChangeText}
          />
        </TouchableOpacity>
      </View>

      {isHaveError && <Text style={styles.errorText}>{errorTxt}</Text>}
    </View>
  );
};

export default PhoneNumberInput;
