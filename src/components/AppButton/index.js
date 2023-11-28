import {
  TouchableOpacity,
  ActivityIndicator,
  View,
  Text,
  I18nManager,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { Colors } from "common";

const AppButton = ({
  btnStyle,
  isLeftIcon = false,
  icon,
  title,
  loading,
  disactive,
  titleStyle,
  onPress,
}) => {
  const renderButtonTitle = () => {
    return loading ? (
      <ActivityIndicator size={"small"} color={Colors.whiteColor} />
    ) : isLeftIcon ? (
      <Text style={[styles.btnTxt, titleStyle]}>{title}</Text>
    ) : (
      <View style={styles.rowStart}>
        {icon}
        <Text style={[styles.btnTxt, titleStyle]}>{title}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={[styles.btnContainer, btnStyle]}
      disabled={loading || disactive}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.rowBetween}>
        <View />
        {renderButtonTitle()}
        {isLeftIcon ? (
          <View
            style={{
              transform: I18nManager.isRTL ? [{ scaleX: -1 }] : [{ scaleX: 1 }],
            }}
          >
            {icon}
          </View>
        ) : (
          <View />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;
