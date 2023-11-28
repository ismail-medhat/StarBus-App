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
import { signupValidationSchema } from "utils/validations";
import {
  SVGLock,
  SVGEye,
  SVGProfile,
  SVGChecked,
  SVGUnchecked,
  SVGAddAccount,
} from "assets/Svg";
import { signupNewUser } from "store/slices";
import Toast from "react-native-toast-message";
import { Colors, Fonts } from "common";
import { fontSize } from "../../../utils";

const SignUpScreen = ({ navigation }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const { authLoading } = useSelector((state) => state.auth);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const formikRef = useRef();

  const onEyeIconPressed = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleSignup = async (values) => {
    setLoading(true);
    const formData = new FormData();
    for (const [key, value] of Object.entries(values)) {
      if (key != "rePassword") {
        formData.append(key, value);
      }
    }

    dispatch(signupNewUser(formData))
      .unwrap()
      .then((res) => {
        if (res) {
          navigation.navigate(ScreenNames.Login);
          Toast.show({
            type: "success",
            text1: "Your account created successfully",
            text2: "Please login with your phone and password",
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
      <AppHeader title={translate("SignUp")} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "postion"}
        >
          <View style={{ backgroundColor: "#fff" }}>
            <Image source={Images.logo} style={styles.logo} />

            <Formik
              initialValues={{
                name: "",
                gender: "male",
                tel_number: "",
                password: "",
                rePassword: "",
              }}
              validationSchema={signupValidationSchema}
              onSubmit={handleSignup}
              innerRef={formikRef}
            >
              {({
                handleChange,
                touched,
                handleSubmit,
                values,
                errors,
                setFieldValue,
              }) => (
                <>
                  <Input
                    value={values.name}
                    onChangeText={handleChange("name")}
                    isHaveError={errors.name && touched.name}
                    errorTxt={errors.name}
                    placeholderTxt={translate("Enter your name")}
                    label={translate("Your Name")}
                    leftIcon={<SVGProfile />}
                  />

                  <Text style={styles.label}>{translate("Your Gender")}</Text>
                  <View style={styles.rowStart}>
                    <View style={styles.rowStart}>
                      <TouchableOpacity
                        onPress={() => setFieldValue("gender", "male")}
                      >
                        {values.gender == "male" ? (
                          <SVGChecked />
                        ) : (
                          <SVGUnchecked />
                        )}
                      </TouchableOpacity>
                      <Text
                        style={[
                          styles.genderValTxt,
                          {
                            color:
                              values.gender === "male"
                                ? Colors.primaryColor
                                : "#333",
                          },
                        ]}
                      >
                        {translate("Male")}
                      </Text>
                    </View>

                    <View style={styles.rowStart}>
                      <TouchableOpacity
                        onPress={() => setFieldValue("gender", "female")}
                      >
                        {values.gender == "female" ? (
                          <SVGChecked />
                        ) : (
                          <SVGUnchecked />
                        )}
                      </TouchableOpacity>
                      <Text
                        style={[
                          styles.genderValTxt,
                          {
                            color:
                              values.gender === "female"
                                ? Colors.primaryColor
                                : "#333",
                          },
                        ]}
                      >
                        {translate("Female")}
                      </Text>
                    </View>
                  </View>

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

                  <Input
                    value={values.rePassword}
                    onChangeText={handleChange("rePassword")}
                    isHaveError={errors.rePassword && touched.rePassword}
                    errorTxt={errors.rePassword}
                    placeholderTxt={translate("Enter your password")}
                    label={translate("Repassword")}
                    leftIcon={<SVGLock />}
                    rightIcon={<SVGEye />}
                    secureTextEntry={secureTextEntry}
                    onRightIconPress={onEyeIconPressed}
                  />

                  <AppButton
                    btnStyle={{}}
                    title={translate("create New Account")}
                    icon={<SVGAddAccount />}
                    onPress={handleSubmit}
                    loading={loading}
                  />
                </>
              )}
            </Formik>

            <UnderlineButton
              title={translate("Login")}
              btnStyle={{ marginTop: height(50) }}
              onPress={() => navigation.navigate(ScreenNames.Login)}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </ScreenContainer>
  );
};

export default SignUpScreen;
