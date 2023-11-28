import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Calendar } from "react-native-calendars";
import { styles } from "./styles";
import moment from "moment";
import Feather from "react-native-vector-icons/Feather";
import { Colors, ScaleHeight } from "common";
import { translate } from "utils";
import AppButton from "components/AppButton";
import CustomBottomSheet from "components/CustomBottomSheet";

const INITIAL_DATE = new Date();

const DatePicker = ({
  isOpen,
  onClose,
  height = ScaleHeight("75%"),
  dragFromTopOnly,
  currentDate,
  onSubmit = (date) => {},
  title = translate("Tripe Book Date"),
}) => {
  const customHeaderProps = useRef();

  const [date, setDate] = useState(currentDate ?? INITIAL_DATE);
  const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);

  const onDayPress = useCallback((day) => {
    setDate(day?.dateString);
  }, []);

  const marked = useMemo(() => {
    return {
      [date]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: Colors.whitePurple,
        selectedTextColor: Colors.blackColor,
        dotColor: Colors.purpleColor,
        marked: true,
      },
    };
  }, [date]);

  const setCustomHeaderNewMonth = (next = false) => {
    const add = next ? 1 : -1;
    const month = new Date(customHeaderProps?.current?.month);
    const newMonth = new Date(month.setMonth(month.getMonth() + add));
    customHeaderProps?.current?.addMonth(add);
    setCurrentMonth(newMonth.toISOString().split("T")[0]);
  };
  const moveNext = () => {
    setCustomHeaderNewMonth(true);
  };
  const movePrevious = () => {
    setCustomHeaderNewMonth(false);
  };

  const CustomHeader = React.forwardRef((props, ref) => {
    customHeaderProps.current = props;

    return (
      <View ref={ref} {...props} style={styles.customHeader}>
        <View style={styles.monthAndArrows}>
          <TouchableOpacity onPress={movePrevious} style={styles.arrowButton}>
            <Feather
              name="chevron-left"
              color={Colors.black}
              size={ScaleHeight(20)}
            />
          </TouchableOpacity>
          <Text style={styles.customHeaderTitle}>
            {moment(currentMonth).format("MMMM YYYY")}
          </Text>
          <TouchableOpacity onPress={moveNext} style={styles.arrowButton}>
            <Feather
              name="chevron-right"
              color={Colors.blackColor}
              size={ScaleHeight(20)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.fromAndToWrapper}>
          <View activeOpacity={0.5} style={[styles.selectedDateButton]}>
            <Text style={styles.dateText}>
              {date ? moment(date).format("DD/MM/YYYY") : ""}
            </Text>
          </View>
        </View>
      </View>
    );
  });

  return (
    <CustomBottomSheet
      isOpen={isOpen}
      onClose={onClose}
      height={height || ScaleHeight("75%")}
      containerStyle={{ flex: 1 }}
      dragFromTopOnly={dragFromTopOnly}
    >
      <View style={[styles.filterHeader, styles.logDateHeader]}>
        <Text style={styles.filterHeaderText}>{title}</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
      >
        <Calendar
          testID={"calendar_test"}
          enableSwipeMonths={false}
          current={date}
          minDate={INITIAL_DATE}
          onDayPress={onDayPress}
          markedDates={marked}
          customHeader={CustomHeader}
        />
      </ScrollView>
      <AppButton
        btnStyle={styles.selectBtn}
        title={translate("Select")}
        onPress={() => {
          onClose();
          onSubmit(date);
        }}
      />
    </CustomBottomSheet>
  );
};

export default DatePicker;
