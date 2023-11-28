import { I18nManager } from "react-native";
import RNRestart from "react-native-restart";
import { useDispatch, useSelector } from "react-redux";
import { setAppLang } from "store/slices/authSlice";

const useChangeLang = () => {
  const dispatch = useDispatch();

  const onChangeLangPress = async (newLang) => {
    dispatch(setAppLang(newLang));
    if (newLang === "en") {
      await I18nManager.forceRTL(false);
      await I18nManager.allowRTL(false);
      console.log("EN");
    } else {
      await I18nManager.forceRTL(true);
      await I18nManager.allowRTL(true);
      console.log("AR");
    }

    setTimeout(() => {
      RNRestart.restart();
    }, 1000);
  };

  return {
    onChangeLangPress,
  };
};

export default useChangeLang;
