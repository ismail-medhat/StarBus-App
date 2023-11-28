import React, { useState, useEffect, useMemo, useCallback } from "react";
import { View, TouchableOpacity, Image, ScrollView, Text } from "react-native";
import styles from "./styles";
import {
  AppButton,
  AppHeader,
  ClickableInput,
  DatePicker,
  HorizontalCard,
  SearchOptionBottomSheet,
  ScreenContainer,
} from "components";
import { translate, width } from "utils";
import ScreenNames from "navigation/ScreenNames";
import { useNavigation } from "@react-navigation/native";
import { Colors, Fonts, Images, ScaleHeight, ScaleWidth } from "common";
import { SVGLocation, SVGPassangers, SVGSearch } from "assets/Svg";
import SVGCalendar from "assets/Svg/SVGCalendar";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getAllCities } from "store/slices";
import Toast from "react-native-toast-message";
const INITIAL_DATE = new Date();
const HomeScreen = ({ navigation }) => {
  const [openFromPlace, setOpenFromPlace] = useState(false);
  const [openToPlace, setOpenToPlace] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [fromPlace, setFromPlace] = useState(null);
  const [toPlace, setToPlace] = useState(null);
  const [activeCategory, setActiveCategory] = useState(1);
  const [tripDate, setTripDate] = useState(INITIAL_DATE);
  const { appLang } = useSelector((state) => state.auth);
  const { cityloading, allCities } = useSelector((state) => state.cities);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCities());
  }, []);
  const offerData = [
    {
      id: 1,
      img: Images.offerImg,
    },
    {
      id: 2,
      img: Images.offerImg,
    },
  ];
  const bookedData = [
    {
      id: 3,
      img: Images.offerImg,
    },
    {
      id: 4,
      img: Images.offerImg,
    },
  ];

  const categoryList = [
    {
      id: 1,
      title: translate("Travel Rides"),
      logo: Images.driveWeal,
    },
    {
      id: 2,
      title: translate("Private Rides"),
      logo: Images.driveWeal,
    },
    {
      id: 3,
      title: translate("Shipping"),
      logo: Images.driveWeal,
    },
    {
      id: 4,
      title: translate("Business Rides"),
      logo: Images.driveWeal,
    },
  ];

  return (
    <ScreenContainer style={styles.container}>
      <AppHeader
        hideBack
        title={translate("Home")}
        withRightIcon
        rightIcon={
          <TouchableOpacity>
            <Image source={Images.profilePic} style={styles.profileImg} />
          </TouchableOpacity>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.categoryContainer}>
          {categoryList?.map((category) => {
            return (
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                activeOpacity={0.8}
                style={styles.categoryItemBox}
              >
                <View
                  style={[
                    styles.categoryImgBox,
                    activeCategory == category?.id
                      ? {
                          borderWidth: ScaleWidth(2),
                          borderColor: Colors.primaryColor,
                        }
                      : {},
                  ]}
                >
                  <Image
                    resizeMode="contain"
                    source={category.logo}
                    style={{}}
                  />
                </View>

                <Text numberOfLines={2} style={styles.cardTitleTxt}>
                  {category.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{ alignSelf: "center" }}>
          <ClickableInput
            leftIcon={<SVGLocation />}
            title={translate("From")}
            placeholderTxt={translate("Choose Place")}
            onPress={() => setOpenFromPlace(true)}
            inputval={
              fromPlace
                ? appLang == "en"
                  ? fromPlace?.name
                  : fromPlace?.name_ar
                : ""
            }
          />

          <ClickableInput
            leftIcon={<SVGLocation />}
            title={translate("To")}
            placeholderTxt={translate("Choose Place")}
            onPress={() => setOpenToPlace(true)}
            inputval={
              toPlace
                ? appLang == "en"
                  ? toPlace?.name
                  : toPlace?.name_ar
                : ""
            }
            // disabled={!fromPlace}
          />

          <ClickableInput
            leftIcon={<SVGCalendar />}
            title={translate("Date")}
            placeholderTxt={translate("Enter Date")}
            onPress={() => setOpenDate(true)}
            inputval={moment(tripDate).format("DD-MM-YYYY") ?? ""}
          />
        </View>

        <AppButton
          btnStyle={styles.searchBtn}
          title={translate("Search")}
          icon={<SVGSearch />}
          onPress={() => {
            if (!fromPlace?.id) {
              Toast.show({
                type: "error",
                text1: "select city from",
              });
            }
            if (!toPlace?.id) {
              Toast.show({
                type: "error",
                text1: "select city to go",
              });
            } else {
              navigation.navigate(ScreenNames.TripsScreen, {
                from: fromPlace.id,
                to: toPlace.id,
                date: moment(tripDate).format("YYYY-MM-DD"),
              });
            }
          }}
        />
        <HorizontalCard
          headerTitle={translate("Offers")}
          cardList={offerData}
        />
        <HorizontalCard
          headerTitle={translate("Recent Booked")}
          cardList={bookedData}
          cardContainerStyle={{ paddingBottom: 50 }}
        />
      </ScrollView>

      <SearchOptionBottomSheet
        isOpen={openFromPlace}
        onClose={() => setOpenFromPlace(false)}
        listTitle={translate("Choose Your Start Place")}
        onSelectOption={(item) => setFromPlace(item)}
        listData={allCities}
        loading={cityloading}
      />

      <SearchOptionBottomSheet
        isOpen={openToPlace}
        onClose={() => setOpenToPlace(false)}
        listTitle={translate("Choose Your End Place")}
        onSelectOption={(item) => setToPlace(item)}
        listData={allCities}
        loading={cityloading}
      />

      <DatePicker
        isOpen={openDate}
        onClose={() => setOpenDate(false)}
        onSubmit={(date) => setTripDate(date)}
        currentDate={tripDate}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;
