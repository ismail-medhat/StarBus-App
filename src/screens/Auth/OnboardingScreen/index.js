import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./styles";
import ScreenNames from "navigation/ScreenNames";
import { Colors, Images } from "common";
import { useDispatch, useSelector } from "react-redux";
import { AppButton, ScreenContainer, UnderlineButton } from "components";
import { useTranslation } from "react-i18next";
import { setIsSkip } from "store/slices/authSlice";
import { SVGArabic, SVGDownArrow, SVGEnglish, SVGLogin } from "assets/Svg";
import useChangeLang from "hooks/useChangeLang";

const slides = [
  {
    id: 1,
    name: "Define & Choose your way with us.",
    name_ar: "حدد واختر طريقك معنا.",
    image: Images.introSlider1,
  },
  {
    id: 2,
    name: "Select Your Chair in your trip.",
    name_ar: "حدد كرسيك في رحلتك.",
    image: Images.introSlider2,
  },
  {
    id: 3,
    name: "We have many payment methods.",
    name_ar: "لدينا العديد من طرق الدفع.",
    image: Images.introSlider3,
  },
  {
    id: 4,
    name: "Relax, your bus will coming from you.",
    name_ar: "استرخ، الحافلة الخاصة بك سوف تأتي منك.",
    image: Images.introSlider4,
  },
];

const OnboardingScreen = ({ navigation }) => {
  const { appLang } = useSelector((state) => state.auth);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { onChangeLangPress } = useChangeLang();

  const toggleModal = () => {
    console.log("first");
    setModalVisible(!isModalVisible);
  };

  const handleScroll = (event) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const index = Math.floor(contentOffset.x / layoutMeasurement.width);
    if (index == -1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const renderSliderItem = ({ item }) => {
    return (
      <View style={styles.slideContainer}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={styles.imgSlider}
        />
        <Text numberOfLines={2} style={styles.sliderTitle}>
          {appLang === "en" ? item.name : item.name_ar}
        </Text>
      </View>
    );
  };

  const renderPaginationBollets = useMemo(() => {
    return slides.map((_, index) => (
      <View
        key={index}
        style={[
          styles.paginationDot,
          {
            backgroundColor:
              index === currentIndex ? Colors.primaryColor : Colors.greyColor,
          },
        ]}
      />
    ));
  }, [currentIndex]);

  const onLoginPress = () => {
    navigation.replace(ScreenNames.Login);
    dispatch(setIsSkip(true));
  };
  const onSignupPress = () => {
    navigation.replace(ScreenNames.Signup);
    dispatch(setIsSkip(true));
  };

  const LanguageDropdownModal = ({ isVisible, onClose }) => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.modalBox}>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={{ padding: 15 }}
                onPress={() => {
                  onChangeLangPress(appLang === "en" ? "ar" : "en");
                  onClose();
                }}
              >
                <Text>{appLang === "en" ? "العربية" : "English"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.innerContainer}>
        <>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={toggleModal} style={styles.btnBox}>
              <View style={styles.rowStart}>
                {appLang === "en" ? (
                  <>
                    <SVGEnglish width={24} height={24} />
                    <Text style={styles.btnTxt}>{"English"}</Text>
                  </>
                ) : (
                  <>
                    <SVGArabic width={24} height={24} />
                    <Text style={styles.btnTxt}>{"العربية"}</Text>
                  </>
                )}
              </View>
              <SVGDownArrow />
            </TouchableOpacity>

            <LanguageDropdownModal
              onClose={() => setModalVisible(false)}
              isVisible={isModalVisible}
            />
          </View>
          <FlatList
            data={slides}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderSliderItem}
            onScroll={(event) => handleScroll(event)}
          />
          <View style={styles.pagination}>{renderPaginationBollets}</View>
        </>
      </View>
      <View style={styles.bottomContainer}>
        <AppButton
          btnStyle={styles.nextBtn}
          title={t("Login With Phone Number")}
          // isLeftIcon={true}
          icon={<SVGLogin />}
          onPress={onLoginPress}
        />
        <UnderlineButton
          title={t("create New Account?")}
          btnStyle={styles.accountBtnStyle}
          onPress={onSignupPress}
        />
      </View>
    </ScreenContainer>
  );
};

export default OnboardingScreen;
