import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  Text,
  PermissionsAndroid,
  Platform,
  Linking,
} from "react-native";
import styles from "./styles";
import { AppButton, AppHeader, ScreenContainer } from "components";
import { Colors, Fonts, Images, ScaleHeight, ScaleWidth } from "common";
import {
  SVGCirclePlace,
  SVGClock,
  SVGDownload,
  SVGError,
  SVGOrangeDashLine,
} from "assets/Svg";
import { Circle, Path, Svg } from "react-native-svg";
import ViewShot from "react-native-view-shot";
import Toast from "react-native-toast-message";
import { useSelector, useDispatch } from "react-redux";
import { getTicketInfo } from "store/slices";
import { useFocusEffect } from "@react-navigation/native";
import RNFS from "react-native-fs";
import moment from "moment";
import Share from "react-native-share";
import { useTranslation } from "react-i18next";
const TicketDetailsScreen = ({ navigation }) => {
  const randomTicketNo = Math.floor(Math.random() * 301);
  const [androidGranted, setAndroidGranted] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);
  const { ticketloading, ticketInfo } = useSelector((state) => state.ticket);
  const { appLang } = useSelector((state) => state.auth);
  const shotRef = useRef();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isIOS = Platform.OS === "ios" ? true : false;

  useFocusEffect(
    React.useCallback(() => {
      console.log("Screen is focused.");
      const formData = new FormData();
      formData.append("uuid", "bebf5d3f-290f-4967-a9e5-f56d04c114f2");
      dispatch(getTicketInfo(formData));
    }, [])
  );

  const requestPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      const granted2 = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );
      if (
        granted === PermissionsAndroid.RESULTS.GRANTED &&
        granted2 === PermissionsAndroid.RESULTS.GRANTED
      ) {
        setAndroidGranted(true);
        onDownloadTicket();
      } else {
        setAndroidGranted(false);
        Alert.alert(
          "Permission Denied!",
          "You need to give storage permission to download the file"
        );
      }
    } catch (err) {
      console.warn(err);
      setAndroidGranted(false);
    }
  };

  const checkTicketDownloadPermission = () => {
    if (isIOS) {
      onDownloadTicket();
    } else {
      if (androidGranted) {
        onDownloadTicket();
      } else {
        requestPermissionAndroid();
      }
    }
  };

  const onDownloadTicket = async () => {
    try {
      setDownloadLoading(true);
      const uri = await shotRef?.current?.capture({
        format: "png",
        quality: 0.8,
      });

      console.log("uri ==> ", uri);
      const currentDate = moment().format("YYYY-MM-DD");
      const randomString = Math.random().toString(36).substring(2, 8);
      const ticketName = `startbusTicket_${currentDate}_${randomString}.png`;

      const PlatformDir = isIOS
        ? RNFS.DocumentDirectoryPath
        : RNFS.DownloadDirectoryPath;
      const imagePath = PlatformDir + `/${ticketName}`;
      const imageUrl = isIOS ? `file://${uri}` : uri;

      await moveImageToDownloadPath(imageUrl, imagePath);
    } catch (error) {
      setDownloadLoading(false);
      console.log("Error while generating image ticket  : ", error);
    }
  };

  const moveImageToDownloadPath = async (cacheImagePath, downloadPath) => {
    try {
      // Check if the file exists in the cache directory
      const cacheFileExists = await RNFS.exists(cacheImagePath);

      if (cacheFileExists) {
        // Move the file to the download path
        await RNFS.moveFile(cacheImagePath, downloadPath);
        console.log("Image moved to:", downloadPath);

        await Toast.show({
          type: "success",
          text1: "Ticket download successfully",
        });
        setDownloadLoading(false);
        setTimeout(async () => {
          await Share.open({
            url: `file://${downloadPath}`,
            type: "image/png",
          });
        }, 100);
      } else {
        console.log("Cache file does not exist:", cacheImagePath);
        Toast.show({
          type: "error",
          text1: "Ticket download Failed",
        });
      }
    } catch (error) {
      console.error("Error moving image:", error);
      setDownloadLoading(false);
    }
  };

  return (
    <ScreenContainer style={styles.container}>
      <AppHeader style={{ paddingTop: 1 }} title={t("Your Ticket")} />

      {ticketloading ? (
        <ActivityIndicator size={"large"} color={Colors.blackColor} />
      ) : (
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[styles.busBox, styles.rowBetween]}>
              <View>
                <Text style={styles.busTitleTxt}>{t("Bus Name")}</Text>
                <Text style={styles.busvalTxt}>
                  {ticketInfo?.bus?.plate_name}
                </Text>
                <Text style={styles.busTitleTxt}>{t("Bus No.")}</Text>
                <Text style={styles.busvalTxt}>
                  {ticketInfo?.bus?.plate_number}
                </Text>
              </View>
              <Image
                style={styles.busImgStyle}
                source={Images.busImg}
                resizeMode="contain"
              />
            </View>

            <ViewShot
              ref={shotRef}
              style={{ backgroundColor: "#FFF", paddingTop: ScaleHeight(20) }}
            >
              <MainViewSvg style={styles.ticketBox}>
                <View style={styles.rowBetween}>
                  <View style={styles.rowStart}>
                    <Image
                      style={styles.passengerImg}
                      source={Images.profilePic}
                      resizeMode="contain"
                    />
                    <View>
                      <Text style={styles.ticketSTitle}>
                        {t("Passenger Name:")}
                      </Text>
                      <Text style={styles.ticketBlackTxt}>
                        {appLang == "en"
                          ? ticketInfo?.captain_name?.fullname
                          : ticketInfo?.captain_name?.fullname_ar}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.ticketSTitle}>{"Total:"}</Text>
                    <Text
                      style={styles.ticketOrangeTxt}
                    >{`${ticketInfo?.route_price} LE`}</Text>
                  </View>
                </View>

                <View style={{ height: ScaleHeight(70) }} />

                <View style={styles.rowBetween}>
                  <Text style={styles.ticketGreyTxt}>{t("From")}</Text>
                  <Text style={styles.ticketGreyTxt}>{t("To")}</Text>
                </View>
                <View style={styles.rowBetween}>
                  <Text style={styles.ticketBlackTxt}>
                    {appLang == "en"
                      ? ticketInfo?.fromCity?.name
                      : ticketInfo?.fromCity?.name_ar}
                  </Text>
                  <View style={styles.rowStart}>
                    <SVGCirclePlace />
                    <SVGOrangeDashLine />
                    <SVGCirclePlace />
                  </View>
                  <Text style={styles.ticketBlackTxt}>
                    {appLang == "en"
                      ? ticketInfo?.toCity?.name
                      : ticketInfo?.toCity?.name_ar}
                  </Text>
                </View>
                <View style={[styles.rowBetween, { paddingVertical: 10 }]}>
                  <View />
                  <View style={styles.rowStart}>
                    <SVGClock />
                    <Text style={styles.ticketBlackSTxt}>
                      {ticketInfo?.time}
                    </Text>
                  </View>
                  <View />
                </View>
                <View style={styles.rowBetween}>
                  <Text style={styles.ticketGreyTxt}>{t("Date")}</Text>
                  <Text style={styles.ticketGreyTxt}>{t("Seats")}</Text>
                </View>
                <View style={styles.rowBetween}>
                  <Text style={styles.ticketOrangeTxt}>
                    {moment(ticketInfo?.date).format("DD MMM, ddd")}
                  </Text>
                  <Text style={styles.ticketOrangeTxt}>
                    {ticketInfo?.booking_seats &&
                      Object.keys(JSON.parse(ticketInfo?.booking_seats)).join(
                        ","
                      )}
                  </Text>
                </View>

                <View style={{ height: ScaleHeight(70) }} />

                <View
                  style={[
                    styles.rowBetween,
                    { paddingTop: Platform.OS == "ios" ? ScaleHeight(30) : 0 },
                  ]}
                >
                  <View>
                    <Text style={styles.ticketGreyTxt}>{t("Passengers")}</Text>
                    <Text
                      style={styles.ticketBlackTxt}
                    >{`${ticketInfo?.passengers} Adult`}</Text>
                    <Text style={styles.ticketGreyTxt}>{t("Ticket No.")}</Text>
                    <Text style={styles.ticketBlackTxt}>
                      {ticketInfo?.ticket_number}
                    </Text>
                    <Text style={styles.ticketGreyTxt}>{t("Booking No.")}</Text>
                    <Text style={styles.ticketBlackTxt}>
                      {ticketInfo?.invoice_number}
                    </Text>
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    <Text style={styles.ticketNoTxt}>{t("Ticket No.")}</Text>
                    <Text style={styles.ticketNoValueTxt}>
                      {ticketInfo?.ticket_number}
                    </Text>
                  </View>
                </View>
              </MainViewSvg>
              <View
                style={{
                  width: ScaleWidth("90%"),
                  alignSelf: "center",
                }}
              >
                <View style={[styles.rowStart]}>
                  <SVGError style={{ marginTop: 2 }} />
                  <Text style={styles.errorText}>
                    {t("You can get your tickets from the bus station .")}
                  </Text>
                </View>
              </View>
            </ViewShot>
            <AppButton
              btnStyle={{
                marginBottom: ScaleHeight("9%"),
              }}
              title={t("Download Ticket")}
              icon={<SVGDownload />}
              onPress={checkTicketDownloadPermission}
              loading={downloadLoading}
            />
          </ScrollView>
        </View>
      )}
    </ScreenContainer>
  );
};

