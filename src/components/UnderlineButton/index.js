import { TouchableOpacity, ActivityIndicator, View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Colors } from "common";

const UnderlineButton = ({
  btnStyle,
  title,
  loading,
  disactive,
  titleStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, btnStyle]}
      disabled={loading || disactive}
      activeOpacity={0.8}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size={"small"} color={Colors.whiteColor} />
      ) : (
        <Text style={[styles.btnTxt, titleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default UnderlineButton;
