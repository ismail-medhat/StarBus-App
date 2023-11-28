import { TouchableOpacity, View, Text, FlatList, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { ScaleWidth } from "common";
import { translate } from "utils";

const HorizontalCard = ({
  cardList,
  headerTitle,
  cardContainerStyle,
  onPress,
}) => {
  const renderOfferItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.8} style={[styles.cardContainer]}>
        <Image style={[styles.cardImg]} source={item.img} resizeMode="cover" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={cardContainerStyle}>
      <View style={[styles.rowHeader]}>
        <Text style={[styles.headerTitle]}>{headerTitle}</Text>
        <Text style={styles.headerSeemoreTxt}>{translate("See more")}</Text>
      </View>
      <FlatList
        data={cardList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderOfferItem}
        contentContainerStyle={{ paddingStart: ScaleWidth(20) }}
      />
    </View>
  );
};

export default HorizontalCard;
