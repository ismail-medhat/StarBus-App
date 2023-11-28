import React, { useRef, useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./styles";
import ScreenNames from "navigation/ScreenNames";
import { Images, ScaleHeight } from "common";
import {
  AppHeader,
  Input,
  ScreenContainer,
  UnderlineButton,
  AppButton,
  PhoneNumberInput,
} from "components";
import { height, translate } from "utils";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { loginValidationSchema } from "utils/validations";
import { SVGLogin, SVGLock, SVGEye } from "assets/Svg";
import { loginUser } from "store/slices";
import Toast from "react-native-toast-message";

const LoginScreen = ({ navigation }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const { authLoading } = useSelector((state) => state.auth);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const formikRef = useRef();

  const onEyeIconPressed = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleLogin = async (values) => {
    setLoading(true);
    const formData = new FormData();
    for (const [key, value] of Object.entries(values)) {
      formData.append(key, value);
    }

    dispatch(loginUser(formData))
      .unwrap()
      .then((res) => {
        if (res?.access_token?.length > 0) {
          navigation.navigate(ScreenNames.BottomTabs);
          Toast.show({
            type: "success",
            text1: "Login successfully 👋",
          });
          setLoading(false);
        } else {
          Toast.show({
            type: "info",
            text1: "Phone number or password is incorrect",
          });
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("Error :: ", err);
        setLoading(false);
      });
  };

  return (
    <ScreenContainer>
      <AppHeader hideBack title={translate("Login")} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "postion"}
          keyboardVerticalOffset={ScaleHeight(120)}
        >
          <View style={{ backgroundColor: "#fff" }}>
            <Image source={Images.logo} style={styles.logo} />

            <Formik
              initialValues={{ tel_number: "", password: "" }}
              validationSchema={loginValidationSchema}
              onSubmit={handleLogin}
              innerRef={formikRef}
            >
              {({ handleChange, touched, handleSubmit, values, errors }) => (
                <>
                  <PhoneNumberInput
                    value={values.tel_number}
                    onChangeText={handleChange("tel_number")}
                    isHaveError={errors.tel_number && touched.tel_number}
                    errorTxt={errors.tel_number}
                  />
                  <Input
                    value={values.password}
                    onChangeText={handleChange("password")}
                    isHaveError={errors.password && touched.password}
                    errorTxt={errors.password}
                    placeholderTxt={translate("Enter your password")}
                    label={translate("Password")}
                    leftIcon={<SVGLock />}
                    rightIcon={<SVGEye />}
                    secureTextEntry={secureTextEntry}
                    onRightIconPress={onEyeIconPressed}
                  />

                  <View style={styles.rowBetween}>
                    <View />
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate(ScreenNames.ForgetPassword);
                      }}
                    >
                      <Text style={styles.forgetPassTxt}>
                        {translate("Forget Password ?")}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <AppButton
                    btnStyle={styles.loginbutton}
                    title={translate("Login")}
                    icon={<SVGLogin />}
                    onPress={handleSubmit}
                    loading={loading}
                  />
                </>
              )}
            </Formik>

            <UnderlineButton
              title={t("create New Account?")}
              btnStyle={{ marginTop: height(50) }}
              onPress={() => navigation.navigate(ScreenNames.Signup)}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </ScreenContainer>
  );
};

export default LoginScreen;
