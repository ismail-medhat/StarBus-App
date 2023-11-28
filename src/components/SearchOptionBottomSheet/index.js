import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import { styles } from "./styles";
import { translate, width } from "utils";
import { Colors, Images, ScaleHeight, ScaleWidth } from "common";
import Icon from "react-native-vector-icons/AntDesign";
import CustomBottomSheet from "components/CustomBottomSheet";
import { useSelector } from "react-redux";
import Loader from "components/Loader";
import ScreenContainer from "components/ScreenContainer";

const SearchOptionBottomSheet = ({
  isOpen,
  onClose,
  height = ScaleHeight("75%"),
  containerStyle,
  listTitle,
  dragFromTopOnly = false,
  listData = [ {}, {}, {}, {}, {} ],
  onSelectOption = (item) => { },
  loading = false,
  emptyDataMessage = translate("There is no options found"),
}) => {
  const isIOS = Platform.OS == "ios" ? true : false;
  const [ searchVal, setSearchVal ] = useState("");
  const [ displayList, setDisplayList ] = useState(listData);
  const { appLang } = useSelector((state) => state.auth);

  const renderRadioOptionItem = useCallback(
    ({ item, index }) => {
      return (
        <TouchableOpacity
          onPress={ () => {
            onSelectOption(item);
            onClose();
          } }
          style={ styles.rowOptionStyle }
        >
          <Text style={ styles.optionTxt }>
            { appLang == "en" ? item?.name : item?.name_ar }
          </Text>
        </TouchableOpacity>
      );
    },
    [ searchVal, displayList ]
  );

  const onSearchKeyChange = (searchTerm) => {
    setSearchVal(searchTerm);
    console.log("searchTerm :: ", searchTerm);
    if (searchTerm?.length > 0) {
      const filterDisplayList = listData.filter((item) =>
        appLang == "en"
          ? item.name.toLowerCase().includes(searchTerm.toLowerCase())
          : item.name_ar.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log("filterDisplayList :: ", filterDisplayList);
      setDisplayList(filterDisplayList);
    } else {
      setDisplayList(listData);
    }
  };

  return (
    <CustomBottomSheet
      isOpen={ isOpen }
      onClose={ onClose }
      height={ height || ScaleHeight("75%") }
      containerStyle={ { flex: 1 } }
      dragFromTopOnly={ dragFromTopOnly }
    >
      <ScreenContainer style={ { paddingTop: 0 } }>
        <KeyboardAvoidingView
          behavior={ Platform.OS === "ios" ? "padding" : "postion" }
          style={ { flex: 1 } }
        >
          <View style={ [ styles.sheetView, containerStyle ] }>
            <Text style={ styles.titleOption }>{ listTitle }</Text>

            <View style={ styles.searchInpBox }>
              <Icon name={ "search1" } color={ Colors.blackColor } size={ 18 } />
              <TextInput
                value={ searchVal }
                placeholder={ translate("Search") }
                onChangeText={ onSearchKeyChange }
                style={ styles.searchInpStyle }
              />
            </View>

            { loading ? (
              <Loader />
            ) : !displayList || displayList?.length == 0 ? (
              <View style={ styles.emptyDataContainer }>
                <Image
                  source={ Images.noLocation }
                  style={ styles.emptyImg }
                  resizeMode="contain"
                />
                <Text style={ styles.emptyDataTxt }>{ emptyDataMessage }</Text>
              </View>
            ) : (
              <FlatList
                data={ displayList }
                renderItem={ renderRadioOptionItem }
                keyExtractor={ (item, index) => JSON.stringify(index) }
                showsVerticalScrollIndicator={ false }
              />
            ) }
          </View>
        </KeyboardAvoidingView>
      </ScreenContainer>
    </CustomBottomSheet>
  );
};

export default SearchOptionBottomSheet;