export default TicketDetailsScreen;

const MainViewSvg = ({ children }) => {
  const screenWidth = Dimensions.get("screen").width;

  const boxWidth = ScaleWidth(24);
  const spacing = ScaleWidth(10);
  const margin = ScaleWidth(40);
  const availableWidth = screenWidth - margin;
  const totalBoxes = Math.floor(availableWidth / (boxWidth + spacing));
  const restWidth =
    availableWidth - totalBoxes * boxWidth - (totalBoxes - 1) * spacing;

  const totalMiddleCircles = Math.floor(
    (availableWidth - ScaleWidth(163)) / ScaleWidth(8 + 9)
  );
  const restWidthForCircles =
    availableWidth - ScaleWidth(163) - ScaleWidth(8 + 9) * totalMiddleCircles;

  const circlesTop = Array.from(Array(totalBoxes)).map((_, i) => [
    `a 0 0 0 0 0 ${ScaleWidth(12)} ${ScaleWidth(12)} `,
    `a 0 0 0 0 0 ${ScaleWidth(12)} -${ScaleWidth(12)} `,
    `h ${ScaleWidth(i + 1 < totalBoxes ? 10 : 0)}`,
  ]);

  const circlesBottom = Array.from(Array(totalBoxes)).map((_, i) => [
    `h ${-ScaleWidth(i > 0 ? 10 : 0)}`,
    `a 0 0 0 0 0 -${ScaleWidth(12)} -${ScaleWidth(12)} `,
    `a 0 0 0 0 0 -${ScaleWidth(12)} ${ScaleWidth(12)} `,
  ]);

  return (
    <Svg
      width={screenWidth}
      height={ScaleHeight(630)}
      viewBox={`0 0 ${screenWidth} ${ScaleHeight(630)}`}
    >
      <Path
        d={[
          `M ${ScaleWidth(20)} 1.2`,
          `h ${restWidth / 2}`,
          ...circlesTop,
          `h ${restWidth / 2}`,
          `v ${ScaleHeight(96)}`,
          `a 0 0 0 0 0 -${ScaleWidth(25)} ${ScaleWidth(25)} `,
          `a 0 0 0 0 0 ${ScaleWidth(25)} ${ScaleWidth(25)} `,
          `v ${ScaleHeight(183)}`,
          `a 0 0 0 0 0 -${ScaleWidth(25)} ${ScaleWidth(25)} `,
          `a 0 0 0 0 0 ${ScaleWidth(25)} ${ScaleWidth(25)} `,
          `v ${ScaleHeight(96 + 130)}`,
          `h -${restWidth / 2}`,
          ...circlesBottom, /////bottom
          `h -${restWidth / 2}`,
          `v -${ScaleHeight(96 + 130)}`,
          `a 0 0 0 0 0 ${ScaleWidth(25)} -${ScaleWidth(25)} `,
          `a 0 0 0 0 0 -${ScaleWidth(25)} -${ScaleWidth(25)} `,
          `v -${ScaleHeight(183)}`,
          `a 0 0 0 0 0 ${ScaleWidth(25)} -${ScaleWidth(25)} `,
          `a 0 0 0 0 0 -${ScaleWidth(25)} -${ScaleWidth(25)} `,
          `v -${ScaleHeight(96)}`,
        ].join(" ")}
        fill={"#fff"}
        stroke={"#E4E0E0"}
        strokeWidth={1.2}
      />

      {Array.from(Array(totalMiddleCircles)).map((_, i) => (
        <Circle
          cx={ScaleWidth(60 + restWidthForCircles / 2 + i * (9 + 2 * 9))}
          cy={ScaleHeight(96 + 25)}
          r={ScaleWidth(8)}
          fill={"#fff"}
          stroke={"#E4E0E0"}
          strokeWidth={1.2}
        />
      ))}

      {Array.from(Array(totalMiddleCircles)).map((_, i) => (
        <Circle
          cx={ScaleWidth(60 + restWidthForCircles / 2 + i * (9 + 2 * 9))}
          cy={ScaleHeight(96 + 138 + 120)}
          r={ScaleWidth(8)}
          fill={"#fff"}
          stroke={"#E4E0E0"}
          strokeWidth={1.2}
        />
      ))}

      <View
        style={{
          position: "absolute",
          top: ScaleHeight(35),
          right: ScaleWidth(40),
          left: ScaleWidth(40),
        }}
      >
        {children}
      </View>
    </Svg>
  );
};
