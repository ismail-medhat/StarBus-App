import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef, useEffect } from "react";
import { styles } from "./styles";
import BottomSheet from "react-native-raw-bottom-sheet";
import { Colors, ScaleHeight } from "common";

const CustomBottomSheet = ({
  isOpen,
  onClose,
  children,
  height = 200,
  containerStyle,
  dragFromTopOnly = false,
}) => {
  const bottomSheetRef = useRef();
  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current.open();
    } else {
      bottomSheetRef.current.close();
    }
  }, [isOpen]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      height={height}
      duration={250}
      closeOnDragDown
      onClose={onClose}
      animationType="fade"
      dragFromTopOnly={dragFromTopOnly}
      customStyles={{
        container: {
          borderTopLeftRadius: ScaleHeight(10),
          borderTopRightRadius: ScaleHeight(10),
        },
        draggableIcon: {
          backgroundColor: Colors.whiteColor,
        },
      }}
    >
      <View style={[styles.sheetView, containerStyle]}>{children}</View>
    </BottomSheet>
  );
};

export default CustomBottomSheet;
