import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { AppHeader, ScreenContainer } from "components";
import { translate } from "utils";
import { Colors, Images, ScaleHeight, ScaleWidth } from "common";
import styles from "./styles";
import { Line, Path, Svg, SvgFromXml } from "react-native-svg";
import { TripCardSvg } from "components/TripsCard";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import ScreenNames from "navigation/ScreenNames";

const MyTicketScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <AppHeader
        hideBack
        title={translate("My Tickets")}
        withRightIcon
        rightIcon={
          <TouchableOpacity>
            <Image
              source={Images.profilePic}
              style={{ height: ScaleHeight(32), width: ScaleHeight(32) }}
            />
          </TouchableOpacity>
        }
      />
      <View style={styles.container}>
        <ScrollView
          stickyHeaderIndices={[2]}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, marginBottom: ScaleHeight(20) }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.rowStyle}>
            <Text style={styles.listTitle}>{translate("Coming Trips")} </Text>
            <TouchableOpacity>
              <Text style={styles.seeMoreTxt}>{translate("see more")}</Text>
            </TouchableOpacity>
          </View>

          <ComingTripCard />

          <>
            <View style={[styles.rowStyle]}>
              <Text lineBreakMode="false" style={styles.listTitle}>
                {translate("All Tickets")}{" "}
              </Text>
              <TouchableOpacity style={styles.svgBtn}>
                <SvgFromXml xml={editSvg} onPress={() => {}} />
              </TouchableOpacity>
            </View>
          </>

          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <>
                <Card
                  key={index}
                  onPress={() =>
                    navigation.navigate(ScreenNames.TicketDetailsScreen)
                  }
                  item={item}
                />
                {[1, 2, 3, 4, 5].length > index + 1 && (
                  <View style={{ height: ScaleHeight(16) }} />
                )}
              </>
            );
          })}
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

export default MyTicketScreen;

const ComingTripCard = ({ item }) => {
  return (
    <MainViewSvg>
      <View style={styles.CardContent}>
        <View style={styles.driverLogo}>
          <SvgFromXml xml={driverSvg} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={[styles.busNameLine]}>
            <View style={{ marginEnd: ScaleWidth(33) }}>
              <Text style={styles.busTxt}>{"Bus Name"}</Text>
              <Text style={styles.busTypTxt}>{"Bus Type"}</Text>
            </View>
            <View style={{}}>
              <Text style={styles.busTypTxt}>{translate("time")}</Text>
              <Text style={styles.statusText}>{"3 d 11h 45m 10s"}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }} />

      <View
        style={{
          flexDirection: "row",
          marginTop: ScaleHeight(20),
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.key}>{translate("From")}</Text>
          <Text style={styles.value}>{"Cairo"}</Text>
        </View>
        <View>
          <Text style={styles.key}>{translate("To")}</Text>
          <Text style={styles.value}>{"Asyut"}</Text>
        </View>
        <View>
          <Text style={styles.key}>{translate("Date")}</Text>
          <Text style={styles.value}>{"20 Oct, Wen"}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: ScaleHeight(20),
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.key}>{translate("Time")}</Text>
          <Text style={styles.value}>{"03:45 PM"}</Text>
        </View>
        <View>
          <Text style={styles.key}>{translate("Bus Num")}</Text>
          <Text style={styles.value}>{"1564"}</Text>
        </View>
        <View>
          <Text style={styles.key}>{translate("Passengers")}</Text>
          <Text style={styles.value}>{"3"}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: ScaleHeight(20),
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.key}>{translate("Ticket No")}</Text>
          <Text style={styles.value}>{"3265"}</Text>
        </View>

        <View>
          <Text style={styles.key}>{translate("Seats")}</Text>
          <Text style={styles.value}>{"1,2,3"}</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => console.log("first")}>
            <Text style={styles.key}> </Text>
            <Text style={styles.viewDetails}>{translate("View Details")}</Text>
            <View
              style={{
                borderBottomColor: Colors.primaryColor,
                borderBottomWidth: 1,
                width: 95,
                marginTop: -1.5,
              }}
            ></View>
          </TouchableOpacity>
        </View>
      </View>
    </MainViewSvg>
  );
};

