import { ActivityIndicator, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Colors } from "common";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={Colors.primaryColor} />
    </View>
  );
};

export default Loader;
