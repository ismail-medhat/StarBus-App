import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  I18nManager,
} from "react-native";
import styles from "./styles";
import { AppButton, AppHeader, ScreenContainer } from "components";
import { Images } from "common";
import { translate } from "utils";
import {
  SVGArabic,
  SVGDocument,
  SVGEnglish,
  SVGHeadphone,
  SVGLocation,
  SVGRightArrow,
  SVGSetting,
  SVGTask,
  SVGTaskSquare,
} from "assets/Svg";
import SVGGlobal from "assets/Svg/SVGGlobal";
import { useSelector, useDispatch } from "react-redux";
import { CommonActions, useNavigation } from "@react-navigation/native";
import ScreenNames from "navigation/ScreenNames";
import { logoutUser } from "store/slices/authSlice";
const ProfileScreen = () => {
  const { appLang, userData } = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const profileList = [
    {
      id: 1,
      leftIcon: <SVGDocument />,
      title: translate("About us"),
      onPress: () => {},
    },
    {
      id: 2,
      leftIcon: <SVGGlobal />,
      title: translate("Language"),
      onPress: () => {
        navigation.navigate(ScreenNames.LanguageScreen);
      },
      customRight:
        appLang == "en" ? (
          <View style={styles.rowStart}>
            <SVGEnglish />
            <Text style={styles.btnCardTxt}>{"English"}</Text>
          </View>
        ) : (
          <View style={styles.rowStart}>
            <SVGArabic />
            <Text style={styles.btnCardTxt}>{"العربية"}</Text>
          </View>
        ),
    },
    {
      id: 3,
      leftIcon: <SVGHeadphone />,
      title: translate("Contact us"),
      onPress: () => {},
    },
    {
      id: 4,
      leftIcon: <SVGTaskSquare />,
      title: translate("Privacy Policy"),
      onPress: () => {},
    },
    {
      id: 5,
      leftIcon: <SVGTask />,
      title: translate("Terms and Conditions"),
      onPress: () => {},
    },
  ];

  const onLogoutPress = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.Splash }],
      })
    );
    dispatch(logoutUser());
  };

  const ProfileListCard = ({ list }) => {
    return (
      <TouchableOpacity
        onPress={list.onPress}
        activeOpacity={0.8}
        style={[styles.rowBetween, styles.btnCardBox]}
      >
        <View style={styles.rowStart}>
          {list.leftIcon}
          <Text style={styles.btnCardTxt}>{list.title}</Text>
        </View>
        {list.customRight ? (
          list.customRight
        ) : (
          <View
            style={{
              transform: I18nManager.isRTL ? [{ scaleX: -1 }] : [{ scaleX: 1 }],
            }}
          >
            <SVGRightArrow />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <ScreenContainer style={styles.container}>
      <AppHeader
        title={translate("Profile")}
        withRightIcon
        rightIcon={
          <TouchableOpacity>
            <Image source={Images.profilePic} style={styles.profileImg} />
          </TouchableOpacity>
        }
        customLeftIcon={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ScreenNames.ProfileSetting);
            }}
            style={styles.settingBox}
          >
            <SVGSetting />
          </TouchableOpacity>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileInfoBox}>
          <Image source={Images.profilePic} style={styles.bigProfileImg} />
          <Text style={styles.profileNameTxt}>{userData?.name}</Text>
          <View style={styles.rowStart}>
            <SVGLocation />
            <Text style={styles.profileLocTxt}>
              {userData?.address ?? "Egypt, Giza"}
            </Text>
          </View>
        </View>

        {profileList.map((list) => (
          <ProfileListCard list={list} />
        ))}

        <AppButton
          btnStyle={{}}
          title={translate("Logout")}
          onPress={onLogoutPress}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default ProfileScreen;