const Card = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{}}>
      <TripCardSvg />

      <View style={styles.cardContentContainer}>
        <View style={styles.CardContent}>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.driverLogo}>
                <SvgFromXml xml={driverSvg} />
              </View>

              <View
                style={[
                  styles.busNameLine,
                  { justifyContent: "space-between", flex: 1 },
                ]}
              >
                <View>
                  <Text style={styles.busTxt}>{"Bus Name"}</Text>
                  <Text style={styles.busTypTxt}>{"Bus Type"}</Text>
                </View>
                <View>
                  <Text
                    style={[
                      styles.statusText,
                      { color: "#33A86D", textAlign: "right" },
                    ]}
                  >
                    {translate("Paid")}
                  </Text>
                  <Text
                    style={[
                      styles.busTypTxt,
                      {
                        color: Colors.primaryColor,
                        textDecorationLine: "underline",
                      },
                    ]}
                  >
                    {translate("View Details")}
                  </Text>
                </View>
              </View>
            </View>

            <View style={{ height: ScaleHeight(25) }} />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={styles.key}>{translate("Date")}</Text>
                <Text style={styles.value}>{"20 Oct, Wen"}</Text>
              </View>
              <View>
                <Text style={[styles.key, { marginEnd: ScaleWidth(30) }]}>
                  {translate("From")}
                </Text>
                <Text style={styles.value}>{"Cairo"}</Text>
              </View>
              <View>
                <Text style={styles.key}>{translate("To")}</Text>
                <Text style={styles.value}>{"Asyut"}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MainViewSvg = ({ children }) => {
  const screenWidth = Dimensions.get("screen").width;

  return (
    <Svg
      width={screenWidth + 2}
      height={ScaleHeight(306)}
      viewBox={`0 0 ${screenWidth + 2} ${ScaleHeight(306)}`}
    >
      <Path
        d={[
          `M ${ScaleWidth(20) + ScaleWidth(14)} 1.2`, //start from left 20 :top 1.2 as strokeWidth
          `h ${screenWidth - ScaleWidth(40) - ScaleWidth(28 - 6)}`, // continue horizontal to screenWidth - 40 - 28 ========>  40 = ( the total marginHorizontal 20x2) , 28 = (the total border curve 14 * 2)
          `a 0 0 0 0 1 ${ScaleWidth(14)} ${ScaleWidth(14)} `, // make 14x14 corner ====>  دول ال 28 اللي طرحناهم في السطر اللي فات
          `v ${ScaleHeight(70) - ScaleWidth(14)}`, // continue down ( total card hight / 2  - one corner curve )  = 70 - 14
          `a 0 0 0 0 0 -${ScaleWidth(12)} ${ScaleWidth(12)} `, // make the middle circle curve go left 12 and down 12
          `a 0 0 0 0 0 ${ScaleWidth(12)} ${ScaleWidth(12)} `, // continue the middle circle curve go down 12 and right 12
          `v ${ScaleHeight(209) - ScaleWidth(14)}`, // continue down more  70 - 14 --->( total card hight / 2  - one corner curve)
          `a 0 0 0 0 1 -${ScaleWidth(14)} ${ScaleWidth(14)} `, // make 14x14 corner

          `h -${screenWidth - ScaleWidth(40) - ScaleWidth(28 - 10)}`, // continue horizontal to left screenWidth  -  - 40 - 28 ========>  عكس تاني سطر
          `a 0 0 0 0 1 -${ScaleWidth(14)} -${ScaleWidth(14)} `, //make 14x14 corner
          `v ${-ScaleHeight(209) + ScaleWidth(14)}`, //continue up 70 - 14  --->( total card hight / 2  - one corner curve  )
          `a 0 0 0 0 0 ${ScaleWidth(12)} -${ScaleWidth(12)} `, // make the middle circle curve go right 12 and up 12
          `a 0 0 0 0 0 -${ScaleWidth(12)} -${ScaleWidth(12)} `, // make the middle circle curve go left 12 and up 12
          `v ${-ScaleHeight(70) + ScaleWidth(14)}`, //continue up 70 - 14   --> ( total card hight / 2  - one corner curve  )
          `a 0 0 0 0 1 ${ScaleWidth(14)} -${ScaleWidth(14)} `, //make 14x14 corner
          `z`, // finish the line in the start pont
        ].join(" ")}
        fill={"#FFF"}
        stroke={"#E4E0E0"}
        strokeWidth={1.2}
      />

      <Line
        strokeDasharray="4, 4"
        y1={ScaleHeight(70 + 14) + 0.6}
        x1={screenWidth - ScaleWidth(12) - ScaleWidth(20) - 7}
        y2={ScaleHeight(70 + 14) + 0.6}
        x2={ScaleWidth(20) + ScaleWidth(12) + 7}
        fill={"white"}
        stroke={"#787878"}
        strokeWidth={1.2}
      />

      <View
        style={{
          position: "absolute",
          // backgroundColor: '#12345640',
          top: ScaleHeight(20),
          right: ScaleWidth(37),
          left: ScaleWidth(37),
          height: ScaleHeight(306 - 40),
        }}
      >
        {children}
      </View>
    </Svg>
  );
};

const driverSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M17.4 22.75H7.60001C5.48001 22.75 3.75 21.02 3.75 18.9V5.10001C3.75 2.98001 5.48001 1.25 7.60001 1.25H17.4C19.52 1.25 21.25 2.98001 21.25 5.10001V18.9C21.25 21.02 19.52 22.75 17.4 22.75ZM7.60001 2.75C6.31001 2.75 5.25 3.80001 5.25 5.10001V18.9C5.25 20.19 6.30001 21.25 7.60001 21.25H17.4C18.69 21.25 19.75 20.2 19.75 18.9V5.10001C19.75 3.81001 18.7 2.75 17.4 2.75H7.60001Z" fill="#F29100"/>
  <path d="M19 13.75H6C4.76 13.75 3.75 12.74 3.75 11.5V9.5C3.75 8.26 4.76 7.25 6 7.25H19C20.24 7.25 21.25 8.26 21.25 9.5V11.5C21.25 12.74 20.24 13.75 19 13.75ZM6 8.75C5.59 8.75 5.25 9.09 5.25 9.5V11.5C5.25 11.91 5.59 12.25 6 12.25H19C19.41 12.25 19.75 11.91 19.75 11.5V9.5C19.75 9.09 19.41 8.75 19 8.75H6Z" fill="#F29100"/>
  <path d="M8.5 18.75C8.17 18.75 7.85 18.62 7.62 18.38C7.56 18.33 7.51001 18.26 7.46001 18.19C7.42001 18.13 7.38001 18.05 7.35001 17.98C7.31001 17.9 7.29 17.82 7.27 17.74C7.26 17.66 7.25 17.58 7.25 17.5C7.25 17.42 7.26 17.34 7.27 17.26C7.29 17.18 7.31001 17.0999 7.35001 17.0199C7.38001 16.9499 7.42001 16.87 7.46001 16.81C7.51001 16.74 7.56 16.67 7.62 16.62C8.08 16.15 8.91 16.15 9.38 16.62C9.44 16.67 9.48999 16.74 9.53999 16.81C9.57999 16.87 9.61999 16.9499 9.64999 17.0199C9.68999 17.0999 9.71 17.18 9.73 17.26C9.74 17.34 9.75 17.42 9.75 17.5C9.75 17.58 9.74 17.66 9.73 17.74C9.71 17.82 9.68999 17.9 9.64999 17.98C9.61999 18.05 9.57999 18.13 9.53999 18.19C9.48999 18.26 9.44 18.33 9.38 18.38C9.15 18.62 8.83 18.75 8.5 18.75Z" fill="#F29100"/>
  <path d="M16.5 18.75C16.17 18.75 15.85 18.62 15.62 18.38C15.38 18.15 15.25 17.83 15.25 17.5C15.25 17.17 15.38 16.85 15.62 16.62C16.08 16.15 16.92 16.15 17.38 16.62C17.62 16.85 17.75 17.17 17.75 17.5C17.75 17.83 17.62 18.15 17.38 18.38C17.15 18.62 16.83 18.75 16.5 18.75Z" fill="#F29100"/>
  <path d="M15 5.75H10C9.59 5.75 9.25 5.41 9.25 5C9.25 4.59 9.59 4.25 10 4.25H15C15.41 4.25 15.75 4.59 15.75 5C15.75 5.41 15.41 5.75 15 5.75Z" fill="#F29100"/>
</svg>
`;

const editSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 22.75C18.59 22.75 18.25 22.41 18.25 22V11C18.25 10.59 18.59 10.25 19 10.25C19.41 10.25 19.75 10.59 19.75 11V22C19.75 22.41 19.41 22.75 19 22.75Z" fill="#787878"/>
  <path d="M19 7.75C18.59 7.75 18.25 7.41 18.25 7V2C18.25 1.59 18.59 1.25 19 1.25C19.41 1.25 19.75 1.59 19.75 2V7C19.75 7.41 19.41 7.75 19 7.75Z" fill="#787878"/>
  <path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V17C11.25 16.59 11.59 16.25 12 16.25C12.41 16.25 12.75 16.59 12.75 17V22C12.75 22.41 12.41 22.75 12 22.75Z" fill="#787878"/>
  <path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#787878"/>
  <path d="M5 22.75C4.59 22.75 4.25 22.41 4.25 22V11C4.25 10.59 4.59 10.25 5 10.25C5.41 10.25 5.75 10.59 5.75 11V22C5.75 22.41 5.41 22.75 5 22.75Z" fill="#787878"/>
  <path d="M5 7.75C4.59 7.75 4.25 7.41 4.25 7V2C4.25 1.59 4.59 1.25 5 1.25C5.41 1.25 5.75 1.59 5.75 2V7C5.75 7.41 5.41 7.75 5 7.75Z" fill="#787878"/>
  <path d="M7 11.75H3C2.59 11.75 2.25 11.41 2.25 11C2.25 10.59 2.59 10.25 3 10.25H7C7.41 10.25 7.75 10.59 7.75 11C7.75 11.41 7.41 11.75 7 11.75Z" fill="#787878"/>
  <path d="M21 11.75H17C16.59 11.75 16.25 11.41 16.25 11C16.25 10.59 16.59 10.25 17 10.25H21C21.41 10.25 21.75 10.59 21.75 11C21.75 11.41 21.41 11.75 21 11.75Z" fill="#787878"/>
  <path d="M14 13.75H10C9.59 13.75 9.25 13.41 9.25 13C9.25 12.59 9.59 12.25 10 12.25H14C14.41 12.25 14.75 12.59 14.75 13C14.75 13.41 14.41 13.75 14 13.75Z" fill="#787878"/>
</svg>
`;
